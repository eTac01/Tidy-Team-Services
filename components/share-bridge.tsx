"use client"

import { useEffect } from "react"

export default function ShareBridge() {
  useEffect(() => {
    const originalOpen = window.open

    function safeOpen(url?: string | URL, target?: string, features?: string) {
      try {
        const href = typeof url === "string" ? url : (url?.toString() ?? "")
        // Only special-case WhatsApp; mailto removed per request
        if (href.startsWith("https://wa.me/") || href.startsWith("whatsapp://")) {
          const win = originalOpen.call(window, href, target ?? "_blank", features ?? "noopener,noreferrer")
          if (!win) {
            window.location.href = href
          }
          return win
        }
        return originalOpen.call(window, url as any, target, features)
      } catch {
        // Fallback to same-tab navigation
        if (typeof url === "string") window.location.href = url
        return null
      }
    }

    // @ts-ignore override window.open
    window.open = safeOpen

    return () => {
      // @ts-ignore restore
      window.open = originalOpen
    }
  }, [])

  return null
}
