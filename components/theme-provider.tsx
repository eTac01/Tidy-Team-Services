"use client"

import type * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

// We initialize with defaultTheme and then hydrate from localStorage in useEffect.
// We also guard all browser API usage with typeof window/document checks.
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "tidy-team-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // Apply theme to <html> class list
  function applyTheme(next: Theme) {
    if (typeof document === "undefined") return
    const root = document.documentElement
    root.classList.remove("light", "dark")

    let resolved: "light" | "dark"
    if (next === "system") {
      const prefersDark =
        typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      resolved = prefersDark ? "dark" : "light"
    } else {
      resolved = next
    }

    root.classList.add(resolved)
  }

  // On mount, read persisted theme and apply
  useEffect(() => {
    setMounted(true)
    if (typeof window === "undefined") return

    try {
      const stored = window.localStorage.getItem(storageKey) as Theme | null
      const next = stored ?? defaultTheme
      setTheme(next)
      applyTheme(next)
    } catch {
      // ignore storage errors
      applyTheme(defaultTheme)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Persist and apply when theme changes on client
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return
    applyTheme(theme)
    try {
      window.localStorage.setItem(storageKey, theme)
    } catch {
      // ignore storage errors
    }
  }, [theme, mounted, storageKey])

  const value: ThemeProviderState = {
    theme,
    setTheme: (t: Theme) => {
      setTheme(t)
      // localStorage persistence handled in effect
    },
  }

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

export const useTheme = () => {
  const ctx = useContext(ThemeProviderContext)
  if (ctx === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return ctx
}

export default ThemeProvider
