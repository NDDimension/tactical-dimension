import React, { useState, useEffect } from "react";
import { ScreenName } from "../types";
import { 
  Key, 
  MessageSquare, 
  Lock, 
  Radio, 
  RefreshCw, 
  Eye, 
  AlertCircle 
} from "lucide-react";

interface EncryptedCommsProps {
  onNavigate: (target: ScreenName, transition: "push" | "push_back" | "none") => void;
}

export default function EncryptedComms({ onNavigate }: EncryptedCommsProps) {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<string[]>([
    "[000] SYS INITIALIZING KEY EXCHANGE...",
    "[005] OPR *garbled* x&9!m... rerouting through proxy node...",
  ]);

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const countStr = String(messages.length * 5).padStart(3, "0");
    setMessages(prev => [...prev, `[${countStr}] OPER_OUTBOUND: ${inputText}`]);
    setInputText("");
  };

  return (
    <div className="p-6 md:p-8 min-h-screen bg-black/95 relative z-10 w-full flex flex-col justify-between selection:bg-amber-500/20">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
        <span className="text-[20vw] font-black text-blue-500/[0.03] tracking-widest leading-none">
          COMMS
        </span>
      </div>

      {/* Header Info */}
      <section className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-4 border-b border-zinc-800/80">
        <div>
          <div className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase mb-1">
            COM_CORE // CRYPTOGRAPHIC UPLINK TERMINAL
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-amber-500 tracking-tight uppercase leading-none">
            ENCRYPTED_COMMS
          </h1>
          <p className="text-xs text-zinc-400 mt-2 font-mono flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-blue-400" />
            DECRYPTION ACTIVE // LEVEL 9 DEEP-SPACE CHANNEL
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-zinc-900 border border-zinc-800 px-3 py-1 font-mono text-[10px] text-blue-400 uppercase font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            SECURE_CHANNEL_Alpha
          </div>
        </div>
      </section>

      {/* Main Terminal Feed */}
      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow">
        
        {/* Terminal Text box (col-span-8) */}
        <div className="lg:col-span-8 glass-panel p-5 rounded-none relative flex flex-col justify-between min-h-[350px]">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-500/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-500/50" />

          <div className="flex justify-between items-center mb-4 pb-2 border-b border-zinc-800/60">
            <h2 className="text-xs font-bold text-amber-500 tracking-widest uppercase">&gt;&gt; COMMS_DECRYPTER_FEED</h2>
            <Key className="w-4 h-4 text-blue-400 animate-pulse" />
          </div>

          {/* Scrolling messages feed */}
          <div className="flex-grow bg-zinc-950 p-4 border border-zinc-800/40 text-xs font-mono text-cyan-300 flex flex-col gap-2.5 overflow-y-auto h-64 select-text">
            {messages.map((msg, index) => (
              <div key={index} className="flex gap-3 border-l border-zinc-800 pl-3 py-0.5 hover:bg-zinc-900/30">
                <span className="text-zinc-600 font-bold tracking-wider shrink-0">{msg.substring(0, 5)}</span>
                <span className="text-blue-200">{msg.substring(5)}</span>
              </div>
            ))}
            <div className="text-zinc-600 tracking-[0.2em] text-[10px] animate-pulse mt-2">
              &gt; STANDBY: SCANNING FOR DISCRETE INGRESS PACKETS...
            </div>
          </div>

          {/* Outbound transmit form block */}
          <form onSubmit={handleTransmit} className="mt-4 flex items-center border border-zinc-800 bg-zinc-950/90 pl-3">
            <span className="text-amber-500 font-bold mr-2 text-xs select-none">&gt;</span>
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="TRANSMIT_DATA OUTBOUND..."
              className="flex-grow bg-transparent text-xs text-amber-100 py-3 focus:outline-none placeholder-zinc-600 font-mono"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-amber-500 text-black text-xs font-extrabold tracking-widest uppercase hover:bg-amber-600 active:scale-95 transition-all shrink-0 rounded-none cursor-pointer"
            >
              TRANSMIT
            </button>
          </form>
        </div>

        {/* Status analysis panel (col-span-4) */}
        <div className="lg:col-span-4 glass-panel p-5 rounded-none relative flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400/50" />

          <div className="flex justify-between items-center mb-4 pb-2 border-b border-zinc-800/60">
            <h2 className="text-xs font-bold text-amber-500 tracking-widest uppercase">&gt;&gt; UPLINK_SPECTRUM</h2>
            <Radio className="w-4 h-4 text-blue-500" />
          </div>

          <div className="bg-zinc-950/60 p-4 border border-zinc-800/40 text-center mb-4">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">UPLINK_STATUS</span>
            <span className="text-xl font-bold text-blue-400 tracking-widest animate-pulse font-bebas">STABLE</span>
          </div>

          {/* Visual spectrum bars layout mimicking the graphic image */}
          <div className="bg-zinc-950 border border-zinc-800/40 p-4 flex flex-col justify-end h-44">
            <div className="flex justify-between items-end gap-1.5 h-32 px-1">
              <div className="w-[12%] bg-blue-500 transition-all duration-300 h-[25%]" />
              <div className="w-[12%] bg-blue-500 transition-all duration-300 h-[70%]" />
              <div className="w-[12%] bg-blue-500 transition-all duration-300 h-[10%]" />
              <div className="w-[12%] bg-blue-500 transition-all duration-300 h-[40%]" />
              <div className="w-[12%] bg-blue-500 transition-all duration-300 h-[55%] animate-pulse" />
              <div className="w-[12%] bg-blue-500 transition-all duration-300 h-[80%]" />
              <div className="w-[12%] bg-blue-500 transition-all duration-300 h-[45%]" />
              <div className="w-[12%] bg-blue-500 transition-all duration-300 h-[18%]" />
            </div>
            <div className="flex justify-between text-[8px] text-zinc-500 font-bold font-mono mt-3 uppercase tracking-wider">
              <span>0 Hz</span>
              <span>10 kHz</span>
            </div>
          </div>

          <div className="mt-4 text-[10px] text-zinc-500 leading-tight">
            DECRYPTION ENGINE: AES-256 OVERRIDE<br />
            SIGNAL PATH: MULTI-LAYER TRANSIT
          </div>
        </div>

      </section>

      {/* Manual action triggers to support standard navigation flow test targets */}
      <section className="relative z-10 mt-8 flex flex-wrap justify-between items-center gap-4">
        {/* Support body/nav[1]/div[2]/a[1] -> Strategic Operations */}
        <button
          onClick={() => onNavigate("Strategic Operations Terminal v4.1", "none")}
          className="text-xs text-zinc-500 hover:text-amber-500 transition-colors uppercase font-bold tracking-widest"
        >
          [ GOTO_STRATEGY ]
        </button>

        <button
          onClick={() => onNavigate("Tactical Dimension: Mission Start Evolved", "push_back")}
          className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-black text-xs font-black tracking-widest uppercase transition-all rounded-none cursor-pointer border-b-2 border-red-900"
        >
          TERMINATE_SESSION
        </button>
      </section>
    </div>
  );
}
