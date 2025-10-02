/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // <- harus pakai extend biar default class tetap aman
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "spin-slow": "spin 6s linear infinite",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "hero-title": "clamp(2.5rem, 5vw, 5rem)",
        "hero-sub": "clamp(1rem, 2vw, 1.5rem)",
        "section-title": "clamp(1.8rem, 3vw, 3rem)",
        body: "1rem",
      },
    },
  },
  plugins: [],
};
