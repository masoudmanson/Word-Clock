"use client";

import Clock from "./components/clock";
import TexturePicker from "./components/texturePicker";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <Clock />
      <TexturePicker />
    </main>
  );
}
