import { ChevronDown } from "../components/icons";

export default function TexturePickerSkeleton() {
  return (
    <div className="relative flex flex-col w-full animate-pulse">
      <div className="transition-all flex justify-center p-3">
        <ul className="grid grid-rows-3 grid-cols-5 md:grid-cols-7 md:grid-rows-2 justify-center p-3 gap-2 border-r border-zinc-800">
          {[...Array(14).fill("")].map((item, index) =>
            <div
              key={index}
              className="w-8 h-8 rounded-full bg-zinc-800"
            />
          )}
        </ul>

        <ul className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 justify-center p-3 gap-2">
          <div className="w-8 h-8 rounded-full bg-zinc-800" />
          <div className="w-8 h-8 rounded-full bg-zinc-800" />
        </ul>
      </div>
      <div className="-bottom-2.5 m-auto w-full absolute flex justify-center align-middle text-zinc-800 text-sm">
        {ChevronDown}
      </div>
    </div>
  );
}