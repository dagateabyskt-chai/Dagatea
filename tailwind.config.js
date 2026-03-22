/** @type {import('tailwindcss').Config} */
exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class", // better control for Next.js

  plugins: [],
};

/*
theme: {
    extend: {
      // ✅ Keep only what you actually use
      colors: {
        primary: "#69481d",
        secondary: "#f6eee0",
      },

      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },

      // ⚠️ Avoid too many custom shadows (heavy CSS)
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.1)",
      },

      // ⚠️ Keep animations minimal
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },

      // Optional: spacing scale (only if needed)
      maxWidth: {
        480: "1920px",
      },
    },
  },
*/