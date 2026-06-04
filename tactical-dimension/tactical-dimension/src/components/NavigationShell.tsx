import React from "react";
import { ScreenName } from "../types";
import { 
  Compass, 
  Activity, 
  Lock, 
  Radar, 
  Radio, 
  Terminal, 
  Settings, 
  Power,
  Bell,
  Cpu,
  Shield,
  Eye,
  Settings2
} from "lucide-react";

interface NavigationShellProps {
  currentScreen: ScreenName;
  onNavigate: (target: ScreenName, transition: "push" | "push_back" | "none") => void;
  children: React.ReactNode;
}

export default function NavigationShell({
  currentScreen,
  onNavigate,
  children
}: NavigationShellProps) {
  // Define standard links and their screen targets
  const handleNavClick = (screen: ScreenName) => {
    onNavigate(screen, "none");
  };

  return (
    <div className="min-h-screen bg-black text-on-surface flex flex-col font-mono selection:bg-amber-500/20">
      {/* Global Scanline overlay */}
      <div className="fixed inset-0 scanlines opacity-5 pointer-events-none z-50" />

      {/* TopNavBar */}
      <header className="fixed top-0 left-0 w-full h-16 bg-[#131313]/90 backdrop-blur-xl border-b border-zinc-800/80 z-40 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <span 
            onClick={() => onNavigate("Tactical Dimension: Mission Start Evolved", "push_back")}
            className="font-black text-amber-500 italic tracking-tighter text-lg leading-none cursor-pointer uppercase select-none hover:opacity-80"
          >
            TACTICAL_DIMENSION_v4.2
          </span>
          <span className="text-[10px] bg-red-950/40 text-red-400 border border-red-500/30 px-1.5 py-0.5 animate-pulse">
            SECURE
          </span>
        </div>

        {/* Top Navigation Links - xpaths target these */}
        <nav className="hidden md:flex items-center gap-1">
          <a
            href="#strategy"
            onClick={(e) => { e.preventDefault(); handleNavClick("Strategic Operations Terminal v4.1"); }}
            className={`px-3 py-1 text-xs uppercase tracking-widest transition-colors ${
              currentScreen === "Strategic Operations Terminal v4.1" 
                ? "text-amber-500 border-b-2 border-amber-500 font-bold" 
                : "text-zinc-400 hover:text-amber-500"
            }`}
          >
            STRATEGY
          </a>
          <a
            href="#intel"
            onClick={(e) => { e.preventDefault(); handleNavClick("Strategic Intel v4.3 Enhanced"); }}
            className={`px-3 py-1 text-xs uppercase tracking-widest transition-colors ${
              currentScreen === "Strategic Intel v4.3 Enhanced" 
                ? "text-amber-500 border-b-2 border-amber-500 font-bold" 
                : "text-zinc-400 hover:text-amber-500"
            }`}
          >
            INTEL
          </a>
          <a
            href="#logistics"
            onClick={(e) => { e.preventDefault(); handleNavClick("Global Logistics v4.2 Enhanced"); }}
            className={`px-3 py-1 text-xs uppercase tracking-widest transition-colors ${
              currentScreen === "Global Logistics v4.2 Enhanced" 
                ? "text-amber-500 border-b-2 border-amber-500 font-bold" 
                : "text-zinc-400 hover:text-amber-500"
            }`}
          >
            LOGISTICS
          </a>
          <a
            href="#comms"
            onClick={(e) => { e.preventDefault(); handleNavClick("Encrypted Comms v4.6 Decryption Active"); }}
            className={`px-3 py-1 text-xs uppercase tracking-widest transition-colors ${
              currentScreen === "Encrypted Comms v4.6 Decryption Active" 
                ? "text-amber-500 border-b-2 border-amber-500 font-bold" 
                : "text-zinc-400 hover:text-amber-500"
            }`}
          >
            COMMS
          </a>
          {/* This is body/header[1]/nav[1]/a[5] -> 5th item in top nav, represents The Void */}
          <a
            href="#the-void"
            onClick={(e) => { e.preventDefault(); handleNavClick("The Void"); }}
            className={`px-3 py-1 text-xs uppercase tracking-widest transition-colors ${
              currentScreen === "The Void" 
                ? "text-amber-500 border-b-2 border-amber-500 font-bold" 
                : "text-zinc-400 hover:text-amber-500"
            }`}
          >
            VOID
          </a>
        </nav>

        {/* Header Right Utility Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-zinc-400 hover:text-amber-500 transition-colors cursor-pointer relative">
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-400 rounded-full animate-ping" />
            <Bell className="w-4 h-4" />
          </button>
          
          {/* Settings Trigger */}
          <button 
            onClick={() => handleNavClick("System Configuration Terminal v5.0")}
            className="text-amber-500 hover:text-amber-400 transition-all cursor-pointer flex items-center justify-center p-1.5 rounded bg-zinc-900 border border-amber-500/20 shadow-[0_0_8px_rgba(245,158,11,0.1)] active:scale-95"
            title="System Configuration Settings"
          >
            <Settings className="w-4 h-4 animate-[spin_10s_linear_infinite]" />
          </button>
        </div>
      </header>

      {/* SideNavBar (Desktop sidebar) */}
      <aside className="hidden md:flex fixed left-0 top-16 w-64 h-[calc(100vh-64px)] bg-[#0c0c0c]/90 border-r border-zinc-800/80 z-30 flex-col justify-between p-4 py-6">
        <div>
          {/* Operator Profile section */}
          <div className="flex items-center gap-3.5 px-3 py-3 bg-zinc-900/60 border border-zinc-800/60 rounded mb-6">
            <div className="w-10 h-10 border border-amber-500/30 bg-amber-500/5 flex items-center justify-center text-amber-500 relative shrink-0">
              <span className="text-[10px] absolute top-1 right-1 font-bold animate-pulse text-green-400">●</span>
              <Cpu className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs text-secondary font-bold tracking-wider leading-none truncate text-amber-500 uppercase">SYS OP // CENTRAL</h3>
              <p className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1">SECTOR_07_ACTIVE</p>
            </div>
          </div>

          {/* Navigation Links inside Aside Nav block */}
          <nav className="flex flex-col gap-0.5">
            {/* a1 */}
            <a
              href="#coordinates"
              onClick={(e) => { e.preventDefault(); handleNavClick("Coordinates Terminal v4.9"); }}
              className={`flex items-center gap-3.5 px-4 py-2.5 text-xs tracking-wider transition-colors border-l-2 ${
                currentScreen === "Coordinates Terminal v4.9"
                  ? "bg-amber-500/5 text-amber-500 border-amber-500 font-bold"
                  : "text-zinc-400 border-transparent hover:bg-zinc-900/40 hover:text-zinc-200"
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>COORDINATES</span>
            </a>

            {/* a2: body/aside[1]/nav[1]/a[2] - Represents second item in aside nav, triggers Strategic Intel */}
            <a
              href="#intel"
              onClick={(e) => { e.preventDefault(); handleNavClick("Strategic Intel v4.3 Enhanced"); }}
              className={`flex items-center gap-3.5 px-4 py-2.5 text-xs tracking-wider transition-colors border-l-2 ${
                currentScreen === "Strategic Intel v4.3 Enhanced"
                  ? "bg-amber-500/5 text-amber-500 border-amber-500 font-bold"
                  : "text-zinc-400 border-transparent hover:bg-zinc-900/40 hover:text-zinc-200"
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>INTEL / TELEMETRY</span>
            </a>

            {/* a3 */}
            <a
              href="#encryption"
              onClick={(e) => { e.preventDefault(); handleNavClick("Encrypted Comms v4.6 Decryption Active"); }}
              className={`flex items-center gap-3.5 px-4 py-2.5 text-xs tracking-wider transition-colors border-l-2 ${
                currentScreen === "Encrypted Comms v4.6 Decryption Active"
                  ? "bg-amber-500/5 text-amber-500 border-amber-500 font-bold"
                  : "text-zinc-400 border-transparent hover:bg-zinc-900/40 hover:text-zinc-200"
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>ENCRYPTION</span>
            </a>

            {/* a4 */}
            <a
              href="#sensors"
              onClick={(e) => { e.preventDefault(); handleNavClick("Sensors Terminal v4.9"); }}
              className={`flex items-center gap-3.5 px-4 py-2.5 text-xs tracking-wider transition-colors border-l-2 ${
                currentScreen === "Sensors Terminal v4.9"
                  ? "bg-amber-500/5 text-amber-500 border-amber-500 font-bold"
                  : "text-zinc-400 border-transparent hover:bg-zinc-900/40 hover:text-zinc-200"
              }`}
            >
              <Radar className="w-4 h-4" />
              <span>SENSORS</span>
            </a>

            {/* a5 */}
            <a
              href="#uplink"
              onClick={(e) => { e.preventDefault(); handleNavClick("Global Logistics v4.2 Enhanced"); }}
              className={`flex items-center gap-3.5 px-4 py-2.5 text-xs tracking-wider transition-colors border-l-2 ${
                currentScreen === "Global Logistics v4.2 Enhanced"
                  ? "bg-amber-500/5 text-amber-500 border-amber-500 font-bold"
                  : "text-zinc-400 border-transparent hover:bg-zinc-900/40 hover:text-zinc-200"
              }`}
            >
              <Radio className="w-4 h-4" />
              <span>UPLINK / LOGISTICS</span>
            </a>
          </nav>
        </div>

        {/* Aside Footer Triggers */}
        <div className="flex flex-col gap-2 pt-4 border-t border-zinc-800/60">
          <a
            href="#diagnostics"
            onClick={(e) => { e.preventDefault(); handleNavClick("Diagnostics Terminal v4.10"); }}
            className={`flex items-center gap-3 px-4 py-2 text-xs tracking-wider rounded transition-colors ${
              currentScreen === "Diagnostics Terminal v4.10"
                ? "bg-blue-500/10 text-blue-400 font-bold border border-blue-500/20"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-zinc-500" />
            <span>DIAGNOSTICS</span>
          </a>

          {/* Trigger to System settings config */}
          <a
            href="#settings"
            onClick={(e) => { e.preventDefault(); handleNavClick("System Configuration Terminal v5.0"); }}
            className={`flex items-center gap-3 px-4 py-2 text-xs tracking-wider rounded transition-colors ${
              currentScreen === "System Configuration Terminal v5.0"
                ? "bg-amber-500/10 text-amber-500 font-bold border border-amber-500/20"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
            }`}
          >
            <Settings2 className="w-3.5 h-3.5 text-zinc-500" />
            <span>SETTINGS CONFIG</span>
          </a>

          <button
            onClick={() => onNavigate("Tactical Dimension: Mission Start Evolved", "push_back")}
            className="w-full mt-2 text-left px-4 py-2 text-red-500 hover:bg-red-500/5 border border-transparent hover:border-red-500/20 rounded flex items-center transition-all cursor-pointer font-bold tracking-widest text-[11px]"
          >
            <Power className="w-3.5 h-3.5 mr-3 shrink-0 text-red-400 animate-pulse" />
            <span>TERMINATE_SESSION</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area - padded on left for sidebar */}
      <div className="flex-1 md:pl-64 pt-16 flex flex-col relative w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
