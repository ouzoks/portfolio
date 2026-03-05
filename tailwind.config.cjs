/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#f3fff4",
          100: "#e6fbe7",
          200: "#d2f5d5",
        },
        ink: {
          700: "#222222",
          800: "#111111",
          900: "#000000",
        },
        tealBrand: {
          500: "#2f9e44",
          600: "#1f7a34",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "Avenir Next", "Segoe UI", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(31, 122, 52, 0.35)",
      },
      backgroundImage: {
        heroGlow:
          "radial-gradient(circle at 8% 10%, rgba(47, 158, 68, 0.18), transparent 22%), radial-gradient(circle at 88% 0%, rgba(31, 122, 52, 0.12), transparent 24%), linear-gradient(180deg, #f3fff4 0%, #ffffff 100%)",
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
