"use client";

import { useState } from "react";
import TextureItem from "../textureItem";
import { ChevronDown, ChevronUp } from "../icons";
import clsx from "clsx";
import { Textures } from "@/app/util/textures";
import LedItem from "../ledItem";
import { LedColors } from "@/app/util/leds";

export default function TexturePicker() {
  const [showMenu, setShowMenu] = useState(true);

  const TexturePickerWrapperClass = clsx({
    "transition-all flex justify-center p-3": true,
    "opacity-1 h-full": showMenu,
    "opacity-0 h-0": !showMenu,
  });

  return (
    <div className="relative flex flex-col w-full">
      <div className={TexturePickerWrapperClass}>
        <ul className="grid grid-rows-3 grid-cols-5 md:grid-cols-7 md:grid-rows-2 justify-center p-3 gap-2 border-r border-slate-700">
          {Textures.map(({ texture, alt, value }) =>
            <TextureItem
              key={texture}
              texture={texture}
              alt={alt}
              value={value}
            />
          )}
        </ul>

        <ul className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 justify-center p-3 gap-2">
          {LedColors.map(({ className, value }) =>
            <LedItem
              key={value}
              className={className}
              value={value}
            />
          )}
        </ul>
      </div>
      <div onClick={() => setShowMenu(!showMenu)} className="-bottom-2.5 m-auto w-full absolute flex justify-center align-middle text-slate-700 text-sm cursor-pointer hover:animate-bounce">
        {showMenu ? ChevronDown : ChevronUp}
      </div>
    </div>
  );
};
