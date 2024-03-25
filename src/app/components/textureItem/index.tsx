"use client";

import { ClockContext } from '@/app/context';
import Image from 'next/image';
import { useContext } from 'react';

interface TextureItemProps {
  texture: string;
  alt: string;
  value: string;
}

const TextureItem = ({ texture, alt, value }: TextureItemProps) => {
  const { setTexture } = useContext(ClockContext);

  return (
    <li 
      className="w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition-all duration-100 cursor-pointer hover:drop-shadow-xl"
      onClick={() => setTexture(value)}
    >
      <Image src={texture} alt={alt} width={32} height={32} />
    </li>
  );
};

export default TextureItem;