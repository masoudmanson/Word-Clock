import { createContext } from "react";

export const ClockContext = createContext({
  texture: "bg-stone-1",
  setTexture: (texture: string) => {},
  ledColor: "#fff",
  setLedColor: (color: string) => {},
});
