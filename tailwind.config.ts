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
      keyframes: {
        "clock-top-left": {
          "0%": {
            backgroundColor: "#fff",
            boxShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 25px #fff, 0 0 40px #fff, 0 0 70px #fff, 0px 1px 0px rgba(255, 255, 255, 0.3), 0px -1px 0px rgba(0, 0, 0, 0.3), 0px 1px 0px rgba(255, 255, 255, 0.2), 0px -1px 0px rgba(0, 0, 0, 0.8)"
          },
          "25%, 100%": {
            backgroundColor: "rgba(0, 0, 0, .4)",
            boxShadow: "0px 1px 0px rgba(255, 255, 255, 0.2), 0px -1px 0px rgba(0, 0, 0, 0.8)"
          },
        },
        "clock-top-right": {
          "0%, 24%": {
            backgroundColor: "rgba(0, 0, 0, .4)",
            boxShadow: "0px 1px 0px rgba(255, 255, 255, 0.2), 0px -1px 0px rgba(0, 0, 0, 0.8)"
          },
          "25%": {
            backgroundColor: "#fff",
            boxShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 25px #fff, 0 0 40px #fff, 0 0 70px #fff, 0px 1px 0px rgba(255, 255, 255, 0.3), 0px -1px 0px rgba(0, 0, 0, 0.3), 0px 1px 0px rgba(255, 255, 255, 0.2), 0px -1px 0px rgba(0, 0, 0, 0.8)"
          },
          "50%, 100%": {
            backgroundColor: "rgba(0, 0, 0, .4)",
            boxShadow: "0px 1px 0px rgba(255, 255, 255, 0.2), 0px -1px 0px rgba(0, 0, 0, 0.8)"
          },
        },
        "clock-bottom-right": {
          "0%, 49%": {
            backgroundColor: "rgba(0, 0, 0, .4)",
            boxShadow: "0px 1px 0px rgba(255, 255, 255, 0.2), 0px -1px 0px rgba(0, 0, 0, 0.8)"
          },
          "50%": {
            backgroundColor: "#fff",
            boxShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 25px #fff, 0 0 40px #fff, 0 0 70px #fff, 0px 1px 0px rgba(255, 255, 255, 0.3), 0px -1px 0px rgba(0, 0, 0, 0.3), 0px 1px 0px rgba(255, 255, 255, 0.2), 0px -1px 0px rgba(0, 0, 0, 0.8)"
          },
          "75%, 100%": {
            backgroundColor: "rgba(0, 0, 0, .4)",
            boxShadow: "0px 1px 0px rgba(255, 255, 255, 0.2), 0px -1px 0px rgba(0, 0, 0, 0.8)"
          },
        },
        "clock-bottom-left": {
          "0%, 74%": {
            backgroundColor: "rgba(0, 0, 0, .4)",
            boxShadow: "0px 1px 0px rgba(255, 255, 255, 0.2), 0px -1px 0px rgba(0, 0, 0, 0.8)"
          },
          "75%": {
            backgroundColor: "#fff",
            boxShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 25px #fff, 0 0 40px #fff, 0 0 70px #fff, 0px 1px 0px rgba(255, 255, 255, 0.3), 0px -1px 0px rgba(0, 0, 0, 0.3), 0px 1px 0px rgba(255, 255, 255, 0.2), 0px -1px 0px rgba(0, 0, 0, 0.8)"
          },
          "100%": {
            backgroundColor: "rgba(0, 0, 0, .4)",
            boxShadow: "0px 1px 0px rgba(255, 255, 255, 0.2), 0px -1px 0px rgba(0, 0, 0, 0.8)"
          },
        }
      },
      animation: {
        "clock-top-left": "clock-top-left 4s ease-in-out infinite",
        "clock-top-right": "clock-top-right 4s ease-in-out infinite",
        "clock-bottom-right": "clock-bottom-right 4s ease-in-out infinite",
        "clock-bottom-left": "clock-bottom-left 4s ease-in-out infinite",
      },
      backgroundImage: {
        'stone-1': "url('/bg/stone-1.jpg')",
        'stone-2': "url('/bg/stone-2.jpg')",
        'stone-3': "url('/bg/stone-3.jpg')",
        'stone-4': "url('/bg/stone-4.jpg')",
        'wood-1': "url('/bg/wood-1.jpg')",
        'wood-2': "url('/bg/wood-2.jpg')",
        'fabric-1': "url('/bg/fabric-1.jpg')",
        'gold-1': "url('/bg/gold-1.jpg')",
        'leather-1': "url('/bg/leather-1.jpg')",
        'concrete-1': "url('/bg/concrete-1.jpg')",
        'concrete-2': "url('/bg/concrete-2.jpg')",
        'rust-1': "url('/bg/rust-1.jpg')",
        'rust-2': "url('/bg/rust-2.jpg')",
        'metal-1': "url('/bg/metal-1.jpg')",
      },
      textShadow: {
        "clock-off": '0px 1px 0px rgba(255, 255, 255, 0.2), 0px -1px 0px rgba(0, 0, 0, 0.8)',
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
