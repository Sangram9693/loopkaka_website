window.tailwind = window.tailwind || {};
window.tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#101828",
        paper: "#f8fafc",
        loop: {
          teal: "#0891b2",
          green: "#16a34a",
          amber: "#f59e0b",
          coral: "#f97362",
          plum: "#7c3aed",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.12)",
      },
    },
  },
};
