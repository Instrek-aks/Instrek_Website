/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EA6220",
        secondary: "#2A2342",
        accent: "#ff724a",
        dark: "#0f0f0f",
        "dark-secondary": "#1a1a2e",
        "dark-tertiary": "#121212",
        background: "#0f0f0f",
        "card-bg": "#1a1a2e",
        foreground: "#ffffff",
        "muted-foreground": "#9ca3af",
        border: "#2d2d3d",
      },
      screens: {
        xs: "475px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      animation: {
        "scroll-left": "scroll-left 40s linear infinite",
        "scroll-right": "scroll-right 40s linear infinite",
        scroll: "scroll 30s linear infinite",
        "fade-in": "fadeIn 0.3s ease-in",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      fontFamily: {
        sans: ["PP Neue Montreal", "sans-serif"],
        heading: ["PP Neue Montreal", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #EA6220 0%, #ff724a 100%)",
        "gradient-dark": "linear-gradient(135deg, #2A2342 0%, #0f2027 100%)",
        "gradient-card": "linear-gradient(135deg, #1a1a2e 0%, #121212 100%)",
      },
    },
  },
  plugins: [],
};
