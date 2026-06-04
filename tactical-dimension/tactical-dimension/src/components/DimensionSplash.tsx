import React from "react";
import { ScreenName } from "../types";
import { Power, Terminal, Signal, Lock, Eye, AlertCircle } from "lucide-react";

interface DimensionSplashProps {
  onNavigate: (target: ScreenName, transition: "push" | "push_back" | "none") => void;
}

export default function DimensionSplash({ onNavigate }: DimensionSplashProps) {
  return (
    <div className="relative min-h-screen w-full bg-black text-on-surface flex flex-col justify-center items-center overflow-hidden font-mono select-none selection:bg-amber-500/20">
      {/* Scanline texture */}
      <div className="absolute inset-0 scanlines opacity-20 pointer-events-none z-10" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #00A2FF 1px, transparent 1px), linear-gradient(to bottom, #00A2FF 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      {/* HUD Telemetry Corners */}
      {/* Top Left */}
      <div className="absolute top-6 left-6 z-20 flex flex-col gap-1.5 border-l border-t border-amber-500/30 pl-3 pt-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          <span className="text-xs text-amber-500 font-bold tracking-widest uppercase">SYS.ON // SEC_ACTIVE</span>
        </div>
        <div className="text-[10px] text-zinc-500 leading-tight">
          LOC: 45.92°N 12.43°E<br />
          ALT: 84,000 FT<br />
          <span className="text-orange-500">ENCRYPTION_LVL_9</span>
        </div>
      </div>

      {/* Top Right */}
      <div className="absolute top-6 right-6 z-20 text-right flex flex-col items-end gap-1.5 border-r border-t border-blue-500/30 pr-3 pt-3">
        <span className="text-xs text-blue-400 font-bold tracking-wider uppercase">[UPLINK ESTABLISHED]</span>
        <div className="flex gap-0.5 items-end h-5 opacity-60">
          <div className="w-1 h-3 bg-blue-500" />
          <div className="w-1 h-4 bg-blue-500" />
          <div className="w-1 h-2 bg-blue-500 animate-pulse" />
          <div className="w-1 h-5 bg-blue-500" />
          <div className="w-1 h-3 bg-blue-500" />
        </div>
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1 border-l border-b border-zinc-700/50 pl-3 pb-3">
        <div className="text-[10px] text-zinc-500 uppercase">
          UPLINK_STATUS:<br />
          <span className="text-green-400 font-bold">STABLE // SECURE</span>
        </div>
        <div className="h-px w-16 bg-zinc-700 mt-1" />
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-6 right-6 z-20 text-right border-r border-b border-zinc-700/50 pr-3 pb-3">
        <span className="text-xs text-amber-500 font-bold tracking-wide">T-MINUS 00:04:21</span>
        <div className="text-[9px] text-zinc-500 uppercase mt-1">
          INITIATING_SEQUENCE_LOAD
        </div>
      </div>

      {/* Background Massive Watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <span className="text-[26vw] font-extrabold text-white/[0.02] tracking-wider select-none uppercase leading-none">
          DIMENSION
        </span>
      </div>

      {/* Center content container */}
      <main className="relative z-20 flex flex-col items-center justify-center px-4 max-w-4xl text-center">
        {/* Floating sequence code label */}
        <div className="mb-4 text-xs text-blue-400 tracking-[0.3em] font-semibold bg-blue-950/20 px-3 py-1 border border-blue-500/20">
          [ SEQUENCE_01 ]
        </div>

        {/* Large Aesthetic Title with custom flicker styling */}
        <h1 
          className="text-5xl md:text-8xl font-black text-amber-500 tracking-tighter uppercase mb-6 leading-none"
          style={{
            fontFamily: "var(--font-sans)",
            textShadow: "0 0 20px rgba(245, 158, 11, 0.4)",
            animation: "pulse-light 4s infinite"
          }}
        >
          TACTICAL<br />DIMENSION
        </h1>

        {/* Central Spinning Reticle/Radar */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 my-6 flex items-center justify-center">
          {/* Static outer boundaries */}
          <div className="absolute rounded-full border border-zinc-800 w-full h-full" />
          
          {/* Dashboard rotating reticles */}
          <div 
            className="absolute rounded-full border border-dashed border-amber-500/40 w-[90%] h-[90%]"
            style={{ animation: "radar-sweep 25s linear infinite" }}
          />
          <div 
            className="absolute rounded-full border border-blue-500/20 w-[70%] h-[70%]"
            style={{ animation: "radar-sweep 15s linear infinite reverse" }}
          />
          <div className="absolute rounded-full border border-zinc-800 w-[50%] h-[50%]" />
          
          {/* Crosshair axes */}
          <div className="absolute w-full h-px bg-zinc-800/60" />
          <div className="absolute h-full w-px bg-zinc-800/60" />

          {/* Core dot with pulse animate */}
          <div className="w-10 h-10 rounded-full border border-amber-500/50 bg-amber-500/10 flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <div className="w-2 h-2 bg-amber-500 rounded-full" />
          </div>

          {/* Float heading degrees code */}
          <div className="absolute top-1 text-[9px] text-zinc-500 tracking-wider">0° N</div>
          <div className="absolute bottom-1 text-[9px] text-zinc-500 tracking-wider">180° S</div>
          <div className="absolute left-1 text-[9px] text-zinc-500 tracking-wider">270° W</div>
          <div className="absolute right-1 text-[9px] text-zinc-500 tracking-wider">90° E</div>
        </div>

        {/* Start Mission Trigger Button */}
        <button
          onClick={() => onNavigate("Global Logistics v4.2 Enhanced", "push")}
          className="group relative mt-4 px-10 py-4 bg-amber-500 text-black font-extrabold tracking-widest text-sm uppercase rounded-none transition-all duration-300 hover:bg-amber-600 hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] active:scale-95 border-b-2 border-orange-700"
        >
          {/* Small corner detail marks */}
          <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white" />
          <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white" />
          <div className="flex items-center gap-3">
            <span>START MISSION</span>
            <Power className="w-4 h-4 text-black animate-pulse" />
          </div>
        </button>

        {/* Small subtitle tag */}
        <p className="text-[10px] text-zinc-500 mt-4 tracking-[0.2em] uppercase">
          AUTHORIZATION REQUIRED // SECTOR 7-G INGRESS
        </p>
      </main>

      {/* Bottom border graphic line */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-600 via-zinc-900 to-blue-500/50" />
    </div>
  );
}
