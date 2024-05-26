"use client";

import { ClockContext } from '@/app/context';
import clsx from 'clsx';
import Image from 'next/image';
import { useContext, useState } from 'react';

interface TextureItemProps {
  texture: string;
  alt: string;
  value: string;
}

const TextureItem = ({ texture: textureImage, alt, value }: TextureItemProps) => {
  const { texture, setTexture } = useContext(ClockContext);
  const isActive = texture === value;

  const TextureItemClass = clsx({
    "relative w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition-all duration-100 cursor-pointer hover:drop-shadow-xl": true,
    "border-2 after:content-[''] after:absolute after:rounded-full after:top-0 after:bottom-0 after:left-0 after:right-0 after:justify-center after:items-center after:h-2 after:w-2 after:bg-black/30 after:m-auto": isActive
  });

  return (
    <li
      className={TextureItemClass}
      onClick={() => setTexture(value)}
    >
      <Image
        src={textureImage}
        alt={alt}
        width={32}
        height={32}
        loading="lazy"
        className={`rounded-full bg-zinc-800`}
      />
    </li>
  );
};

export default TextureItem;