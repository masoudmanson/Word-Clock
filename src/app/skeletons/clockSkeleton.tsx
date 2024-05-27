import { clockLayout } from "../util/clockLayout";

export default function ClockSkeleton() {
  return (
    <div className="relative m-auto animate-pulse">
      <div className="grid grid-cols-11 justify-items-center items-center md:gap-x-4 gap-x-3 md:gap-y-1 gap-y-0 bg-cover md:p-20 sm:p-12 p-10 bg-zinc-800 select-none">
        <>
          {
            clockLayout.map((row) => {
              return row.split("").map((char, index) => {
                return (
                  <span key={index} className="md:text-3xl sm:text-xl font-word-clock text-black/30">
                    {char}
                  </span>
                );
              })
            })
          }
        </>
      </div>
    </div>
  );
}