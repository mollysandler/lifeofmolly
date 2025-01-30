"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
  isDark: boolean
  hasMounted: boolean
} | null>(null)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [isDark, setIsDark] = useState<boolean>(false)
  const [hasMounted, setHasMounted] = useState<boolean>(false)

  const handleThemeChange = (newTheme: Theme) => {
    const root = window.document.documentElement;
    localStorage.setItem(storageKey, newTheme);
    setTheme(newTheme);

    root.classList.remove("light", "dark");

    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      setIsDark(systemTheme === "dark");
    } else {
      root.classList.add(newTheme);
      setIsDark(newTheme === "dark");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme || defaultTheme;
    handleThemeChange(storedTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === "system") {
        handleThemeChange(theme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    setHasMounted(true);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const value = {
    theme,
    setTheme: handleThemeChange,
    isDark,
    hasMounted
  }

  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}