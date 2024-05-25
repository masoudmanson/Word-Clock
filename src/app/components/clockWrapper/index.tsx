import Image from "next/image";
import React, { useEffect, useState } from "react";
import ClockSkeleton from "../clockSkeleton";
import clsx from "clsx";

type Props = {
  img: string;
  children?: JSX.Element[] | JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  isDarkened?: boolean;
};

export default function ClockWrapper({
  img,
  children,
  style,
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
      style={{
        backgroundColor: "#0e171a",
        backgroundImage: loaded ? `url(${img})` : ``,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        filter: loaded ? "none" : "blur(3px)",
        transition: "filter 0.5s",
        ...style,
      }}
      className={clsx({
        "grid grid-cols-11 justify-items-center items-center md:gap-x-4 gap-x-3 md:gap-y-1 gap-y-0 bg-cover md:p-20 sm:p-12 p-10 shadow-clock": true,
        "animate-pulse relative z-20": !loaded,
        "z-0": loaded
      })}
    >
      <Image src={img} alt={img} width={10} height={10} loading="eager" onLoad={handleLoad} style={{ display: "none" }} />
      {!loaded && <ClockSkeleton />}
      {loaded && children}
    </div>
  );
}