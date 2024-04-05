import { createContext } from "react";

export const ClockContext = createContext({
  texture: "bg-rust-1",
  setTexture: (texture: string) => {},
  ledColor: "white",
  setLedColor: (color: string) => {},
  showMenu: true,
  setShowMenu: (show: boolean) => {},
});
