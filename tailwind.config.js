/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#9cff93", // Kinetic Green
        "secondary": "#00e3fd", // Electric Blue
        "tertiary": "#fcf9f8",
        "background": "#050505", // Absolute Black
        "surface": "#0e0e0e", // Deep Charcoal
        "surface-medium": "#121212",
        "surface-high": "#1a1a1a",
        "surface-highest": "#242424",
        "on-surface": "#ffffff",
        "on-surface-variant": "#949494",
        "outline": "#2d2d2d",
        "glass-blur": "rgba(10, 10, 10, 0.4)",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #9cff93 0%, #00fc40 100%)",
        "secondary-gradient": "linear-gradient(135deg, #00e3fd 0%, #00d7f0 100%)",
        "glass-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
      },
      boxShadow: {
        "primary-glow": "0 0 20px rgba(156, 255, 147, 0.2)",
        "secondary-glow": "0 0 20px rgba(0, 227, 253, 0.2)",
        "luxury-float": "0 30px 60px rgba(0, 0, 0, 0.6)",
        "luxury-neon": "0 0 40px rgba(156, 255, 147, 0.25)",
        "luxury-box": "0 10px 40px rgba(0, 0, 0, 0.4)",
        "glass-inner": "inset 0 1px 1px rgba(255, 255, 255, 0.05)",
      },
      dropShadow: {
        "luxury": "0 20px 40px rgba(0, 0, 0, 0.8)",
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
        "headline": ["Poppins", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      letterSpacing: {
        "compressed": "-0.04em",
        "tightest": "-0.02em",
        "widest": "0.15em",
      },
      borderRadius: {
        "DEFAULT": "0.75rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
