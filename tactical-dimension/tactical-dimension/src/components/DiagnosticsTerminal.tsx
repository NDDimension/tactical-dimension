import React, { useState, useEffect, useRef } from "react";
import { ScreenName } from "../types";
import { 
  Terminal, 
  Settings, 
  Play, 
  Cpu, 
  ChevronRight,
  Database,
  Activity
} from "lucide-react";

interface DiagnosticsTerminalProps {
  onNavigate: (target: ScreenName, transition: "push" | "push_back" | "none") => void;
}

export default function DiagnosticsTerminal({ onNavigate }: DiagnosticsTerminalProps) {
  const [memoryCells, setMemoryCells] = useState<string[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  const [commandInput, setCommandInput] = useState("");
  const logTerminalRef = useRef<HTMLDivElement>(null);

  // Generate memory cells (12x10)
  useEffect(() => {
    const generateCells = () => {
      const arr = [];
      for (let i = 0; i < 120; i++) {
        const rand = Math.random();
        if (rand > 0.95) arr.push("critical"); // amber
        else if (rand > 0.7) arr.push("active"); // azure
        else arr.push("empty"); // gray
      }
      setMemoryCells(arr);
    };

    generateCells();
    const interval = setInterval(generateCells, 2500);
    return () => clearInterval(interval);
  }, []);

  // Generate logs ticker
  useEffect(() => {
    const mockMessages = [
      "SCANNING: QUANTUM_FLUX_DENSITY - 0.982",
      "RETRYING: Connection sequence...",
      "SUCCESS: VOID_DIMENSION_LINK established",
      "ERROR: Buffer overflow at address 0xFF02",
      "DEBUG: Garbage collection in Progress",
      "LOG: Operator ALPHA_UNIT authenticated",
      "ALERT: Substrate depth exceeding limits",
      "STATUS: Dimensions locked at 4D_XYZT",
      "MSG: Encryption key rotated successfully",
      "WARN: Lattice fluctuations in Sector 4"
    ];

    const generateInitialLogs = () => {
      const initialLogs = [];
      const time = new Date();
      for (let i = 0; i < 20; i++) {
        time.setSeconds(time.getSeconds() - (20 - i) * 5);
        const timeStr = time.toLocaleTimeString("en-GB", { hour12: false });
        const msg = mockMessages[Math.floor(Math.random() * mockMessages.length)];
        initialLogs.push(`[${timeStr}] ${msg}`);
      }
      setLogs(initialLogs);
    };

    generateInitialLogs();

    const logInterval = setInterval(() => {
      const timeStr = new Date().toLocaleTimeString("en-GB", { hour12: false });
      const msg = mockMessages[Math.floor(Math.random() * mockMessages.length)];
      setLogs(prev => {
        const next = [...prev, `[${timeStr}] ${msg}`];
        if (next.length > 50) next.shift(); // Bound length
        return next;
      });
    }, 1500);

    return () => clearInterval(logInterval);
  }, []);

  // Scroll to bottom on log append
  useEffect(() => {
    if (logTerminalRef.current) {
      logTerminalRef.current.scrollTop = logTerminalRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandInput.trim()) return;
    const timeStr = new Date().toLocaleTimeString("en-GB", { hour12: false });
    const userCmd = commandInput.toUpperCase();
    setLogs(prev => [...prev, `[${timeStr}] CMD_INBOUND: ${commandInput}`]);
    
    // Simulate terminal response
    setTimeout(() => {
      let resp = `[${timeStr}] ERR: CMD '${userCmd}' UNRECOGNIZED`;
      if (userCmd === "SCAN" || userCmd === "INITIATE SCAN") {
        resp = `[${timeStr}] OVERRIDE: INITIATING DIAGNOSTIC CORE SWEEP... NOMINAL`;
      } else if (userCmd === "CLEAR") {
        setLogs([]);
        setCommandInput("");
        return;
      } else if (userCmd === "HELP") {
        resp = `[${timeStr}] HELP: AVAILABLE SYSTEM CMDS: [SCAN, CLEAR, HELP]`;
      }
      setLogs(prev => [...prev, resp]);
    }, 400);

    setCommandInput("");
  };

  return (
    <div className="p-6 md:p-8 min-h-screen bg-black/95 relative z-10 w-full flex flex-col justify-between selection:bg-amber-500/20 leading-none">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
        <span className="text-[25vw] font-black text-amber-500/[0.015] tracking-widest leading-none">
          04
        </span>
      </div>

      {/* Header */}
      <header className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-4 border-b border-zinc-800/80">
        <div>
          <div className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase mb-1">
            TERMINAL_04 // CORE HEALTH DIAGNOSTICS
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-amber-500 tracking-tight uppercase leading-none">
            DIAGNOSTICS
          </h1>
          <p className="text-xs text-zinc-400 mt-2 font-mono flex items-center gap-1.5">
            Real-time matrix allocations, core heat indicators and event trace daemon.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {/* settings trigger */}
          <button 
            onClick={() => onNavigate("System Configuration Terminal v5.0", "none")}
            className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 text-amber-500 hover:text-amber-400 text-xs px-3 py-1.5 transition-colors cursor-pointer rounded-none font-bold"
          >
            <Settings className="w-3.5 h-3.5 animate-spin" />
            <span>settings</span>
          </button>
        </div>
      </header>

      {/* Main Grid content (3 columns structure matching screen design) */}
      <section className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-6 flex-grow items-stretch mb-6">
        
        {/* Left Column: SYSTEM_HARDWARE */}
        <div className="xl:col-span-3 glass-panel p-5 rounded-none relative flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-500/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-500/50" />

          <div className="border-b border-zinc-900 pb-2 mb-4">
            <h2 className="text-xs font-bold text-amber-500 tracking-widest uppercase flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-blue-400" /> SYSTEM_HARDWARE
            </h2>
          </div>

          <div className="space-y-4 flex-grow font-mono text-xs">
            {/* Processor */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-500 font-bold uppercase">CORE_PROCESSOR [0x1A]</span>
                <span className="text-green-400 font-bold tracking-widest animate-pulse">NOMINAL</span>
              </div>
              <div className="w-full bg-zinc-900 h-1.5 border border-zinc-800">
                <div className="h-full bg-green-500 w-[92%]" />
              </div>
            </div>

            {/* Stabilizer */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-500 font-bold uppercase">QUANTUM_STABILIZER</span>
                <span className="text-amber-500 font-bold tracking-widest animate-pulse">STABILIZING</span>
              </div>
              <div className="w-full bg-zinc-900 h-1.5 border border-zinc-800">
                <div className="h-full bg-amber-500 w-[45%] animate-pulse" />
              </div>
            </div>

            {/* Anchors */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-500 font-bold uppercase">DIMENSION_ANCHORS</span>
                <span className="text-green-400 font-bold tracking-widest animate-pulse">NOMINAL</span>
              </div>
              <div className="w-full bg-zinc-900 h-1.5 border border-zinc-800">
                <div className="h-full bg-green-500 w-full" />
              </div>
            </div>

            {/* Neural */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-500 font-bold uppercase">NEURAL_INTERFACE</span>
                <span className="text-green-400 font-bold tracking-widest animate-pulse">NOMINAL</span>
              </div>
              <div className="w-full bg-zinc-900 h-1.5 border border-zinc-800">
                <div className="h-full bg-green-500 w-[88%]" />
              </div>
            </div>

            {/* Temperature card */}
            <div className="mt-6 p-3 bg-zinc-900/60 border border-zinc-850">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">TEMPERATURE</span>
              <span className="text-2xl font-black text-blue-400 font-bebas">34.2°C</span>
              <div className="flex gap-1.5 mt-2.5">
                <div className="w-2 h-4 bg-blue-500 animate-pulse" />
                <div className="w-2 h-4 bg-blue-500/80" />
                <div className="w-2 h-4 bg-blue-500/50" />
                <div className="w-2 h-4 bg-zinc-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Center: MEMORY_ALLOCATION_MAP */}
        <div className="xl:col-span-6 glass-panel p-5 rounded-none relative flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400/50" />

          <div className="flex justify-between items-center mb-4 border-b border-zinc-900 pb-2">
            <h2 className="text-xs font-bold text-amber-500 tracking-widest uppercase flex items-center gap-1.5">
              <Database className="w-4 h-4 text-amber-500" /> MEMORY_ALLOCATION_MAP
            </h2>
            <span className="text-[9px] text-zinc-500 uppercase tracking-wider font-mono">SECTOR_SIZE: 1024KB // RADIX: 16</span>
          </div>

          {/* 12x10 allocation cells grid */}
          <div className="flex-grow grid grid-cols-12 gap-1.5 bg-zinc-950/60 p-4 border border-zinc-800/40 select-none">
            {memoryCells.map((cell, index) => {
              let bg = "bg-zinc-800/40 border border-zinc-900";
              let glow = "";
              if (cell === "active") {
                bg = "bg-blue-500/80";
              } else if (cell === "critical") {
                bg = "bg-amber-500";
                glow = "shadow-[0_0_8px_#ffb77d]";
              }
              return (
                <div 
                  key={index} 
                  className={`w-full aspect-square transition-all duration-700 ${bg} ${glow}`}
                  title={`${cell.toUpperCase()} block #${index}`}
                />
              );
            })}
          </div>

          {/* Legend and stats */}
          <div className="flex justify-between items-center mt-4 text-[10px] uppercase font-mono">
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-zinc-800/80 block" /> EMPTY
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-blue-500 block" /> ACTIVE
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-amber-500 block" /> CRITICAL
              </span>
            </div>
            <div className="text-zinc-400 font-bold">GRID LOAD: 42.8%</div>
          </div>
        </div>

        {/* Right Column: ERROR_LOG_DAEMON */}
        <div className="xl:col-span-3 glass-panel p-5 rounded-none relative flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-500/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-500/50" />

          <div className="border-b border-zinc-900 pb-2 mb-4">
            <h2 className="text-xs font-bold text-amber-500 tracking-widest uppercase flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-red-500" /> ERROR_LOG_DAEMON
            </h2>
          </div>

          {/* Scrollable logs */}
          <div 
            ref={logTerminalRef}
            className="flex-grow bg-zinc-950 p-3 border border-zinc-800/40 text-[10px] font-mono text-zinc-400 flex flex-col gap-1.5 h-64 overflow-y-auto pr-1 select-text"
          >
            {logs.map((log, index) => {
              const isError = log.includes("ERROR") || log.includes("ALERT") || log.includes("User command");
              const isWarning = log.includes("WARN") || log.includes("STABILIZING");
              const isSuccess = log.includes("SUCCESS") || log.includes("nominal");

              let color = "text-zinc-400";
              if (isError) color = "text-red-400 font-bold";
              else if (isWarning) color = "text-amber-500 font-bold";
              else if (isSuccess) color = "text-green-400";

              return (
                <div key={index} className={`flex gap-1.5 border-l border-zinc-900 pl-2 py-0.5 hover:bg-zinc-900/40 ${color}`}>
                  <span className="text-zinc-650 opacity-40 shrink-0 select-none">{log.substring(0, 10)}</span>
                  <span>{log.substring(10)}</span>
                </div>
              );
            })}
          </div>

          {/* Input field representing typing cursor command lines */}
          <form onSubmit={handleCommandSubmit} className="mt-3 flex items-center border border-zinc-800 bg-zinc-950 text-[11px] font-mono pl-2">
            <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0 select-none animate-pulse" />
            <input 
              type="text"
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              placeholder="ENTER DIAG_CMD..."
              className="flex-grow bg-transparent text-amber-100 py-2 focus:outline-none placeholder-zinc-700 min-w-0"
            />
          </form>
        </div>

      </section>

      {/* Manual settings navigation link target to support standard navigation flow test targets */}
      <section className="relative z-10 flex justify-between items-center pt-4 border-t border-zinc-800/60 font-mono text-[10px] uppercase">
        <span className="text-zinc-500 font-bold">
          SYSTEM_PROTOCOL_v4.2 // SECTOR_VOID
        </span>
        <button
          onClick={() => onNavigate("System Configuration Terminal v5.0", "none")}
          className="text-zinc-400 hover:text-amber-500 transition-colors uppercase font-bold tracking-widest text-[10px]"
        >
          [ CONFIGURATION_MANAGEMENT ]
        </button>
      </section>
    </div>
  );
}
