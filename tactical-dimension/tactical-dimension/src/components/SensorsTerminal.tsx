import React, { useState, useEffect } from "react";
import { ScreenName } from "../types";
import { 
  Radar, 
  Activity, 
  AlertTriangle, 
  Thermometer, 
  Droplets,
  Settings,
  Shield,
  Clock
} from "lucide-react";

interface SensorsTerminalProps {
  onNavigate: (target: ScreenName, transition: "push" | "push_back" | "none") => void;
}

export default function SensorsTerminal({ onNavigate }: SensorsTerminalProps) {
  const [bogeys, setBogeys] = useState<{ x: number; y: number; opacity: number }[]>([]);
  const [time, setTime] = useState("");

  useEffect(() => {
    // Generate some mock tracking bogeys
    const interval = setInterval(() => {
      setBogeys(prev => {
        const next = [...prev];
        if (next.length > 5) next.shift();
        next.push({
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
          opacity: 1
        });
        return next;
      });
    }, 2000);

    const timeInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }) + " UTC");
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="p-6 md:p-8 min-h-screen bg-black/95 relative z-10 w-full flex flex-col justify-between selection:bg-amber-500/20">
      
      {/* Background Watermark 200vw "02" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
        <span className="text-[25vw] font-black text-amber-500/[0.02] tracking-wider leading-none">
          02
        </span>
      </div>

      {/* Main Terminal Header */}
      <header className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-zinc-800/80">
        <div>
          <div className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase mb-1">
            TERMINAL_09 // SENSOR MANAGEMENT
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-amber-500 tracking-tight uppercase leading-none">
            SENSORS TERMINAL
          </h1>
          <p className="text-xs text-zinc-400 mt-2 font-mono flex items-center gap-1.5">
            DEEP FIELD SURVEILLANCE &amp; BIO-METRIC OVERSIGHT
          </p>
        </div>
        <div className="text-right font-mono text-xs text-zinc-400 z-10 flex flex-col items-end">
          <p>NODE_001_LOCAL</p>
          <p className="text-amber-500 font-bold mt-1">SIGNAL_STRENGTH: 100%</p>
        </div>
      </header>

      {/* Main Bento Grid layout */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 flex-grow mb-8">
        
        {/* Radar view (col-span-8) */}
        <div className="md:col-span-8 bg-zinc-950/60 border border-zinc-800/60 p-5 rounded-none relative flex flex-col h-[500px] overflow-hidden">
          <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-amber-500" />
          <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-amber-500" />
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-amber-500" />
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-amber-500" />

          <div className="flex justify-between items-center mb-4 z-10">
            <span className="text-xs font-bold text-amber-500 tracking-widest uppercase">DEEP SPACE SCANNER</span>
            <div className="text-[10px] text-zinc-500 flex gap-4 uppercase">
              <span>MODE: OMNIDIRECTIONAL</span>
              <span>RANGE: 400k LY</span>
            </div>
          </div>

          {/* Real Radar Display view */}
          <div className="flex-1 relative flex items-center justify-center bg-zinc-950 rounded">
            {/* Concentric rings */}
            <div className="absolute w-[360px] h-[360px] border border-blue-500/10 rounded-full" />
            <div className="absolute w-[260px] h-[260px] border border-blue-500/10 rounded-full" />
            <div className="absolute w-[160px] h-[160px] border border-blue-500/20 rounded-full" />
            <div className="absolute w-[60px] h-[60px] border border-blue-500/30 rounded-full" />
            
            {/* Axis grid */}
            <div className="absolute w-full h-px bg-zinc-800/40" />
            <div className="absolute h-full w-px bg-zinc-800/40" />

            {/* RADAR SWEEP LINE */}
            <div 
              className="absolute w-[440px] h-[440px] rounded-full pointer-events-none"
              style={{
                background: "conic-gradient(from 0deg, rgba(245,158,11,0.15) 0deg, transparent 90deg)",
                animation: "radar-sweep 8s linear infinite"
              }}
            />

            {/* Bogeys dots */}
            {bogeys.map((b, i) => (
              <div 
                key={i} 
                className="absolute w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_#ffb77d] transition-opacity duration-1000"
                style={{
                  left: `${b.x}%`,
                  top: `${b.y}%`,
                  opacity: b.opacity
                }}
              />
            ))}

            {/* Centered target lock */}
            <div className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-ping" />
          </div>

          <div className="absolute bottom-4 left-4 text-[9px] text-amber-500 font-mono flex flex-col gap-1 z-10 uppercase">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
              SCANNING_THETA_9 IN PROGRESS
            </div>
            <div className="text-zinc-500">NO INTERFERENCE DETECTED</div>
          </div>
        </div>

        {/* Biometric Telemetry (col-span-4) */}
        <div className="md:col-span-4 bg-zinc-950/60 border border-zinc-800/60 p-5 rounded-none relative flex flex-col h-[500px] justify-between">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-500/40" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-500/40" />

          <div>
            <h3 className="text-xs font-bold text-amber-500 tracking-widest uppercase mb-4">BIO-RHYTHM TELEMETRY</h3>
            
            <div className="flex justify-between items-center pb-2 border-b border-zinc-800 text-xs">
              <span className="text-zinc-500 uppercase tracking-widest">SUBJECT</span>
              <span className="text-amber-500 font-bold">COMMANDER_PROFILE</span>
            </div>

            {/* Live heart rate wave */}
            <div className="mt-6">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">HEART_RATE</span>
                <span className="text-2xl font-black text-amber-500 animate-pulse">72 <span className="text-xs font-normal">BPM</span></span>
              </div>
              <div className="h-16 w-full overflow-hidden relative border-l border-b border-amber-500/20 bg-zinc-950/80">
                <svg className="w-full h-full stroke-amber-500 fill-none stroke-2" viewBox="0 0 200 40">
                  <path d="M0 20 L20 20 L25 10 L30 30 L35 20 L60 20 L65 5 L70 35 L75 20 L100 20 L105 15 L110 25 L115 20 L140 20 L145 0 L150 40 L155 20 L200 20" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 my-4">
            <div className="bg-amber-500/5 border border-amber-500/20 p-3">
              <span className="block text-[9px] text-zinc-500 uppercase font-bold mb-1">O2_SATURATION</span>
              <span className="text-sm font-bold text-amber-500">98.4%</span>
            </div>
            <div className="bg-amber-500/5 border border-amber-500/20 p-3">
              <span className="block text-[9px] text-zinc-500 uppercase font-bold mb-1">CORTISOL_LVL</span>
              <span className="text-sm font-bold text-amber-500">0.12 mg/L</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-green-400 animate-pulse font-mono uppercase">
            <Activity className="w-3.5 h-3.5 shrink-0" />
            <span>STATUS: STABLE_VITAL_SIGNS</span>
          </div>
        </div>

        {/* Environmental Analysis (col-span-6) */}
        <div className="md:col-span-6 bg-zinc-950/60 border border-zinc-800/60 p-5 rounded-none relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-zinc-800" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-zinc-800" />

          <h3 className="text-xs font-bold text-amber-500 tracking-widest uppercase mb-4">&gt;&gt; ENVIRONMENTAL_ANALYSIS</h3>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-zinc-900 border border-zinc-800/60 p-3">
              <span className="text-[9px] text-zinc-500 uppercase block mb-1">ATMOS_PRESS</span>
              <span className="text-lg font-bold text-blue-400">1.02 <span className="text-[10px]">BAR</span></span>
            </div>

            <div className="bg-zinc-900 border border-zinc-800/60 p-3">
              <span className="text-[9px] text-zinc-500 uppercase block mb-1">TOXICITY</span>
              <span className="text-lg font-bold text-red-500">0.03 <span className="text-[10px]">PPM</span></span>
            </div>

            <div className="bg-zinc-900 border border-zinc-800/60 p-3">
              <span className="text-[9px] text-zinc-500 uppercase block mb-1">GRAVITY</span>
              <span className="text-lg font-bold text-green-400">0.98 <span className="text-[10px]">g</span></span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800/60 text-xs">
            <div className="flex items-center gap-2.5">
              <Thermometer className="w-4 h-4 text-blue-400" />
              <div>
                <p className="text-[9px] text-zinc-500 uppercase">EXT_TEMP</p>
                <p className="font-bold text-zinc-200">-2.4°C</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Droplets className="w-4 h-4 text-blue-400" />
              <div>
                <p className="text-[9px] text-zinc-500 uppercase">HUMIDITY</p>
                <p className="font-bold text-zinc-200">0.001%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Proximity Alert Box (col-span-6) */}
        <div className="md:col-span-6 bg-red-950/20 border border-red-500/40 p-5 rounded-none relative flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500" />

          <div className="flex items-center gap-2 z-10 border-b border-red-500/30 pb-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-red-500 animate-bounce" />
            <h3 className="text-xs font-bold text-red-500 tracking-widest uppercase">PROXIMITY_ALERT</h3>
          </div>

          <p className="text-xs text-amber-500 font-bold uppercase animate-pulse mb-3">
            UNIDENTIFIED_OBJECT_DETECTED IN LOCAL SPACE
          </p>

          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono leading-relaxed mb-4 text-zinc-400">
            <div>VECTOR: <span className="text-red-400 font-bold">214.5.99</span></div>
            <div>VELOCITY: <span className="text-red-400 font-bold">MACH_12</span></div>
            <div>DISTANCE: <span className="text-red-400 font-bold">24.5k KM</span></div>
            <div>ETA: <span className="text-red-400 font-bold">00:04:22</span></div>
          </div>

          <div className="flex gap-3 mt-auto">
            <button className="flex-1 bg-red-600 hover:bg-red-700 text-black text-[11px] font-extrabold tracking-widest py-2 rounded-none transition-all cursor-pointer">
              ENGAGE_DEFENSE
            </button>
            <button className="flex-1 border border-red-500/50 hover:bg-red-500/10 text-red-400 text-[11px] font-extrabold tracking-widest py-2 rounded-none transition-all cursor-pointer">
              IGNORE_HAZARD
            </button>
          </div>
        </div>

      </section>

      {/* Footer System clock & Action buttons to Settings v5.0 */}
      <section className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-zinc-800">
        <div className="font-mono text-[10px] text-zinc-500 flex gap-4 uppercase">
          <span>INDEX_001.004.992</span>
          <span>[ SENSORS_ARRAY_ACTIVE // TACTICAL_DIMENSION_v4.9 ]</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-blue-400 text-xs font-bold font-mono">{time || "06:19:44 UTC"}</span>
          <button 
            onClick={() => onNavigate("System Configuration Terminal v5.0", "none")}
            className="flex items-center gap-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-amber-500 hover:text-amber-400 text-xs px-3 py-1.5 transition-colors cursor-pointer font-bold rounded-none"
          >
            <Settings className="w-3.5 h-3.5 animate-spin" />
            <span>settings</span>
          </button>
        </div>
      </section>
    </div>
  );
}
