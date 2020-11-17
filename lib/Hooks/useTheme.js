import { useCallback, useEffect } from "react";
import useSWR from "swr";

import { getTheme, setDarkMode, setLightMode } from "../../service/utils/index";
import { themeStorageKey, DARK, LIGHT } from "../../service/constants/index";

const darkThemeCssProperties = {
  background: "bg-black",
  textColor: "text-gray-400",
  iconFill: "white",
  borderColor: "border-gray-600",
  color: "white",
};

const lightThemeCssProperties = {
  background: "bg-white",
  textColor: "text-gray-700",
  iconFill: "black",
  borderColor: "border-gray-600",
  color: "black",
};

const useTheme = () => {
  const { data: theme, mutate } = useSWR(themeStorageKey, getTheme);

  const setTheme = useCallback(
    (newTheme) => {
      mutate(newTheme, false);
    },
    [mutate]
  );

  useEffect(() => {
    if (theme === DARK) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, [theme]);

  return {
    theme,
    setTheme,
    toggleTheme() {
      setTheme(!theme || theme === DARK ? LIGHT : DARK);
    },
    cssProperties() {
      return theme === DARK ? darkThemeCssProperties : lightThemeCssProperties;
    },
  };
};

export default useTheme;
