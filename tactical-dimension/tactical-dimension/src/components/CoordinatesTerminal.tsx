import React, { useState, useEffect } from "react";
import { ScreenName } from "../types";
import { 
  Compass, 
  Settings, 
  MapPin, 
  Navigation, 
  Map, 
  ExternalLink,
  Target,
  RefreshCw
} from "lucide-react";

interface CoordinatesTerminalProps {
  onNavigate: (target: ScreenName, transition: "push" | "push_back" | "none") => void;
}

export default function CoordinatesTerminal({ onNavigate }: CoordinatesTerminalProps) {
  const [altitude, setAltitude] = useState(84000);
  const [targetLock, setTargetLock] = useState({ lat: "45.9234° N", lng: "12.3456° E" });
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    // Slightly fluctuate altitude
    const interval = setInterval(() => {
      setAltitude(prev => prev + Math.floor(Math.random() * 20 - 10));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 md:p-8 min-h-screen bg-black/95 relative z-10 w-full flex flex-col justify-between selection:bg-amber-500/20">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
        <span className="text-[25vw] font-black text-amber-500/[0.015] tracking-widest leading-none">
          COORD
        </span>
      </div>

      {/* Header */}
      <header className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-4 border-b border-zinc-800/80">
        <div>
          <div className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase mb-1">
            LOCATION_CORE // SPATIAL POSITION TERMINAL
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-amber-500 tracking-tight uppercase leading-none">
            COORDINATES v4.9
          </h1>
          <p className="text-xs text-zinc-400 mt-2 font-mono flex items-center gap-1.5">
            Geospatial triangulation, telemetry vectors and target locking parameters.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {/* Settings Trigger with standard xpath span mapping */}
          <button 
            onClick={() => onNavigate("System Configuration Terminal v5.0", "none")}
            className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 text-amber-500 hover:text-amber-400 text-xs px-3 py-1.5 transition-colors cursor-pointer rounded-none font-bold"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>settings</span>
          </button>
        </div>
      </header>

      {/* Bento Layout Grid */}
      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow items-stretch mb-6">
        
        {/* Left Column: SPATIAL TELEMETRY (col-span-4) */}
        <div className="lg:col-span-4 bg-zinc-950/40 border border-zinc-800/60 p-5 rounded-none relative flex flex-col justify-between min-h-[350px]">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-500/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-500/50" />

          <div>
            <div className="border-b border-zinc-900 pb-2 mb-4">
              <h2 className="text-xs font-bold text-amber-500 tracking-widest uppercase flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-blue-400" /> SPATIAL TELEMETRY
              </h2>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="bg-zinc-900/60 p-3 border border-zinc-900">
                <span className="text-[9px] text-zinc-500 block uppercase font-bold mb-1">ALTITUDE</span>
                <span className="text-xl font-bold text-blue-400">{altitude.toLocaleString()} FT</span>
              </div>

              <div className="bg-zinc-900/60 p-3 border border-zinc-900">
                <span className="text-[9px] text-zinc-500 block uppercase font-bold mb-1">LATITUDE_LOCATION</span>
                <span className="text-xl font-bold text-zinc-200">{targetLock.lat}</span>
              </div>

              <div className="bg-zinc-900/60 p-3 border border-zinc-900">
                <span className="text-[9px] text-zinc-500 block uppercase font-bold mb-1">LONGITUDE_LOCATION</span>
                <span className="text-xl font-bold text-zinc-200">{targetLock.lng}</span>
              </div>

              <div className="bg-zinc-900/60 p-3 border border-zinc-900">
                <span className="text-[9px] text-zinc-500 block uppercase font-bold mb-1">SURFACE_SPEED</span>
                <span className="text-xl font-bold text-amber-500">MACH_14.5</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-[10px] text-zinc-500 uppercase">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
            <span>TRIANGULATION_STABLE</span>
          </div>
        </div>

        {/* Middle Column: TARGET LOCK Topography Map (col-span-8) */}
        <div className="lg:col-span-8 bg-zinc-950/60 border border-zinc-800/80 p-5 rounded-none relative flex flex-col justify-between h-[450px] overflow-hidden">
          <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-amber-500" />
          <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-amber-500" />
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-amber-500" />
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-amber-500" />

          <div className="flex justify-between items-center mb-4 border-b border-zinc-900 pb-2">
            <h2 className="text-xs font-bold text-amber-500 tracking-widest uppercase flex items-center gap-1.5">
              <Target className="w-4 h-4 text-red-500 animate-pulse" /> TARGET LOCK v4.9
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-[10px] bg-amber-500/10 text-amber-500 border border-amber-500/30 px-2 py-0.5 animate-pulse font-bold">
                TRACKING ACTIVE
              </span>
            </div>
          </div>

          {/* High Fidelity Vector Mountain Topographic Map representation inside target lock boundary */}
          <div className="flex-1 bg-[#090909] border border-zinc-900 p-2.5 relative overflow-hidden flex items-center justify-center rounded">
            {/* Topography mountain curves drawing */}
            <svg 
              className="absolute inset-0 w-full h-full stroke-blue-500/20 fill-none stroke-1 pointer-events-none" 
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
            >
              {/* Layered parametric mountain curves */}
              <path d="M0 160 Q60 100 120 140 T240 90 T360 170 T400 150" />
              <path d="M0 180 Q80 140 160 160 T300 110 T400 180" className="stroke-blue-400/30" />
              <path d="M0 140 Q40 80 100 110 T200 70 T320 140 T400 130" className="stroke-amber-500/15" />
            </svg>

            {/* Simulated mountain vector overlay image from CDN mimicking high fidelity topography maps */}
            <img 
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJu9M9l2m9P6jM7qN6B9C5K3D2Y7D9v_L4Z8g8e9d-C3b7I8g8R9m8k7_1A8r9D5H3f2G9h8m8K7" 
              onError={(e) => { e.currentTarget.style.display = "none"; }} 
              alt="High resolution geographic terrain reference structure"
              className="absolute inset-0 w-full h-full object-cover opacity-20 block filter contrast-125 select-none pointer-events-none"
            />

            {/* Target Reticle Crosshair Box */}
            <div className="absolute border border-red-500/50 w-28 h-28 flex items-center justify-center animate-pulse">
              <div className="absolute w-2 h-2 border-t-2 border-l-2 border-red-500 top-0 left-0" />
              <div className="absolute w-2 h-2 border-t-2 border-r-2 border-red-500 top-0 right-0" />
              <div className="absolute w-2 h-2 border-b-2 border-l-2 border-red-550 bottom-0 left-0" />
              <div className="absolute w-2 h-2 border-b-2 border-r-2 border-red-550 bottom-0 right-0" />
              <Target className="w-8 h-8 text-red-500 animate-spin" />
            </div>

            {/* Reticle degrees */}
            <div className="absolute top-2 right-2 text-[9px] text-zinc-650 font-mono tracking-widest text-[#cfcfcf]">
              LOCK_STABILITY: 99.8%<br />
              WIND_SPEED: 14 KTS
            </div>
          </div>

          <p className="text-[10px] text-zinc-500 uppercase mt-3 font-mono">
            SECTOR REFERENCE ID: DELTA_NINER1 // MOUNTAIN_TOPOGRAPHY_MAP_GRID
          </p>
        </div>

      </section>

      {/* Tri-navigation buttons target diagnostics & setting */}
      <footer className="relative z-10 flex flex-wrap justify-between items-center gap-4 py-4 border-t border-zinc-800">
        <div className="flex gap-4">
          <button 
            onClick={() => onNavigate("Diagnostics Terminal v4.10", "none")}
            className="text-xs text-zinc-500 hover:text-amber-500 transition-colors uppercase font-bold tracking-widest"
          >
            [ DIAGNOSTICS ]
          </button>
          <button 
            onClick={() => onNavigate("The Void", "none")}
            className="text-xs text-zinc-500 hover:text-amber-500 transition-colors uppercase font-bold tracking-widest"
          >
            [ VOID_STREAM ]
          </button>
        </div>
        <span className="text-[9px] text-zinc-600 font-mono">CC_LOCK: SEC_TRI_092BC</span>
      </footer>
    </div>
  );
}
