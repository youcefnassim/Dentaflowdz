import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  dark?: boolean;
}

export default function Logo({ className = "", iconOnly = false, dark = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Real DentaFlow Logo Image from src/logo.jpg */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-blue-500/20 group-hover:scale-105 transition-all duration-300 border border-slate-200/60 bg-white">
        <Image
          src="/images/logo.jpg"
          alt="DentaFlow Logo"
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <span className={`text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap transition-colors ${dark ? "text-white" : "text-slate-900"}`}>
            Denta<span className="text-blue-600">Flow</span>
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-blue-600 dark:text-cyan-400 -mt-1 whitespace-nowrap hidden min-[360px]:inline-block">
            Smart Clinic Management
          </span>
        </div>
      )}
    </Link>
  );
}
