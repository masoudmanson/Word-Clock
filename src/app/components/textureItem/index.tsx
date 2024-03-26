"use client";

import { ClockContext } from '@/app/context';
import Image from 'next/image';
import { useContext } from 'react';

interface TextureItemProps {
  texture: string;
  alt: string;
  value: string;
}

const TextureItem = ({ texture: textureImage, alt, value }: TextureItemProps) => {
  const { texture, setTexture } = useContext(ClockContext);

  const isActive = texture === value;

  return (
    <li 
      className={`${isActive ? `border-2  after:content-[''] after:absolute after:rounded-full after:top-0 after:bottom-0 after:left-0 after:right-0 after:justify-center after:items-center after:h-2 after:w-2 after:bg-black/30 after:m-auto`: ``} relative w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition-all duration-100 cursor-pointer hover:drop-shadow-xl`}
      onClick={() => setTexture(value)}
    >
      <Image src={textureImage} alt={alt} width={32} height={32} />
    </li>
  );
};

export default TextureItem;