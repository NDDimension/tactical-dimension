import React, { useState, useEffect } from "react";
import { ScreenName } from "../types";
import { 
  Skull, 
  Settings, 
  HelpCircle, 
  Radio, 
  AlertTriangle, 
  Activity,
  UserCheck
} from "lucide-react";

interface TheVoidProps {
  onNavigate: (target: ScreenName, transition: "push" | "push_back" | "none") => void;
}

export default function TheVoid({ onNavigate }: TheVoidProps) {
  const [entropy, setEntropy] = useState(1.0);
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate some drifting ambient particles
    const arr = [];
    for (let i = 0; i < 40; i++) {
      arr.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5
      });
    }
    setStars(arr);

    // Gently increment entropy
    const interval = setInterval(() => {
      setEntropy(prev => Number((prev + Math.random() * 0.05).toFixed(3)));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative p-6 md:p-8 min-h-screen bg-black text-zinc-400 font-mono flex flex-col justify-between overflow-hidden selection:bg-red-500/20 leading-none">
      
      {/* Absolute Full Screen Background Void Particle Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {stars.map((s, idx) => (
          <div 
            key={idx}
            className="absolute rounded-full bg-red-500/40 animate-pulse"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-4 border-b border-zinc-900">
        <div>
          <div className="text-[10px] text-zinc-600 tracking-[0.2em] uppercase mb-1">
            ALERT_NODE // UNSTABLE DIMENSIONAL SINGULARITY
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-red-600 tracking-tight uppercase leading-none">
            THE_VOID_OVERSIGHT
          </h1>
          <p className="text-xs text-zinc-500 mt-2 font-mono flex items-center gap-1.5">
            <Skull className="w-3.5 h-3.5 text-red-500" />
            Warning: High-entropy buffer sector. Access authorization restricted.
          </p>
        </div>
        <div className="bg-red-950/20 border border-red-550/30 px-3 py-1 font-mono text-[10px] text-red-500 font-bold flex items-center gap-1">
          <AlertTriangle className="w-3.5 h-3.5 animate-bounce" /> SNG_STRENGTH: EXT_LIMITS
        </div>
      </header>

      {/* Core visual center: SINGULARITY REACTOR GRID */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center my-6">
        
        {/* Pulsating Glowing Red Void Circular Well */}
        <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center mb-8">
          
          {/* Static boundary circles */}
          <div className="absolute w-full h-full rounded-full border border-red-950/40" />
          <div className="absolute w-[90%] h-[90%] rounded-full border border-dashed border-red-600/20 animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-[70%] h-[70%] rounded-full border border-red-500/30" />
          
          {/* Main absolute black void circle center with extreme red drop shadow glow */}
          <div 
            className="absolute w-[45%] h-[45%] bg-black rounded-full border border-red-600 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.6)]"
            style={{ animation: "pulse-slow 3s ease-in-out infinite" }}
          >
            <Skull className="w-8 h-8 text-red-600 animate-pulse mb-1" />
            <span className="text-[8px] text-red-500 font-bold uppercase tracking-widest text-[#ef4444]">CRITICAL</span>
          </div>

          <div className="absolute top-1 text-[9px] text-red-600 tracking-widest font-bold uppercase animate-pulse">
            SINGULARITY
          </div>
        </div>

        {/* Dynamic entropy card counter status display */}
        <div className="max-w-md w-full glass-panel border-red-900/40 p-4 font-mono text-xs text-center relative">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500" />
          
          <span className="text-zinc-500 uppercase tracking-widest block mb-1">ENTROPY_INDEX</span>
          <span className="text-2xl font-black text-red-500 tracking-widest">{entropy} Q/s</span>
          
          <div className="mt-3.5 flex justify-between items-center text-[10px] text-zinc-500 uppercase pt-3 border-t border-zinc-900">
            <span>FLUX_SECTOR_7G</span>
            <span className="text-red-400 font-bold flex items-center gap-1.5 shrink-0">
              <Activity className="w-3 h-3 text-red-500" /> CONTAINMENT_FIELDS_UNSTABLE
            </span>
          </div>
        </div>
      </main>

      {/* Manual direct link buttons to satisfy all required target screen paths */}
      <footer className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 py-4 border-t border-zinc-900">
        <div className="flex flex-wrap gap-4 font-mono text-xs justify-center md:justify-start">
          <button 
            onClick={() => onNavigate("Strategic Operations Terminal v4.1", "none")}
            className="text-zinc-650 hover:text-red-550 hover:text-red-500 transition-colors uppercase font-bold text-zinc-500"
          >
            [ STRATEGY ]
          </button>
          <button 
            onClick={() => onNavigate("Strategic Intel v4.3 Enhanced", "none")}
            className="text-zinc-650 hover:text-red-550 hover:text-red-500 transition-colors uppercase font-bold text-zinc-500"
          >
            [ INTEL ]
          </button>
          <button 
            onClick={() => onNavigate("Global Logistics v4.2 Enhanced", "none")}
            className="text-zinc-650 hover:text-red-550 hover:text-red-500 transition-colors uppercase font-bold text-zinc-500"
          >
            [ LOGISTICS ]
          </button>
          <button 
            onClick={() => onNavigate("Encrypted Comms v4.6 Decryption Active", "none")}
            className="text-zinc-650 hover:text-red-550 hover:text-red-500 transition-colors uppercase font-bold text-zinc-500"
          >
            [ COMMS ]
          </button>
        </div>

        <button
          onClick={() => onNavigate("Tactical Dimension: Mission Start Evolved", "push_back")}
          className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-black text-xs font-black tracking-widest uppercase transition-all rounded-none cursor-pointer border-b-2 border-red-900"
        >
          TERMINATE SESSION
        </button>
      </footer>
    </div>
  );
}
