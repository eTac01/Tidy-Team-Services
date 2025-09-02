// new component to reset scroll position o```tsx file="components/scroll-to-top.tsx"
"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Smoothly scroll to top whenever the route changes
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [pathname])

  return null
}
