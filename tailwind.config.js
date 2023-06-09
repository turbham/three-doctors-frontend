/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        VeryLightPink: "#FFF6EE",
        DarkJungleGreen: "#1C1D22",
        LightGrey: "#D9D9D9",
        ShamrockGreen: "#009F56",
        GreyCloud: "#B6B6B6",
        BrownBramble: "#5F2301",
        StarDust: "#9E9E9E",
        MistBlue: "#6E7079",
        DavyGrey: "#53545C",
        OlsoGrey: "#8B8D97",
        SilkBlue: "#4E85C5",
        BalticSea: "#2C2D33",
        PaleRose: "#FAC4C3",
        GreySuit: "#bec0ca",
        ShamrockGreen: "#009F56",
        Asphalt: "#120A07",
        PaleOrange: "#FAA551",
        Sandrift: "#AF9181",
        LightPeach: "#FFD8B5",
        GreyChateau: "#A6A8B1",
        DebianRed: "#D01344",
        PaleRose: "#FAC4C3",
        BeanRed: "#F2634C",
        RoseBud: "#F9B1A5",
        OlsoGrey: "#8D8E90",
        PaleTeal: "#80CFAB",
        
        Grey: "#909090",
        Platinum: "#E4E4E4",
        SpunPearl: "#AEA9B4",
        AquaHaze: "#F1F3F9",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
