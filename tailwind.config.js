module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "hsl(355, 100%, 74%)",
          100: "hsl(356, 100%, 66%)",
          200: "hsl(208, 49%, 24%)",
        },
        t: "hsl(0, 0%, 100%)",
        footer: "hsl(240, 2%, 79%)",
        bc: "hsl(207, 13%, 34%)",
        fbg: "hsl(240, 10%, 16%)",

        vlr: "hsl(13, 100%, 72%)",
        lr: "hsl(353, 100%, 62%)",

        dgb: "hsl(237, 17%, 21%)",
        ddb: "hsl(237, 23%, 32%)",
      },
    },
  },
  plugins: [],
};
