import React, { useState } from "react";
import { ScreenName } from "./types";
import { AnimatePresence, motion } from "motion/react";

// Import all screen components
import DimensionSplash from "./components/DimensionSplash";
import NavigationShell from "./components/NavigationShell";
import EncryptedComms from "./components/EncryptedComms";
import SensorsTerminal from "./components/SensorsTerminal";
import SystemSettings from "./components/SystemSettings";
import GlobalLogistics from "./components/GlobalLogistics";
import DiagnosticsTerminal from "./components/DiagnosticsTerminal";
import CoordinatesTerminal from "./components/CoordinatesTerminal";
import StrategicOperations from "./components/StrategicOperations";
import StrategicIntel from "./components/StrategicIntel";
import TheVoid from "./components/TheVoid";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>(
    "Tactical Dimension: Mission Start Evolved"
  );
  const [transitionDirection, setTransitionDirection] = useState<"push" | "push_back" | "none">("none");

  const handleNavigate = (target: ScreenName, transition: "push" | "push_back" | "none") => {
    setTransitionDirection(transition);
    setCurrentScreen(target);
  };

  // Select variants based on transition type
  const getVariants = () => {
    if (transitionDirection === "push") {
      return {
        enter: { x: "100vw", opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: "-100vw", opacity: 0 }
      };
    }
    if (transitionDirection === "push_back") {
      return {
        enter: { x: "-100vw", opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: "100vw", opacity: 0 }
      };
    }
    return {
      enter: { opacity: 0 },
      center: { opacity: 1 },
      exit: { opacity: 0 }
    };
  };

  const renderScreenContent = () => {
    switch (currentScreen) {
      case "Tactical Dimension: Mission Start Evolved":
        return <DimensionSplash onNavigate={handleNavigate} />;
      case "Encrypted Comms v4.6 Decryption Active":
        return <EncryptedComms onNavigate={handleNavigate} />;
      case "Sensors Terminal v4.9":
        return <SensorsTerminal onNavigate={handleNavigate} />;
      case "System Configuration Terminal v5.0":
        return <SystemSettings onNavigate={handleNavigate} />;
      case "Global Logistics v4.2 Enhanced":
        return <GlobalLogistics onNavigate={handleNavigate} />;
      case "Diagnostics Terminal v4.10":
        return <DiagnosticsTerminal onNavigate={handleNavigate} />;
      case "Coordinates Terminal v4.9":
        return <CoordinatesTerminal onNavigate={handleNavigate} />;
      case "Strategic Operations Terminal v4.1":
        return <StrategicOperations onNavigate={handleNavigate} />;
      case "Strategic Intel v4.3 Enhanced":
        return <StrategicIntel onNavigate={handleNavigate} />;
      case "The Void":
        return <TheVoid onNavigate={handleNavigate} />;
      default:
        return <DimensionSplash onNavigate={handleNavigate} />;
    }
  };

  const showNavigationShell = currentScreen !== "Tactical Dimension: Mission Start Evolved";

  return (
    <div className="min-h-screen bg-black text-zinc-100 overflow-hidden font-mono selection:bg-amber-500/20">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentScreen}
          variants={getVariants()}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.25 }
          }}
          className="min-h-screen w-full flex flex-col"
        >
          {showNavigationShell ? (
            <NavigationShell currentScreen={currentScreen} onNavigate={handleNavigate}>
              {renderScreenContent()}
            </NavigationShell>
          ) : (
            renderScreenContent()
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
