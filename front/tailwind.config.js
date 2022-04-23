module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["corporate"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
