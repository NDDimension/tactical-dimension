import React, { useState } from "react";
import { ScreenName } from "../types";
import { 
  Sliders, 
  User, 
  Cpu, 
  ShieldAlert, 
  Save, 
  Image as ImageIcon 
} from "lucide-react";

interface SystemSettingsProps {
  onNavigate: (target: ScreenName, transition: "push" | "push_back" | "none") => void;
}

export default function SystemSettings({ onNavigate }: SystemSettingsProps) {
  const [hudOpacity, setHudOpacity] = useState(85);
  const [scanlineIntensity, setScanlineIntensity] = useState(12);
  const [biometricOverride, setBiometricOverride] = useState(true);
  const [signalMasking, setSignalMasking] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="p-6 md:p-8 min-h-screen bg-black/95 relative z-10 w-full flex flex-col justify-between selection:bg-amber-500/20">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
        <span className="text-[25vw] font-black text-amber-500/[0.015] tracking-widest leading-none">
          05
        </span>
      </div>

      {/* Header Info */}
      <header className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-zinc-800/80">
        <div>
          <div className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase mb-1">
            TERMINAL_01 // CONFIGURATION
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-amber-500 tracking-tight uppercase leading-none">
            SYSTEM SETTINGS
          </h1>
          <p className="text-xs text-zinc-400 mt-2 font-mono flex items-center gap-1.5">
            Adjust critical hardware and interface parameters for mission-level operation.
          </p>
        </div>
      </header>

      {/* Main Grid content layout */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 flex-grow mb-8">
        
        {/* INTERFACE_TELEMETRY Slider controls (col-span-8) */}
        <div className="md:col-span-8 bg-zinc-950/40 border border-zinc-800/60 p-6 rounded-none relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-500/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-500/50" />

          <div className="flex items-center gap-2 mb-6 border-b border-zinc-900 pb-2">
            <Sliders className="w-4 h-4 text-blue-400" />
            <h3 className="text-sm font-bold text-amber-500 tracking-widest uppercase">INTERFACE_TELEMETRY</h3>
          </div>

          <div className="space-y-6">
            {/* Opacity slider */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-zinc-400 font-bold uppercase">HUD_OPACITY</span>
                <span className="text-amber-500 font-bold">{hudOpacity}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={hudOpacity}
                onChange={(e) => setHudOpacity(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 accent-amber-500 cursor-pointer focus:outline-none"
              />
            </div>

            {/* Scanline slider */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-zinc-400 font-bold uppercase">SCANLINE_INTENSITY</span>
                <span className="text-amber-500 font-bold">{scanlineIntensity}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="50" 
                value={scanlineIntensity}
                onChange={(e) => setScanlineIntensity(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 accent-amber-500 cursor-pointer focus:outline-none"
              />
            </div>

            <div className="p-4 bg-zinc-900/40 border border-zinc-800/40 rounded mt-6">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-1">GRID_STABILIZATION</span>
              <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                Luminous borders are automatically locked at 0.5px. Dynamic refresh rates bound to 60Hz.
              </p>
            </div>
          </div>
        </div>

        {/* Operator Profile card (col-span-4) */}
        <div className="md:col-span-4 bg-zinc-950/60 border border-zinc-800/80 p-6 rounded-none relative flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-500" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-500" />

          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-zinc-900 pb-2">
              <User className="w-4 h-4 text-amber-500" />
              <h3 className="text-sm font-bold text-amber-500 tracking-widest uppercase">OPERATOR</h3>
            </div>

            {/* Operator Helm Grayscale Picture mock */}
            <div className="aspect-square w-full bg-zinc-900 border border-zinc-800 rounded-none mb-4 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#121212] flex items-center justify-center">
                {/* Simulated helmet icon as vector asset fallback */}
                <div className="flex flex-col items-center justify-center gap-2">
                  <ShieldAlert className="w-14 h-14 text-zinc-650 text-zinc-700 animate-pulse" />
                  <span className="text-[9px] text-zinc-500 uppercase tracking-widest">TACTICAL_SYS_OPERATOR</span>
                </div>
              </div>
              
              {/* Optional avatar image overlay if loaded */}
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxt0SG7m8MHTY6zgx4E9rqNybc1BS6VIkPOHVBUUplMmKvlmM8HQRs_QMbC3omZzSjLIawVoNIhGSL9Ql4tP7wuhAX0RKEJm_9ZCazX0VeqDI_6HsGbMDoJ7zc9d4RopOTDfdHkhJAK-d5Jp4ZZBIHHOwtiuKp2xrI50xDNMGZK46v5BLMQ_MCFpWZ7IO23Ab9eXYl4vwAqDWPMT6EMT-eHky_-cbthWyprs9BHzFntJT0jiXUOKp9paV4_qksbDKu1V90o5BG24u8"
                onError={(e) => { e.currentTarget.style.display = "none"; }} 
                alt="Tactical Operator Vector"
                className="w-full h-full object-cover grayscale opacity-50 block duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-3 left-3 bg-black/80 px-2 py-0.5 border border-amber-500/20 text-[10px] text-amber-500 font-bold">
                ID: TD-992-ALPHA
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-zinc-900 pb-1">
                <span className="text-zinc-500 uppercase font-bold">COMMANDER</span>
                <span className="text-zinc-200">K. VANCE</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-1">
                <span className="text-zinc-500 uppercase font-bold">MISSION_RANK</span>
                <span className="text-blue-400 font-bold">ELITE_EXARCH</span>
              </div>
            </div>
          </div>

          <button className="w-full mt-4 border border-zinc-700/60 hover:border-amber-500 text-zinc-400 hover:text-amber-500 py-2.5 text-[11px] font-extrabold tracking-widest uppercase transition-all rounded-none cursor-pointer">
            MANAGE_CREDENTIALS
          </button>
        </div>

        {/* HARDWARE_STATUS layout widgets (col-span-6) */}
        <div className="md:col-span-6 bg-zinc-950/60 border border-zinc-800/80 p-6 rounded-none relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-zinc-700" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-zinc-700" />

          <div className="flex justify-between items-center mb-6 border-b border-zinc-900 pb-2">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400 animate-pulse" />
              <h3 className="text-sm font-bold text-amber-500 tracking-widest uppercase">HARDWARE_STATUS</h3>
            </div>
            <span className="text-[9px] text-green-400 font-bold animate-pulse">● SYSTEM_STABLE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* CPU */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-[10px] text-zinc-500 font-bold">
                <span>CPU_LOAD</span>
                <span>42.8%</span>
              </div>
              <div className="w-full bg-zinc-950 h-2 border border-zinc-900">
                <div className="bg-blue-500 h-full w-[42.8%]" />
              </div>
            </div>

            {/* GPU */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-[10px] text-zinc-500 font-bold">
                <span>GPU_LOAD</span>
                <span>18.2%</span>
              </div>
              <div className="w-full bg-zinc-950 h-2 border border-zinc-900">
                <div className="bg-blue-500 h-full w-[18.2%]" />
              </div>
            </div>

            {/* VOID BUFFER */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-[10px] text-zinc-500 font-bold">
                <span>VOID_BUFFER</span>
                <span>1.4 TB (75%)</span>
              </div>
              <div className="w-full bg-zinc-950 h-2 border border-zinc-900">
                <div className="bg-amber-500 h-full w-[75%]" />
              </div>
            </div>

            {/* UPLINK STRENGTH */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-[10px] text-zinc-500 font-bold">
                <span>UPLINK_STRENGTH</span>
                <span>98%</span>
              </div>
              <div className="w-full bg-zinc-950 h-2 border border-zinc-900">
                <div className="bg-green-500 h-full w-[98%]" />
              </div>
            </div>
          </div>
        </div>

        {/* SECURITY_PROTOCOLS setup (col-span-6) */}
        <div className="md:col-span-6 bg-zinc-950/60 border border-zinc-800/80 p-6 rounded-none relative flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-zinc-700" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-zinc-700" />

          <div className="flex items-center gap-2 mb-4 border-b border-zinc-900 pb-2">
            <User className="w-4 h-4 text-red-500" />
            <h3 className="text-sm font-bold text-amber-500 tracking-widest uppercase">SECURITY_PROTOCOLS</h3>
          </div>

          <div className="space-y-3.5 mb-4">
            {/* AES blocks widget */}
            <div className="flex justify-between items-center bg-zinc-900/60 p-3 border border-zinc-850">
              <div className="text-[10px] font-mono leading-tight">
                <span className="block font-bold text-zinc-300">ENCRYPTION_LEVEL</span>
                <span className="text-zinc-500">AES-256 MULTI-LAYERED</span>
              </div>
              {/* Simple visual blocks */}
              <div className="flex gap-0.5">
                <div className="w-1.5 h-4 bg-amber-500" />
                <div className="w-1.5 h-4 bg-amber-500" />
                <div className="w-1.5 h-4 bg-amber-500" />
                <div className="w-1.5 h-4 bg-amber-500" />
                <div className="w-1.5 h-4 bg-zinc-700" />
                <div className="w-1.5 h-4 bg-zinc-700" />
              </div>
            </div>

            {/* Biometric trigger */}
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400 font-bold uppercase tracking-wider">BIOMETRIC_OVERRIDE</span>
              <button 
                onClick={() => setBiometricOverride(!biometricOverride)}
                className={`w-12 h-6 border p-1 rounded-none cursor-pointer transition-colors ${
                  biometricOverride ? "bg-amber-500/20 border-amber-500" : "bg-red-950/20 border-red-500"
                }`}
              >
                <div className={`w-3.5 h-3.5 transition-all ${
                  biometricOverride ? "bg-amber-500 translate-x-6" : "bg-red-500 translate-x-0"
                }`} />
              </button>
            </div>

            {/* Signal masking trigger */}
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400 font-bold uppercase tracking-wider">SIGNAL_MASKING</span>
              <button 
                onClick={() => setSignalMasking(!signalMasking)}
                className={`w-12 h-6 border p-1 rounded-none cursor-pointer transition-colors ${
                  signalMasking ? "bg-amber-500/20 border-amber-500" : "bg-zinc-900 border-zinc-700"
                }`}
              >
                <div className={`w-3.5 h-3.5 transition-all ${
                  signalMasking ? "bg-amber-500 translate-x-6" : "bg-zinc-500 translate-x-0"
                }`} />
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* CTA SAVE_CHANGES */}
      <section className="relative z-10 flex justify-between items-center py-4 border-t border-zinc-800">
        <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
          ST_CODE: CONFIG_77A-S
        </span>
        <div className="flex items-center gap-4">
          {isSaved && (
            <span className="text-xs text-green-400 font-bold animate-pulse font-mono uppercase">
              // SETTINGS_APPLIED // STABLE_SYS
            </span>
          )}
          <button 
            onClick={handleSave}
            className="group relative px-8 py-3 bg-amber-500 text-black font-extrabold tracking-widest text-xs uppercase rounded-none transition-all duration-300 hover:bg-amber-600 hover:shadow-[0_0_15px_#ffb77d] active:scale-95 cursor-pointer border-b-2 border-orange-700"
          >
            <div className="absolute top-0 left-0 w-1 h-1 bg-white" />
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-white" />
            <div className="flex items-center gap-2">
              <Save className="w-3.5 h-3.5" />
              <span>SAVE_CHANGES</span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
