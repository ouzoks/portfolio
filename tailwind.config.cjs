/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#112019",
          100: "#0b1512",
          200: "#08100e",
        },
        mist: {
          50: "#f4fff9",
          100: "#d9f9ea",
          200: "#b7e7cf",
          300: "#8fbea8",
        },
        night: {
          900: "#101a18",
          950: "#07100f",
        },
        ink: {
          700: "#222222",
          800: "#111111",
          900: "#000000",
        },
        tealBrand: {
          500: "#63f5c6",
          600: "#34d399",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "Avenir Next", "Segoe UI", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 24px 50px -24px rgba(99, 245, 198, 0.38)",
      },
      backgroundImage: {
        heroGlow:
          "radial-gradient(circle at 8% 10%, rgba(99, 245, 198, 0.18), transparent 26%), radial-gradient(circle at 88% 0%, rgba(52, 211, 153, 0.14), transparent 30%), radial-gradient(circle at 50% 100%, rgba(99, 245, 198, 0.08), transparent 34%), linear-gradient(180deg, #07100f 0%, #0b1512 48%, #101a18 100%)",
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
