/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"],
      },
      colors: {
        beigePrimary: "#EAC696",
        beigeSecondary: "#C8AE7D",
        beigeTertiary: "#765827",
        brown: "#65451F",
        smokeWhite: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
