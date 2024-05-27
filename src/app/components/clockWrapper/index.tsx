"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

type Props = {
  img: string;
  children?: JSX.Element[] | JSX.Element;
  className?: string;
};

export default function ClockWrapper({
  img,
  children,
}: Props) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    setLoaded(false);
  }, [img]);

  return (
    <div
      className={clsx({
        "grid grid-cols-11 justify-items-center items-center md:gap-x-4 gap-x-3 md:gap-y-1 gap-y-0 bg-cover md:p-20 sm:p-12 p-10 shadow-clock bg-zinc-800": true,
        "animate-pulse relative z-20": !loaded,
        "z-0": loaded
      })}
    >
      <Image src={img} alt={img} width={1000} height={1000} loading="eager" onLoad={handleLoad}
        className="w-full h-full absolute top-0 left-0"
      />
      {children}
    </div>
  );
}