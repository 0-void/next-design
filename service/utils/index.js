import { themeStorageKey } from "../constants/index";

const isServer = typeof window === "undefined";

export const getTheme = () => {
  if (isServer) return "dark";
  return localStorage.getItem(themeStorageKey) || "dark";
};

export const setLightMode = () => {
  try {
    localStorage.setItem(themeStorageKey, "light");
    document.documentElement.classList.add("light");
  } catch (err) {
    console.error(err);
  }
};

export const setDarkMode = () => {
  try {
    localStorage.setItem(themeStorageKey, "dark");
    document.documentElement.classList.remove("light");
  } catch (err) {
    console.error(err);
  }
};

// export const disableAnimation = () => {
//   const css = document.createElement("style");
//   css.type = "text/css";
//   css.appendChild(
//     document.createTextNode(
//       `* {
//         -webkit-transition: none !important;
//         -moz-transition: none !important;
//         -o-transition: none !important;
//         -ms-transition: none !important;
//         transition: none !important;
//       }`
//     )
//   );
//   document.head.appendChild(css);

//   return () => {
//     // Force restyle
//     (() => window.getComputedStyle(css).opacity)();
//     document.head.removeChild(css);
//   };
// };

export const getThemeValues = (theme, colorness) => {
  if (theme === "light") {
    return `bg-black text-gray-${colorness} `;
  } else {
    return `bg-white text-gray-${colorness} `;
  }
};
