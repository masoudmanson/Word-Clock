import { useContext } from "react";
import TextureItem from "../textureItem";
import { ClockContext } from "@/app/context";

const TexturePicker = () => {
  const textures = [
    { texture: "/bg/stone-1.jpg", alt: "Stone", value: "bg-stone-1" },
    { texture: "/bg/stone-2.jpg", alt: "Stone", value: "bg-stone-2" },
    { texture: "/bg/stone-3.jpg", alt: "Stone", value: "bg-stone-3" },
    { texture: "/bg/wood-1.jpg", alt: "Wood", value: "bg-wood-1" },
    { texture: "/bg/wood-2.jpg", alt: "Wood", value: "bg-wood-2" },
    { texture: "/bg/fabric-1.jpg", alt: "Fabric", value: "bg-fabric-1" },
    { texture: "/bg/fabric-2.jpg", alt: "Fabric", value: "bg-fabric-2" },
    { texture: "/bg/gold-1.jpg", alt: "Gold", value: "bg-gold-1" },
    { texture: "/bg/leather-1.jpg", alt: "Leather", value: "bg-leather-1" },
    { texture: "/bg/concrete-1.jpg", alt: "Concrete", value: "bg-concrete-1" },
  ];

  const ledColors = [
    { className: "bg-white", value: "white" },
    { className: "bg-yellow-400", value: "yellow" },
  ];

  const { setLedColor } = useContext(ClockContext);

  return (
    <div className="flex justify-center p-3">
      <ul className="flex justify-center p-3 gap-2 border-r border-slate-700">
        {textures.map(({ texture, alt, value }) =>
          <TextureItem 
            key={texture} 
            texture={texture} 
            alt={alt} 
            value={value}
          />
        )}
      </ul>

      <ul className="flex justify-center p-3 gap-2">
        {ledColors.map(({ className, value }) =>
          <li
            key={value}
            onClick={() => setLedColor(value)}
            className={`${className} w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition-all duration-100 cursor-pointer hover:drop-shadow-xl`} 
          ></li>
        )}
      </ul>
    </div>
  );
};

export default TexturePicker;
