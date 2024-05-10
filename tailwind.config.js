/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightBlue: "hsl(220, 98%, 61%)",
        checkRigth: "hsl(192, 100%, 67%) ",
        checkLeft: "hsl(280, 87%, 65%)",
        VeryDarkBlue: "hsl(235, 21%, 11%)",
        VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        LightGrayishBlue: "hsl(234, 39%, 85%)",
        LightGrayishBluehover: "hsl(236, 33%, 92%)",
        DarkGrayishBlue: "hsl(234, 11%, 52%)",
        VeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
        VeryDarkGrayishBlue: "hsl(237, 14%, 26%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
        VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
        LightGrayishBlue: "hsl(233, 11%, 84%)",
        DarkGrayishBlue: " hsl(236, 9%, 61%)",
        VeryDarkGrayishBlue: "hsl(235, 19%, 35%)",
      },
      fontFamily: {
        body: ["Josefin Sans"],
      },
    },
  },
  plugins: [],
};
