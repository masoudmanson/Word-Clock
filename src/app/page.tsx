"use client";

import { Suspense } from "react";
import Clock from "./components/clock";
import TexturePicker from "./components/texturePicker";
import TexturePickerSkeleton from "./skeletons/texturePickerSkeleton";
import ClockSkeleton from "./skeletons/clockSkeleton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <Suspense fallback={<ClockSkeleton />}>
        <Clock />
      </Suspense>
      <Suspense fallback={<TexturePickerSkeleton />}>
        <TexturePicker />
      </Suspense>
    </main>
  );
}
