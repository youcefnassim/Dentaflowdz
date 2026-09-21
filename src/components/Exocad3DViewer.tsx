"use client";

import React, { useRef, useEffect, useState } from "react";
import { Sparkles, Play, Pause } from "lucide-react";

interface Exocad3DViewerProps {
  className?: string;
  selectedTooth?: number;
  onSelectTooth?: (tooth: number) => void;
}

export default function Exocad3DViewer({
  className = "",
  selectedTooth: initialSelected = 14,
  onSelectTooth,
}: Exocad3DViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTooth, setActiveTooth] = useState(initialSelected);
  const teethCoordsRef = useRef<{ num: number; x: number; y: number }[]>([]);

  // Toggle rotation & detect touched tooth on Click / Touch
  const handleInteract = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    // Toggle pause
    setIsPaused((prev) => !prev);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();

    let clientX = 0;
    let clientY = 0;

    if ("touches" in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ("clientX" in e) {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const clickX = (clientX - rect.left) * (canvas.width / rect.width);
    const clickY = (clientY - rect.top) * (canvas.height / rect.height);

    // Find nearest tooth clicked
    if (teethCoordsRef.current.length > 0) {
      let closest = teethCoordsRef.current[0];
      let minDistance = Infinity;

      teethCoordsRef.current.forEach((t) => {
        const dist = Math.hypot(t.x - clickX, t.y - clickY);
        if (dist < minDistance) {
          minDistance = dist;
          closest = t;
        }
      });

      if (minDistance < 45) {
        setActiveTooth(closest.num);
        if (onSelectTooth) onSelectTooth(closest.num);
      }
    }
  };

  // 3D Engine Canvas Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let angle = 0;

    const render = () => {
      if (!isPaused) {
        angle += 0.015;
      }

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 + 10;
      const radiusX = Math.min(width, height) * 0.38;
      const radiusY = radiusX * 0.45;

      // 1. Draw 3D CAD Grid Floor
      ctx.strokeStyle = isPaused ? "rgba(245, 158, 11, 0.15)" : "rgba(34, 211, 238, 0.12)";
      ctx.lineWidth = 1;
      const gridLines = 8;
      for (let i = -gridLines; i <= gridLines; i++) {
        const offset = i * (radiusX / gridLines);
        ctx.beginPath();
        ctx.moveTo(centerX + offset, centerY - radiusY);
        ctx.lineTo(centerX + offset * 0.7, centerY + radiusY * 1.3);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(centerX - radiusX, centerY + offset * 0.5);
        ctx.lineTo(centerX + radiusX, centerY + offset * 0.5);
        ctx.stroke();
      }

      // 2. Render 3D Dental Arch Teeth Array
      const totalTeeth = 16;
      const teethData = [];
      const currentCoords: { num: number; x: number; y: number }[] = [];

      for (let i = 0; i < totalTeeth; i++) {
        const theta = (i / (totalTeeth - 1)) * Math.PI - Math.PI; // Arch arc
        const rotatedTheta = theta + Math.sin(angle * 0.5) * 0.25;

        // 3D Perspective Projection
        const x3d = Math.cos(rotatedTheta) * radiusX;
        const y3d = Math.sin(rotatedTheta) * radiusY;
        const z3d = Math.sin(rotatedTheta) * 40;

        // Apply global 3D rotation
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const rx = x3d * cosA - z3d * sinA;
        const rz = x3d * sinA + z3d * cosA;

        const scale = (rz + 300) / 300;
        const screenX = centerX + rx;
        const screenY = centerY + y3d * scale;

        const toothNum = i < 8 ? 18 - i : 21 + (i - 8);
        const isSelected = toothNum === activeTooth;

        currentCoords.push({ num: toothNum, x: screenX, y: screenY });

        teethData.push({
          num: toothNum,
          x: screenX,
          y: screenY,
          z: rz,
          scale: scale * 0.95,
          isSelected,
        });
      }

      teethCoordsRef.current = currentCoords;

      // Sort teeth by Z depth for 3D occlusion ordering
      teethData.sort((a, b) => a.z - b.z);

      // Render 3D Teeth Geometry & Shading
      teethData.forEach((tooth) => {
        const { x, y, scale, num, isSelected } = tooth;
        const toothWidth = 18 * scale;
        const toothHeight = 24 * scale;

        ctx.save();
        ctx.translate(x, y);

        // 3D Glow for Selected/Touched Tooth
        if (isSelected) {
          const glowGrad = ctx.createRadialGradient(0, 0, 2, 0, 0, toothWidth * 2.5);
          glowGrad.addColorStop(0, "rgba(245, 158, 11, 0.9)");
          glowGrad.addColorStop(0.5, "rgba(234, 179, 8, 0.4)");
          glowGrad.addColorStop(1, "rgba(234, 179, 8, 0)");
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(0, 0, toothWidth * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Tooth Body Shape Path
        ctx.beginPath();
        ctx.moveTo(-toothWidth * 0.5, toothHeight * 0.4);
        ctx.quadraticCurveTo(-toothWidth * 0.6, -toothHeight * 0.3, 0, -toothHeight * 0.6);
        ctx.quadraticCurveTo(toothWidth * 0.6, -toothHeight * 0.3, toothWidth * 0.5, toothHeight * 0.4);
        ctx.quadraticCurveTo(0, toothHeight * 0.6, -toothWidth * 0.5, toothHeight * 0.4);
        ctx.closePath();

        // 3D Metallic Ceramic Shading
        const grad = ctx.createLinearGradient(-toothWidth, -toothHeight, toothWidth, toothHeight);
        if (isSelected) {
          grad.addColorStop(0, "#fef08a");
          grad.addColorStop(0.4, "#f59e0b");
          grad.addColorStop(0.8, "#d97706");
          grad.addColorStop(1, "#92400e");
        } else {
          grad.addColorStop(0, "#ffffff");
          grad.addColorStop(0.4, "#e2e8f0");
          grad.addColorStop(0.8, "#cbd5e1");
          grad.addColorStop(1, "#94a3b8");
        }
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.strokeStyle = isSelected ? "#fef08a" : "rgba(255, 255, 255, 0.7)";
        ctx.lineWidth = isSelected ? 2 : 1;
        ctx.stroke();

        // Tooth FDI Number Badge
        ctx.fillStyle = isSelected ? "#ffffff" : "#0f172a";
        ctx.font = `bold ${Math.max(9, Math.floor(10 * scale))}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`#${num}`, 0, 1);

        ctx.restore();
      });

      // 3. Render 3D Laser Scanning Sweep Line
      if (!isPaused) {
        const scanY = centerY + Math.sin(angle * 2) * (radiusY * 0.9);
        const scanGrad = ctx.createLinearGradient(centerX - radiusX, 0, centerX + radiusX, 0);
        scanGrad.addColorStop(0, "rgba(6, 182, 212, 0)");
        scanGrad.addColorStop(0.5, "rgba(6, 182, 212, 0.7)");
        scanGrad.addColorStop(1, "rgba(6, 182, 212, 0)");

        ctx.strokeStyle = scanGrad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX - radiusX * 1.1, scanY);
        ctx.lineTo(centerX + radiusX * 1.1, scanY);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused, activeTooth]);

  return (
    <div className={`relative rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden shadow-2xl flex items-center justify-center ${className}`}>
      {/* 3D Canvas Area */}
      <div className="relative w-full h-[280px] sm:h-[320px] bg-slate-950 flex items-center justify-center select-none cursor-pointer">
        <canvas
          ref={canvasRef}
          width={520}
          height={320}
          onClick={handleInteract}
          onTouchStart={handleInteract}
          className="w-full h-full object-contain"
        />

        {/* Made by DentaFlow Watermark Badge (Bottom-Right) */}
        <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-cyan-400 text-xs font-bold shadow-lg backdrop-blur-md pointer-events-none">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="tracking-wide">Made by DentaFlow</span>
        </div>
      </div>
    </div>
  );
}
