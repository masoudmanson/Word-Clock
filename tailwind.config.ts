import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stone-1': "url('/bg/stone-1.jpg')",
        'stone-2': "url('/bg/stone-2.jpg')",
        'stone-3': "url('/bg/stone-3.jpg')",
        'wood-1': "url('/bg/wood-1.jpg')",
        'wood-2': "url('/bg/wood-2.jpg')",
        'fabric-1': "url('/bg/fabric-1.jpg')",
        'fabric-2': "url('/bg/fabric-2.jpg')",
        'gold-1': "url('/bg/gold-1.jpg')",
        'leather-1': "url('/bg/leather-1.jpg')",
        'concrete-1': "url('/bg/concrete-1.jpg')",
      },
      textShadow: {
        "clock-off": '0px 1px 0px rgba(255, 255, 255, 0.5), 0px -1px 0px rgba(0, 0, 0, 0.9)',
        "clock-on-white": '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 25px #fff, 0 0 40px #fff, 0 0 70px #fff, 0px 1px 0px rgba(255, 255, 255, 0.3), 0px -1px 0px rgba(0, 0, 0, 0.3)',
        "clock-on-yellow": '0 0 5px #ffff88, 0 0 10px #ffff88, 0 0 15px #ffff88, 0 0 25px #ffff88, 0 0 40px #ffff88, 0 0 70px #ffff88, 0px 1px 0px rgba(255, 255, 255, 0.3), 0px -1px 0px rgba(0, 0, 0, 0.3)',
      },
      boxShadow: {
        "corner-led-white": "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 25px #fff, 0 0 40px #fff, 0 0 70px #fff, 0px 1px 0px rgba(255, 255, 255, 0.3), 0px -1px 0px rgba(0, 0, 0, 0.3)",
        "corner-led-yellow": "0 0 5px #ffff88, 0 0 10px #ffff88, 0 0 15px #ffff88, 0 0 25px #ffff88, 0 0 40px #ffff88, 0 0 70px #ffff88, 0px 1px 0px rgba(255, 255, 255, 0.3), 0px -1px 0px rgba(0, 0, 0, 0.3)",
        clock: "0 20px 40px rgba(0, 0, 0, 0.5)"
      },
    },
    fontFamily: {
      "word-clock": ["Word Clock", "sans-serif"],
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: { matchUtilities: any, theme: any }) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
export default config;
