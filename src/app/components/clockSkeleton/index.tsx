"use client";

import { useState } from "react";
import { clockLayout } from "@/app/util/clockLayout";

const ClockSkeleton = () => {
  const [clockText] = useState<(string | boolean)[][][]>(clockLayout.map((row) =>
    row.split("").map((char) => [char, false])
  ));

  return (clockText?.map(row => {
    return row.map(([char], index) => {
      return (
        <span key={index} className={`md:text-3xl sm:text-xl font-word-clock`}>
          {char}
        </span>
      );
    })
  })
  );
};

export default ClockSkeleton;