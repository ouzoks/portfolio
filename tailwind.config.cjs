/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#f7fff7",
          100: "#ecfff0",
          200: "#d9ffe2",
        },
        ink: {
          700: "#222222",
          800: "#111111",
          900: "#000000",
        },
        tealBrand: {
          500: "#22c55e",
          600: "#16a34a",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "Avenir Next", "Segoe UI", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(22, 163, 74, 0.4)",
      },
      backgroundImage: {
        heroGlow:
          "radial-gradient(circle at 8% 10%, rgba(34, 197, 94, 0.35), transparent 24%), radial-gradient(circle at 88% 0%, rgba(22, 163, 74, 0.26), transparent 30%), linear-gradient(180deg, #ecfff0 0%, #ffffff 100%)",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
