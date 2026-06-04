import React, { useState, useEffect } from "react";
import { ScreenName } from "../types";
import { 
  Globe, 
  Package, 
  AlertTriangle, 
  RotateCw, 
  Navigation,
  FileText,
  Clock,
  Wifi
} from "lucide-react";

interface GlobalLogisticsProps {
  onNavigate: (target: ScreenName, transition: "push" | "push_back" | "none") => void;
}

export default function GlobalLogistics({ onNavigate }: GlobalLogisticsProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().split("T")[1].split(".")[0]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 md:p-8 min-h-screen bg-black/95 relative z-10 w-full flex flex-col justify-between selection:bg-amber-500/20">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
        <span className="text-[20vw] font-black text-blue-500/[0.03] tracking-widest leading-none">
          LOGISTICS
        </span>
      </div>

      {/* Header Info Bar */}
      <section className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-4 border-b border-zinc-800/80">
        <div>
          <div className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase mb-1">
            LOG_NODE // GLOBAL TRANSPORT MONITOR
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-amber-500 tracking-tight uppercase leading-none">
            GLOBAL_LOGISTICS
          </h1>
          <p className="text-xs text-zinc-400 mt-2 font-mono flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            ASSET TRACKING &amp; SUPPLY CHAIN OVERVIEW
          </p>
        </div>
        <div className="flex gap-2">
          <div className="bg-zinc-900 border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-400 uppercase">
            SYS_TIME: <span className="text-blue-400 font-bold">{time || "12:32:55"}</span>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/30 px-3 py-1 font-mono text-[10px] text-amber-500 font-bold flex items-center gap-1">
            <Wifi className="w-3 h-3 animate-pulse" /> SYNC: ONLINE
          </div>
        </div>
      </section>

      {/* Bento Grid layout */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 flex-grow">
        
        {/* Radar/Maps view (col-span-8) */}
        <div className="md:col-span-8 glass-panel p-5 rounded-none relative flex flex-col h-[400px]">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-500/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-500/50" />
          
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-zinc-800/60">
            <h2 className="text-xs font-bold text-amber-500 tracking-widest uppercase">&gt;&gt; TACTICAL_MAP</h2>
            <Globe className="w-4 h-4 text-blue-400" />
          </div>

          <div className="flex-1 relative bg-zinc-950/80 border border-zinc-800/40 overflow-hidden">
            {/* Map wireframe drawing overlay */}
            <div 
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `radial-gradient(circle at center, #00A2FF 2px, transparent 2px), linear-gradient(to right, rgba(0,162,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,162,255,0.05) 1px, transparent 1px)`,
                backgroundSize: "20px 20px"
              }}
            />
            
            {/* Tactical sweep scanning line */}
            <div className="absolute left-0 right-0 h-0.5 bg-blue-500/80 shadow-[0_0_10px_#00A2FF] animate-[scanline-scroll_4s_linear_infinite]" />

            {/* Glowing Map Signal Elements */}
            <div className="absolute top-[30%] left-[25%] w-3 h-3 bg-blue-400 rounded-full flex items-center justify-center">
              <span className="w-full h-full rounded-full animate-ping bg-blue-400 absolute opacity-70" />
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            </div>

            <div className="absolute top-[60%] left-[65%] w-3 h-3 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="w-full h-full rounded-full animate-ping bg-amber-500 absolute opacity-70" />
              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
            </div>

            {/* Stream Coordinates Info Overlay box */}
            <div className="absolute bottom-3 left-3 bg-[#0a0a0a]/95 border border-blue-500/30 p-2.5 rounded font-mono text-[10px] leading-tight">
              <div className="text-blue-400 font-bold mb-1 uppercase tracking-wider">&gt; LAT/LONG RADAR STREAM</div>
              <div className="text-zinc-300">45.92 N, 12.34 E [ID: ALPHA_CORE]</div>
              <div className="text-zinc-300">32.11 S, 144.5 E <span className="text-amber-500 animate-pulse font-bold">[ID: OMEGA_CRITICAL]</span></div>
            </div>

            {/* Large screen warning watermark center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
              <span className="text-5xl font-black tracking-widest uppercase text-red-500 border-4 border-red-500 p-4">CLASSIFIED</span>
            </div>
          </div>
        </div>

        {/* Dynamic Resource Progress trackers (col-span-4) */}
        <div className="md:col-span-4 glass-panel p-5 rounded-none relative flex flex-col h-[400px]">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400/50" />

          <div className="flex justify-between items-center mb-4 pb-2 border-b border-zinc-800/60">
            <h2 className="text-xs font-bold text-amber-500 tracking-widest uppercase">&gt;&gt; RESOURCE_STATUS</h2>
            <Package className="w-4 h-4 text-amber-400" />
          </div>

          <div className="flex-grow flex flex-col gap-4 overflow-y-auto pr-1">
            {/* Titanium bar */}
            <div className="bg-zinc-900 border border-zinc-800 p-3 flex flex-col justify-between">
              <div className="flex justify-between text-[11px] mb-1.5">
                <span className="text-zinc-300 font-bold">001: TITANIUM_ALLOY</span>
                <span className="text-blue-400 font-bold">85%</span>
              </div>
              <div className="w-full bg-zinc-950 h-2 border border-zinc-800">
                <div className="bg-blue-500 h-full w-[85%] transition-all duration-1000" />
              </div>
              <span className="text-[9px] text-zinc-500 text-right mt-1.5 uppercase">ETA: 48H // OUTBOUND</span>
            </div>

            {/* Rare Earth critically depleted bar */}
            <div className="bg-red-950/20 border border-red-500/40 p-3 flex flex-col justify-between">
              <div className="flex justify-between text-[11px] mb-1.5">
                <span className="text-red-400 font-bold">002: RARE_EARTH_MATERIALS</span>
                <span className="text-red-500 font-bold animate-pulse">CRIT: 12%</span>
              </div>
              <div className="w-full bg-zinc-950 h-2 border border-zinc-800">
                <div className="bg-red-500 h-full w-[12%] animate-pulse" />
              </div>
              <div className="flex justify-between items-center mt-1.5 text-[9px]">
                <span className="text-red-500 font-bold flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> DEPLETION_IMMINENT
                </span>
                <span className="text-zinc-500 uppercase">SYS_ALT_REQ</span>
              </div>
            </div>

            {/* Microprocessors status */}
            <div className="bg-zinc-900 border border-zinc-800 p-3 flex flex-col justify-between">
              <div className="flex justify-between text-[11px] mb-1.5">
                <span className="text-zinc-300 font-bold">003: MICROPROCESSORS</span>
                <span className="text-blue-400 font-bold">60%</span>
              </div>
              <div className="w-full bg-zinc-950 h-2 border border-zinc-800">
                <div className="bg-blue-500 h-full w-[60%] transition-all duration-1000" />
              </div>
              <span className="text-[9px] text-zinc-500 text-right mt-1.5 uppercase">ETA: 12H // ROUTING</span>
            </div>
          </div>
        </div>

        {/* Deployment Vectors Panel (col-span-12) */}
        <div className="md:col-span-12 glass-panel p-5 rounded-none relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-500/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-500/50" />

          <div className="flex justify-between items-center mb-4 pb-2 border-b border-zinc-800/60">
            <h2 className="text-xs font-bold text-amber-500 tracking-widest uppercase">&gt;&gt; DEPLOYMENT_VECTORS</h2>
            <Navigation className="w-4 h-4 text-amber-500 rotate-45" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Vector A */}
            <div className="bg-blue-950/10 border border-zinc-800 p-3">
              <div className="flex justify-between text-[10px] text-zinc-300 font-bold mb-2">
                <span>V_ALPHA // N. AMERICA</span>
                <span className="text-blue-400">EN_ROUTE (45%)</span>
              </div>
              <div className="w-full bg-zinc-950 h-2 rounded-none overflow-hidden relative">
                <div className="bg-blue-500 h-full w-[45%]" />
              </div>
              <span className="text-[9px] text-zinc-500 block mt-2">SYS_CONTAINER_STREAM #11A</span>
            </div>

            {/* Vector B - Delayed vector */}
            <div className="bg-amber-950/10 border border-amber-500/30 p-3">
              <div className="flex justify-between text-[10px] text-zinc-300 font-bold mb-2">
                <span>V_BETA // EURASIA</span>
                <span className="text-amber-500 font-bold animate-pulse">DELAYED (20%)</span>
              </div>
              <div className="w-full bg-zinc-950 h-2 rounded-none overflow-hidden relative">
                <div className="bg-amber-500 h-full w-[20%]" />
              </div>
              <span className="text-[9px] text-amber-500 block mt-2">THERMAL_VARIANCE_DETECTION #4B</span>
            </div>

            {/* Vector C */}
            <div className="bg-zinc-900/40 border border-zinc-800 p-3">
              <div className="flex justify-between text-[10px] text-zinc-300 font-bold mb-2">
                <span>V_GAMMA // ORBITAL</span>
                <span className="text-zinc-500">PREP_PHASE (5%)</span>
              </div>
              <div className="w-full bg-zinc-950 h-2 rounded-none overflow-hidden relative">
                <div className="bg-blue-400/30 h-full w-[5%]" />
              </div>
              <span className="text-[9px] text-zinc-500 block mt-2">UPLINK_DOCK_RECEPTOR #9F</span>
            </div>
          </div>
        </div>

        {/* System Logs (col-span-12) */}
        <div className="md:col-span-12 glass-panel p-5 rounded-none relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-zinc-700/60" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-zinc-700/60" />

          <div className="flex justify-between items-center mb-2 pb-1 border-b border-zinc-800/60">
            <h2 className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">&gt;&gt; SYSTEM_LOG // LOGISTICS_DAEMON</h2>
            <FileText className="w-3.5 h-3.5 text-zinc-500" />
          </div>

          <div className="bg-black/90 p-4 border border-zinc-800/50 text-[11px] text-zinc-400 font-mono flex flex-col gap-1.5 h-36 overflow-y-auto pr-1">
            <div className="flex gap-2">
              <span className="text-zinc-600 font-bold">[14:20:01]</span>
              <span>Initiating ping to logistics sector ALPHA... <span className="text-green-400 font-bold">SUCCESS</span></span>
            </div>
            <div className="flex gap-2">
              <span className="text-zinc-600 font-bold">[14:20:05]</span>
              <span>Routing critical microprocessors shipment ID#99238 via SSL 1.</span>
            </div>
            <div className="flex gap-2 text-amber-500 animate-pulse">
              <span className="text-amber-500/70 font-bold">[14:21:12]</span>
              <span className="font-bold">WARN: Structural variance detected in Eurasian cargo container #4B.</span>
            </div>
            <div className="flex gap-2">
              <span className="text-zinc-600 font-bold">[14:21:45]</span>
              <span>Re-routing autonomous logistics quad-drones to intercept and secure sector.</span>
            </div>
            <div className="flex gap-2 text-blue-400">
              <span className="text-blue-500/70 font-bold">[14:22:00]</span>
              <span>Awaiting coordinates telemetry verification link..._</span>
            </div>
          </div>
        </div>

      </section>

      {/* Primary manual navigation exit button to Splash */}
      <section className="relative z-10 mt-8 flex justify-end gap-3">
        <button
          onClick={() => onNavigate("Tactical Dimension: Mission Start Evolved", "push_back")}
          className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-black text-xs font-black tracking-widest uppercase transition-all rounded-none cursor-pointer border-b-2 border-red-900"
          title="Disconnect from high-altitude mainframe"
        >
          TERMINATE_SESSION
        </button>
      </section>
    </div>
  );
}
