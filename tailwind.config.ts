import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        grayBg: "hsl(0, 0%, 75%)",
        darkViolet: "hsl(257, 27%, 26%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
