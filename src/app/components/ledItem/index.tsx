"use client";

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface LedItemProps {
  className: string;
  value: string;
}

const LedItem = ({ className, value }: LedItemProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);
  const ledColor = params.get('led') || "white";
  const isActive = ledColor === value;

  params.set('led', value);

  const LedItemClass = clsx({
    "relative w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition-transform duration-100 cursor-pointer hover:drop-shadow-xl ": true,
    "border-2 after:content-[''] after:absolute after:rounded-full after:top-0 after:bottom-0 after:left-0 after:right-0 after:justify-center after:items-center after:h-2 after:w-2 after:bg-black/30 after:m-auto": isActive
  });

  return (
    <Link href={`${pathname}?${params.toString()}`}>
      <li
        key={value}
        className={`${className} ${LedItemClass}`}
      ></li>
    </Link>
  );
};

export default LedItem;