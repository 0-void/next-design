import { useCallback, useEffect } from "react";
import useSWR from "swr";

import { getTheme, setDarkMode, setLightMode } from "../../service/utils/index";
import { themeStorageKey } from "../../service/constants/index";

const useTheme = () => {
  const { data: theme, mutate } = useSWR(themeStorageKey, getTheme);

  const setTheme = useCallback(
    (newTheme) => {
      mutate(newTheme, false);
    },
    [mutate]
  );

  useEffect(() => {
    if (theme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, [theme]);

  return {
    theme,
    setTheme,
    toggleTheme: () => setTheme(!theme || theme === "dark" ? "light" : "dark"),
  };
};

export default useTheme;
