import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      scale: {
        "400": "4.00",
        "300": "3.00",
      },
      colors: {
        primary: "#000000", // Texto principal, ícones, etc.
        secondary: "#F07A0E", // Botões principais, links, etc.
        accent: "#F01A10", // Alertas, notificações, etc.
        midGray: "#4D4D4D", // Fundos neutros intermediários.
        neutralGray: "#B3B3B3", // Fundos de componentes, bordas leves.
        softOrange: "#D96C3E", // Hover e variações mais suaves de laranja.
        softRed: "#D24B47", // Hover e variações mais suaves de vermelho.
        softWhite: "#F5F5F5", // Fundos claros suavizados, menos contraste.
      },
      spacing: {
        "4": "4px",
        "8": "8px",
        "12": "12px",
        "16": "16px",
        "24": "24px",
        "32": "32px",
        "48": "48px",
        "64": "64px",
        "96": "96px",
        "50": "12.5rem", // 200px
        "75": "18.75rem", // 300px
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
      },
      height: {
        btn: "48px",
        "btn-secondary": "40px",
        input: "40px",
        card: "200px",
      },
      width: {
        card: "300px",
        btn: "120px",
      },
      padding: {
        sm: "8px",
        md: "16px",
        lg: "24px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      extend: {
        screens: {
          "2xl": "1536px",
        },
      },
    },
  },
} satisfies Config;

export default config;
