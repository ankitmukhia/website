import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sansita: ["var(--font-sansita)"],
      noto: ["var(--font-noto)"],
      oswald: ["var(--font-oswald)"],
      weather: ["var(--font-marriweather)"],
      greatVibes: ["var(--font-great-vibes)"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightpurple: "#F3BFFE",
        lighterpurple: "#E4B8FF",
        lightpink: "#CAA3FE",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        ".layout-sm": {
          "grid-template-columns": `1fr min(${theme("screens.sm")},100%) 1fr`,
        },
        ".layout-xl": {
          "grid-template-columns": `
	    1fr /**** Flexible left margin *****/ 
	    minmax(auto,${theme("spacing.60")}) /**** Max side padding *****/
	    min(${theme("screens.lg")},100%) /**** Main content, max lg screen *****/
	    minmax(auto,${theme("spacing.60")}) /***** Max side padding ******/
	    1fr` /**** Flexible right margin *****/,
        },
      });
    }),
  ],
} satisfies Config;
