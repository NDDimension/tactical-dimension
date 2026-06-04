export type ScreenName =
  | "Tactical Dimension: Mission Start Evolved"
  | "Encrypted Comms v4.6 Decryption Active"
  | "Sensors Terminal v4.9"
  | "System Configuration Terminal v5.0"
  | "Global Logistics v4.2 Enhanced"
  | "Diagnostics Terminal v4.10"
  | "Coordinates Terminal v4.9"
  | "Strategic Operations Terminal v4.1"
  | "Strategic Intel v4.3 Enhanced"
  | "The Void";

export interface NavigationHistoryEntry {
  screen: ScreenName;
  transition: "push" | "push_back" | "none";
}
