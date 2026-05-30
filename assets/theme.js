const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const storageKey = "loopkaka-theme";

const getStoredTheme = () => {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
};

const setStoredTheme = (theme) => {
  try {
    localStorage.setItem(storageKey, theme);
  } catch {}
};

const applyTheme = (theme) => {
  const isDark = theme === "dark";
  root.classList.toggle("dark", isDark);
  toggle?.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
};

const initialTheme =
  getStoredTheme() || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

applyTheme(initialTheme);

toggle?.addEventListener("click", () => {
  const nextTheme = root.classList.contains("dark") ? "light" : "dark";
  applyTheme(nextTheme);
  setStoredTheme(nextTheme);
});
