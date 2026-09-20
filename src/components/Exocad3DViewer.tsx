"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  RotateCw,
  Eye,
  Box,
  Layers,
  Sparkles,
  Maximize2,
  Activity,
  CheckCircle2,
  RefreshCw,
  Sliders
} from "lucide-react";

interface Exocad3DViewerProps {
  selectedTooth?: number;
  onSelectTooth?: (tooth: number) => void;
  className?: string;
}

export default function Exocad3DViewer({
  selectedTooth = 14,
  onSelectTooth,
  className = "",
}: Exocad3DViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [viewMode, setViewMode] = useState<"shaded" | "wireframe" | "heatmap">("shaded");
  const [currentTooth, setCurrentTooth] = useState(selectedTooth);
  const [rotationAngle, setRotationAngle] = useState(0);

  // Sync prop changes
  useEffect(() => {
    setCurrentTooth(selectedTooth);
  }, [selectedTooth]);

  const handleToothClick = (t: number) => {
    setCurrentTooth(t);
    if (onSelectTooth) onSelectTooth(t);
  };

  // 3D Engine Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let angle = rotationAngle;

    const render = () => {
      if (isRotating) {
        angle += 0.015;
        setRotationAngle(angle);
      }

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 + 10;
      const radiusX = Math.min(width, height) * 0.35;
      const radiusY = radiusX * 0.45;

      // 1. Draw 3D CAD Grid Floor
      ctx.strokeStyle = "rgba(34, 211, 238, 0.12)";
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

        // Determine tooth FDI number (18 down to 11, then 21 to 28)
        const toothNum = i < 8 ? 18 - i : 21 + (i - 8);
        const isSelected = toothNum === currentTooth;

        teethData.push({
          num: toothNum,
          x: screenX,
          y: screenY,
          z: rz,
          scale: scale * 0.95,
          isSelected,
        });
      }

      // Sort teeth by Z depth for 3D occlusion ordering
      teethData.sort((a, b) => a.z - b.z);

      // Render 3D Teeth Geometry & Shading
      teethData.forEach((tooth) => {
        const { x, y, scale, isSelected, num } = tooth;
        const toothWidth = 18 * scale;
        const toothHeight = 24 * scale;

        ctx.save();
        ctx.translate(x, y);

        // 3D Glow for Selected Tooth
        if (isSelected) {
          const glowGrad = ctx.createRadialGradient(0, 0, 2, 0, 0, toothWidth * 2.5);
          glowGrad.addColorStop(0, "rgba(59, 130, 246, 0.8)");
          glowGrad.addColorStop(0.5, "rgba(6, 182, 212, 0.3)");
          glowGrad.addColorStop(1, "rgba(6, 182, 212, 0)");
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

        // View Mode Shading Style
        if (viewMode === "shaded") {
          const grad = ctx.createLinearGradient(-toothWidth, -toothHeight, toothWidth, toothHeight);
          if (isSelected) {
            grad.addColorStop(0, "#fbbf24");
            grad.addColorStop(0.5, "#f59e0b");
            grad.addColorStop(1, "#b45309");
          } else {
            grad.addColorStop(0, "#ffffff");
            grad.addColorStop(0.4, "#e2e8f0");
            grad.addColorStop(0.8, "#cbd5e1");
            grad.addColorStop(1, "#94a3b8");
          }
          ctx.fillStyle = grad;
          ctx.fill();

          ctx.strokeStyle = isSelected ? "#fef08a" : "rgba(255, 255, 255, 0.6)";
          ctx.lineWidth = isSelected ? 2 : 1;
          ctx.stroke();
        } else if (viewMode === "wireframe") {
          ctx.fillStyle = isSelected ? "rgba(245, 158, 11, 0.3)" : "rgba(15, 23, 42, 0.6)";
          ctx.fill();

          ctx.strokeStyle = isSelected ? "#f59e0b" : "#22d3ee";
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // CAD Mesh Grid lines inside tooth
          ctx.beginPath();
          ctx.moveTo(0, -toothHeight * 0.5);
          ctx.lineTo(0, toothHeight * 0.5);
          ctx.moveTo(-toothWidth * 0.4, 0);
          ctx.lineTo(toothWidth * 0.4, 0);
          ctx.strokeStyle = isSelected ? "rgba(254, 240, 138, 0.6)" : "rgba(34, 211, 238, 0.4)";
          ctx.stroke();
        } else if (viewMode === "heatmap") {
          const heatGrad = ctx.createRadialGradient(0, 0, 1, 0, 0, toothWidth);
          if (isSelected) {
            heatGrad.addColorStop(0, "#ef4444");
            heatGrad.addColorStop(0.5, "#f97316");
            heatGrad.addColorStop(1, "#eab308");
          } else {
            heatGrad.addColorStop(0, "#10b981");
            heatGrad.addColorStop(0.6, "#06b6d4");
            heatGrad.addColorStop(1, "#3b82f6");
          }
          ctx.fillStyle = heatGrad;
          ctx.fill();

          ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Tooth FDI Number Badge
        ctx.fillStyle = isSelected ? "#ffffff" : "#0f172a";
        ctx.font = `bold ${Math.max(9, Math.floor(10 * scale))}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`#${num}`, 0, 1);

        ctx.restore();
      });

      // 3. Render 3D Laser Scanning Sweep Line
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

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isRotating, viewMode, currentTooth, rotationAngle]);

  return (
    <div className={`relative rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl ${className}`}>
      {/* Exocad CAD Header Overlay */}
      <div className="flex items-center justify-between p-3.5 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-black tracking-wider text-cyan-400 font-mono uppercase">
            EXOCAD 3D DENTAL CAD • ARCH SCAN
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-1 border ${
              isRotating
                ? "bg-blue-600/30 text-cyan-300 border-cyan-500/40"
                : "bg-slate-800 text-slate-400 border-slate-700"
            }`}
            title="Toggle Auto 360° Rotation"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? "animate-spin" : ""}`} />
            <span>{isRotating ? "360° ROTATING" : "PAUSED"}</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Rendering Area */}
      <div className="relative w-full h-[260px] sm:h-[300px] bg-slate-950 flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
        <canvas
          ref={canvasRef}
          width={520}
          height={300}
          className="w-full h-full object-contain"
        />

        {/* 3D CAD Target Crosshair Overlay */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-16 h-16 border border-cyan-500/20 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>
        </div>

        {/* Selected Tooth Diagnostics Floating HUD */}
        <div className="absolute top-3 left-3 bg-slate-900/90 border border-slate-800 backdrop-blur-md p-2.5 rounded-xl text-[11px] font-mono space-y-1 shadow-lg pointer-events-none">
          <div className="text-amber-400 font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TOOTH #{currentTooth} SELECTED</span>
          </div>
          <div className="text-slate-300">Type: {currentTooth === 14 ? "Upper 1st Premolar" : "Maxillary Tooth"}</div>
          <div className="text-slate-400">Prep Margin: <span className="text-emerald-400 font-semibold">0.5mm Supragingival</span></div>
          <div className="text-slate-400">Crown Material: <span className="text-cyan-300 font-semibold">Zirconia High Translucency</span></div>
        </div>

        {/* Mode Selector Badge Buttons */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 p-1 rounded-xl backdrop-blur-md">
          <button
            onClick={() => setViewMode("shaded")}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
              viewMode === "shaded" ? "bg-blue-600 text-white shadow-xs" : "text-slate-400 hover:text-white"
            }`}
          >
            3D Shade
          </button>
          <button
            onClick={() => setViewMode("wireframe")}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
              viewMode === "wireframe" ? "bg-cyan-600 text-white shadow-xs" : "text-slate-400 hover:text-white"
            }`}
          >
            CAD Mesh
          </button>
          <button
            onClick={() => setViewMode("heatmap")}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
              viewMode === "heatmap" ? "bg-rose-600 text-white shadow-xs" : "text-slate-400 hover:text-white"
            }`}
          >
            Occlusion Map
          </button>
        </div>
      </div>

      {/* FDI Tooth Quick Selector Bar */}
      <div className="p-3 bg-slate-900 border-t border-slate-800 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Click tooth to inspect CAD model:</span>
          <span className="text-cyan-400 font-bold">FDI Maxillary Teeth (18-28)</span>
        </div>

        <div className="flex items-center justify-center gap-1.5 overflow-x-auto scrollbar-none py-1">
          {[18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28].map((t) => (
            <button
              key={t}
              onClick={() => handleToothClick(t)}
              className={`w-7 h-8 rounded-lg text-[10px] font-mono font-bold border transition-all flex items-center justify-center flex-shrink-0 ${
                currentTooth === t
                  ? "bg-amber-500 text-slate-950 border-amber-300 shadow-md shadow-amber-500/30 scale-105"
                  : "bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white"
              }`}
            >
              #{t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
