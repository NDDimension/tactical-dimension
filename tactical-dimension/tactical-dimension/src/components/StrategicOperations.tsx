import React, { useState } from "react";
import { ScreenName } from "../types";
import { 
  Trophy, 
  Play, 
  Map, 
  AlertCircle, 
  CheckSquare, 
  Square,
  Compass,
  ArrowRight
} from "lucide-react";

interface StrategicOperationsProps {
  onNavigate: (target: ScreenName, transition: "push" | "push_back" | "none") => void;
}

export default function StrategicOperations({ onNavigate }: StrategicOperationsProps) {
  const [objectives, setObjectives] = useState([
    { id: 1, text: "SECURE_LOGISTICS_VECTOR_ALPHA", done: true },
    { id: 2, text: "COMPLETE_CRYPTOGRAPHIC_DECRYPTION", done: true },
    { id: 3, text: "CALIBRATE_SENSORS_OVERSIGHT", done: false },
    { id: 4, text: "STABILIZE_THE_VOID_BUFFER", done: false },
  ]);

  const toggleObjective = (id: number) => {
    setObjectives(prev => prev.map(o => o.id === id ? { ...o, done: !o.done } : o));
  };

  return (
    <div className="p-6 md:p-8 min-h-screen bg-black/95 relative z-10 w-full flex flex-col justify-between selection:bg-amber-500/20">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
        <span className="text-[25vw] font-black text-amber-500/[0.012] tracking-widest leading-none">
          STRAT
        </span>
      </div>

      {/* Header */}
      <header className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-4 border-b border-zinc-800/80">
        <div>
          <div className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase mb-1">
            STRATEGY_CORE // CENTRALIZED MISSION OVERSIGHT
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-amber-500 tracking-tight uppercase leading-none">
            STRATEGIC OPERATIONS
          </h1>
          <p className="text-xs text-zinc-400 mt-2 font-mono flex items-center gap-1.5">
            Mission sequencing, tactical vectors verification and combat directives coordination.
          </p>
        </div>
        <div className="flex bg-zinc-950 p-2.5 border border-zinc-800 text-[10px] uppercase font-mono h-12 items-center gap-2">
          <span className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-ping" />
          <span className="text-zinc-400">STATE: PHASE_03_ACTIVE</span>
        </div>
      </header>

      {/* Grid Content Layout */}
      <section className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-6 flex-grow items-stretch mb-6">
        
        {/* Left pane: MISSION_OBJECTIVES (col-span-4) */}
        <div className="xl:col-span-4 bg-zinc-950/40 border border-zinc-800/60 p-5 rounded-none relative flex flex-col justify-between min-h-[350px]">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-500/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-500/50" />

          <div>
            <div className="border-b border-zinc-900 pb-2 mb-4">
              <h2 className="text-xs font-bold text-amber-500 tracking-widest uppercase flex items-center gap-1.5">
                <CheckSquare className="w-4 h-4 text-blue-400" /> MISSION_OBJECTIVES
              </h2>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {objectives.map(obj => (
                <div 
                  key={obj.id}
                  onClick={() => toggleObjective(obj.id)}
                  className={`flex items-start gap-3 p-3 border transition-colors cursor-pointer select-none ${
                    obj.done 
                      ? "bg-zinc-900/40 border-zinc-800 text-zinc-400" 
                      : "bg-amber-500/5 border-amber-500/20 text-zinc-200 hover:bg-amber-500/10"
                  }`}
                >
                  <div className="mt-0.5">
                    {obj.done ? (
                      <CheckSquare className="w-4 h-4 text-amber-500 shrink-0" />
                    ) : (
                      <Square className="w-4 h-4 text-zinc-650 shrink-0 text-zinc-600" />
                    )}
                  </div>
                  <span className={`leading-tight uppercase font-bold text-[11px] ${obj.done ? "line-through text-zinc-650" : ""}`}>
                    {obj.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[9px] text-zinc-600 uppercase font-mono mt-4">
            CLICK ON ITEMS TO TOGGLE OBJECTIVE STATE
          </p>
        </div>

        {/* Center pane: BATTLE_ORDER_SEQUENCE (col-span-5) */}
        <div className="xl:col-span-5 bg-zinc-950/60 border border-zinc-800/80 p-5 rounded-none relative flex flex-col justify-between h-[450px]">
          <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-amber-500" />
          <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-amber-500" />
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-amber-500" />
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-amber-500" />

          <div>
            <div className="flex justify-between items-center mb-4 border-b border-zinc-900 pb-2">
              <h2 className="text-xs font-bold text-amber-500 tracking-widest uppercase flex items-center gap-1.5">
                <Play className="w-4 h-4 text-amber-500 rotate-90" /> BATTLE_ORDER_SEQUENCE
              </h2>
            </div>

            {/* Timelines representing sequencing layout */}
            <div className="space-y-4 font-mono text-xs pt-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-500/10 border border-green-500/30 px-3 py-2 text-green-400 font-bold shrink-0 w-32 text-center text-[10px]">
                  PHASE I: INTEL
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 shrink-0" />
                <span className="text-zinc-500 text-[11px]">GEOSPATIAL TOPOGRAPHY LINK - VERIFIED</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-500/10 border border-green-500/30 px-3 py-2 text-green-400 font-bold shrink-0 w-32 text-center text-[10px]">
                  PHASE II: LOGISTICS
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 shrink-0" />
                <span className="text-zinc-500 text-[11px]">COORDINATED ASSET ROUTING DETECTORS - ONLINE</span>
              </div>

              <div className="flex items-center gap-4 animate-pulse">
                <div className="bg-amber-500/20 border border-amber-500/50 px-3 py-2 text-amber-500 font-bold shrink-0 w-32 text-center text-[10px]">
                  PHASE III: CRYPTO
                </div>
                <ArrowRight className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-zinc-200 text-[11px] font-bold">AES KEY PROTOCOL ROTATION - ACTIVE</span>
              </div>

              <div className="flex items-center gap-4 opacity-40">
                <div className="bg-zinc-800 border border-zinc-700 px-3 py-2 text-zinc-500 font-bold shrink-0 w-32 text-center text-[10px]">
                  PHASE IV: EXEC
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-700 shrink-0" />
                <span className="text-zinc-500 text-[11px]">ORBITAL DOCK INGRESS DISPERSION</span>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-zinc-500 uppercase leading-normal">
            CORE DIRECTIVE ALPHA IS TO SECURE MULTI-DIMENSIONAL STREAMS BEFORE T-MINUS CLOCK FINISHES.
          </p>
        </div>

        {/* Right Column: COMMAND_CONSOLE logs (col-span-3) */}
        <div className="xl:col-span-3 bg-zinc-950/40 border border-zinc-800/60 p-5 rounded-none relative flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-500/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-500/50" />

          <div>
            <div className="border-b border-zinc-900 pb-2 mb-4">
              <h2 className="text-xs font-bold text-amber-500 tracking-widest uppercase flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-red-500" /> COMMAND_CONSOLE
              </h2>
            </div>

            <div className="bg-black/80 p-3 border border-zinc-900 rounded font-mono text-[10px] text-zinc-400 space-y-2 h-[280px] overflow-y-auto pr-1 leading-snug">
              <p>&gt; SECURE UPLINK CHANNELS...</p>
              <p className="text-green-400">&gt; CHNL_BETA VERIFIED INBOUND</p>
              <p>&gt; ALLOCATING FLUX NODES...</p>
              <p className="text-amber-500 animate-pulse">&gt; WARN: INGRESS OVERLAP IN SECTOR 12</p>
              <p>&gt; RUNNING SEQUENCER DAEMON</p>
              <p>&gt; 4 CORES STABLE</p>
              <p>&gt; _</p>
            </div>
          </div>

          <div className="text-[9px] text-zinc-500 font-mono mt-4 text-right">
            SEC_LEVEL // LEVEL_9_CLEARANCE
          </div>
        </div>

      </section>

      {/* Footer coordinates navigation trigger */}
      <footer className="relative z-10 flex justify-between items-center py-4 border-t border-zinc-800">
        <span className="text-[10px] text-zinc-500 font-mono">
          STRAT_CODE: OSCILLATION_002A
        </span>
        <button 
          onClick={() => onNavigate("Coordinates Terminal v4.9", "none")}
          className="text-zinc-400 hover:text-amber-500 transition-colors uppercase font-bold tracking-widest text-xs"
        >
          [ INTERFACE_COORDINATES ]
        </button>
      </footer>
    </div>
  );
}
