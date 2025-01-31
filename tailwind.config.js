/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        liter: ["Liter", "serif"],
        "permanent-marker": ['"Permanent Marker"', "serif"],
      },
    },
  },
  plugins: [],
};
