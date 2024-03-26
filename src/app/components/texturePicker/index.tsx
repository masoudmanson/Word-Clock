import { useContext } from "react";
import TextureItem from "../textureItem";
import { ClockContext } from "@/app/context";

const TexturePicker = () => {
  const textures = [
    { texture: "/bg/stone-1.jpg", alt: "Stone", value: "bg-stone-1" },
    { texture: "/bg/stone-2.jpg", alt: "Stone", value: "bg-stone-2" },
    { texture: "/bg/stone-3.jpg", alt: "Stone", value: "bg-stone-3" },
    { texture: "/bg/stone-4.jpg", alt: "Stone", value: "bg-stone-4" },
    { texture: "/bg/wood-1.jpg", alt: "Wood", value: "bg-wood-1" },
    { texture: "/bg/wood-2.jpg", alt: "Wood", value: "bg-wood-2" },
    { texture: "/bg/fabric-1.jpg", alt: "Fabric", value: "bg-fabric-1" },
    { texture: "/bg/gold-1.jpg", alt: "Gold", value: "bg-gold-1" },
    { texture: "/bg/leather-1.jpg", alt: "Leather", value: "bg-leather-1" },
    { texture: "/bg/concrete-1.jpg", alt: "Concrete", value: "bg-concrete-1" },
    { texture: "/bg/concrete-2.jpg", alt: "Concrete", value: "bg-concrete-2" },
    { texture: "/bg/rust-1.jpg", alt: "Rust", value: "bg-rust-1" },
    { texture: "/bg/rust-2.jpg", alt: "Rust", value: "bg-rust-2" },
    { texture: "/bg/metal-1.jpg", alt: "Metal", value: "bg-metal-1" },
  ];

  const ledColors = [
    { className: "bg-white", value: "white" },
    { className: "bg-yellow-400", value: "yellow" },
  ];

  const { ledColor, setLedColor } = useContext(ClockContext);

  return (
    <div className="flex justify-center p-3">
      <ul className="grid grid-rows-3 grid-cols-5 md:grid-cols-7 md:grid-rows-2 justify-center p-3 gap-2 border-r border-slate-700">
        {textures.map(({ texture, alt, value }) =>
          <TextureItem 
            key={texture} 
            texture={texture} 
            alt={alt} 
            value={value}
          />
        )}
      </ul>

      <ul className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 justify-center p-3 gap-2">
        {ledColors.map(({ className, value }) =>
          <li
            key={value}
            onClick={() => setLedColor(value)}
            className={`${className} ${ledColor === value ? `border-2 after:content-[''] after:absolute after:rounded-full after:top-0 after:bottom-0 after:left-0 after:right-0 after:justify-center after:items-center after:h-2 after:w-2 after:bg-black/30 after:m-auto` : ``} relative w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition-transform duration-100 cursor-pointer hover:drop-shadow-xl`} 
          ></li>
        )}
      </ul>
    </div>
  );
};

export default TexturePicker;
