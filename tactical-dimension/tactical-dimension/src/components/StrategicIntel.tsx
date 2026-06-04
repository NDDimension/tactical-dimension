import React, { useState, useEffect } from "react";
import { ScreenName } from "../types";
import { 
  Eye, 
  MapPin, 
  Activity, 
  Radio, 
  Settings, 
  ShieldAlert, 
  Lock,
  Compass,
  Radar
} from "lucide-react";

interface StrategicIntelProps {
  onNavigate: (target: ScreenName, transition: "push" | "push_back" | "none") => void;
}

export default function StrategicIntel({ onNavigate }: StrategicIntelProps) {
  const [thermalMap, setThermalMap] = useState<string[]>([]);
  const [time, setTime] = useState("");

  // Create a 8x8 threat map grid
  useEffect(() => {
    const generateMap = () => {
      const arr = [];
      const levels = ["high", "medium", "low", "empty"];
      for (let i = 0; i < 64; i++) {
        const rand = Math.random();
        if (rand > 0.9) arr.push("high"); // red
        else if (rand > 0.7) arr.push("medium"); // orange
        else if (rand > 0.45) arr.push("low"); // blue
        else arr.push("empty"); // gray
      }
      setThermalMap(arr);
    };

    generateMap();
    const mapInterval = setInterval(generateMap, 3000);

    const timeInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }) + " UTC");
    }, 1000);

    return () => {
      clearInterval(mapInterval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="p-6 md:p-8 min-h-screen bg-black/95 relative z-10 w-full flex flex-col justify-between selection:bg-amber-500/20">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
        <span className="text-[25vw] font-black text-amber-500/[0.015] tracking-widest leading-none">
          INTEL
        </span>
      </div>

      {/* Header */}
      <header className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-4 border-b border-zinc-800/80">
        <div>
          <div className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase mb-1">
            INT_NODE // ADVANCED STRATEGIC RECONNAISSANCE
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-amber-500 tracking-tight uppercase leading-none">
            STRATEGIC INTEL
          </h1>
          <p className="text-xs text-zinc-400 mt-2 font-mono flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-blue-400" />
            Tactical data gathering, geospatial containment fields and threat profile heatmaps.
          </p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-400 uppercase">
          THREAD: ACTIVE // FEED: <span className="text-red-400 font-bold">STABLE</span>
        </div>
      </header>

      {/* Main Grid Content */}
      <section className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-6 flex-grow items-stretch mb-6">
        
        {/* Left Column: GLOBAL_THREAT_MAP (col-span-6) */}
        <div className="xl:col-span-6 bg-zinc-950/40 border border-zinc-800/60 p-5 rounded-none relative flex flex-col justify-between h-[450px]">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-500/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-500/50" />

          <div className="flex justify-between items-center mb-4 border-b border-zinc-900 pb-2">
            <h2 className="text-xs font-bold text-amber-500 tracking-widest uppercase flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-500" /> GLOBAL_THREAT_MAP
            </h2>
            <span className="text-[9px] text-zinc-500 font-mono">SECTOR CLEARANCE_RATIO: 82.4%</span>
          </div>

          {/* colored threat map grids */}
          <div className="flex-grow grid grid-cols-8 gap-1 p-3 bg-zinc-950 border border-zinc-900">
            {thermalMap.map((cell, idx) => {
              let bg = "bg-zinc-900 border border-zinc-950";
              let animation = "";
              if (cell === "high") {
                bg = "bg-red-600/90 border-red-500";
                animation = "animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.4)]";
              } else if (cell === "medium") {
                bg = "bg-amber-500 border border-amber-400/50";
              } else if (cell === "low") {
                bg = "bg-blue-600/70 border border-blue-500/40";
              }
              return (
                <div 
                  key={idx} 
                  className={`w-full aspect-square transition-colors duration-1000 ${bg} ${animation}`}
                  title={`Threat matrix position ${idx}`}
                />
              );
            })}
          </div>

          {/* Color Indicators Legend */}
          <div className="flex justify-between items-center mt-3 text-[9px] font-mono uppercase">
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-red-600 block rounded-none" /> SEVERE THREAT</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-amber-500 block rounded-none" /> MODERATE</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-blue-650 bg-blue-600 block rounded-none" /> CONTAINED</span>
            </div>
            <span className="text-zinc-500">REF: S_7G-THREATGrid</span>
          </div>
        </div>

        {/* Right Column: RAW_TELEMETRY (col-span-6) */}
        <div className="xl:col-span-6 bg-zinc-950/60 border border-zinc-800/80 p-5 rounded-none relative flex flex-col justify-between h-[450px]">
          <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-amber-500" />
          <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-amber-500" />
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-amber-500" />
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-amber-500" />

          <div>
            <div className="border-b border-zinc-900 pb-2 mb-4">
              <h2 className="text-xs font-bold text-amber-500 tracking-widest uppercase flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-blue-400" /> RAW_TELEMETRY
              </h2>
            </div>

            {/* List of status emission raw telemetry readouts */}
            <div className="space-y-4 font-mono text-xs">
              <div className="flex justify-between items-center bg-zinc-900/60 p-3.5 border border-zinc-900">
                <span className="text-zinc-400 font-bold">THERMAL_EMISSION_ANOMALY</span>
                <span className="text-red-400 font-bold tracking-widest">DETECTED (0.12W)</span>
              </div>

              <div className="flex justify-between items-center bg-zinc-900/60 p-3.5 border border-zinc-900">
                <span className="text-zinc-400 font-bold">GRAVITATIONAL_FLUCTUATIONS</span>
                <span className="text-green-400 font-bold tracking-widest">STABLE (0.98G)</span>
              </div>

              <div className="flex justify-between items-center bg-zinc-900/60 p-3.5 border border-zinc-900">
                <span className="text-zinc-400 font-bold">RF_SPECTRUM_OSCILLATIONS</span>
                <span className="text-blue-400 font-bold tracking-widest">ACTIVE (4.2v)</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">THERMAL_IMAGING_GRID</span>
            {/* simple layout of spectrum gradients panels as shown in screen */}
            <div className="h-10 bg-gradient-to-r from-blue-700 via-green-500 via-amber-500 to-red-600 rounded border border-zinc-800" />
            <div className="flex justify-between text-[8px] text-zinc-500 uppercase font-mono tracking-wider">
              <span>Low Range</span>
              <span>High Range</span>
            </div>
          </div>
        </div>

      </section>

      {/* Scrolling marquee update bar */}
      <section className="relative z-10 bg-red-950/20 border border-red-500/30 py-2.5 px-4 rounded mb-6 overflow-hidden select-none">
        <div className="flex items-center gap-4">
          <ShieldAlert className="w-4 h-4 text-red-500 animate-bounce shrink-0" />
          <div className="text-xs font-mono text-red-400 truncate uppercase animate-pulse leading-none">
            [ ALERT ] OVERRIDE SEQUENCE DETECTED IN LOGISTICS AREA ALPHA-05 // RE-ROUTING SECURE GRID COORDINATES
          </div>
        </div>
      </section>

      {/* Footer navigation targets */}
      <footer className="relative z-10 flex justify-between items-center py-4 border-t border-zinc-800">
        <div className="flex gap-4 font-mono text-xs">
          <button 
            onClick={() => onNavigate("Coordinates Terminal v4.9", "none")}
            className="flex items-center gap-1 text-zinc-500 hover:text-amber-500 transition-colors uppercase font-bold"
          >
            <Compass className="w-3.5 h-3.5 text-zinc-500" />
            <span>[ COORDINATES ]</span>
          </button>
          <button 
            onClick={() => onNavigate("Encrypted Comms v4.6 Decryption Active", "none")}
            className="flex items-center gap-1 text-zinc-500 hover:text-amber-500 transition-colors uppercase font-bold"
          >
            <Lock className="w-3.5 h-3.5 text-zinc-500" />
            <span>[ ENCRYPTION ]</span>
          </button>
          <button 
            onClick={() => onNavigate("Sensors Terminal v4.9", "none")}
            className="flex items-center gap-1 text-zinc-500 hover:text-amber-500 transition-colors uppercase font-bold"
          >
            <Radar className="w-3.5 h-3.5 text-zinc-500" />
            <span>[ SENSORS ]</span>
          </button>
        </div>

        <button
          onClick={() => onNavigate("Tactical Dimension: Mission Start Evolved", "push_back")}
          className="px-6 py-2 bg-red-650 bg-red-600 hover:bg-red-700 text-black text-[11px] font-black tracking-widest uppercase transition-all rounded-none cursor-pointer border-b-2 border-red-900"
        >
          TERMINATE_SESSION
        </button>
      </footer>
    </div>
  );
}
