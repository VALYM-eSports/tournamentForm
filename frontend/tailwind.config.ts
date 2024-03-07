import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./emails/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#662895",
          secondary: "#3b278b",
          accent: "#ff70ac",
          neutral: "#26281c",
          "base-100": "#110b28",
          info: "#075985",
          success: "#4da000",
          warning: "#e50000",
          error: "#ff556b",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
export default config;
