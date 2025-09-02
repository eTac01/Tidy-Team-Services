"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

type BookingDetails = Record<string, string | number | undefined>

function buildWhatsappText(details: BookingDetails) {
  const lines: string[] = []
  const push = (label: string, key: string) => {
    const v = details[key]
    if (v !== undefined && String(v).trim() !== "") lines.push(`${label}: ${v}`)
  }

  push("Name", "name")
  push("Phone", "phone")
  push("Email", "email") // harmless if absent; not used for mail
  push("Service", "service")
  push("Package", "package")
  push("Vehicle Size", "vehicleSize")
  push("Date", "date")
  push("Time", "time")
  push("Address", "address")
  push("Notes", "notes")

  const header = "New Booking Details"
  const body = [header, "", ...lines].join("\n")
  return encodeURIComponent(body)
}

export function openWhatsAppShare(details: BookingDetails, businessPhone: string) {
  const text = buildWhatsappText(details)
  // WhatsApp expects phone in international format without spaces or plus sign in URL path
  const cleaned = businessPhone.replace(/[^\d]/g, "")
  const url = `https://wa.me/${cleaned}?text=${text}`

  // Try to open in a new tab; if blocked, navigate same-tab
  const win = window.open(url, "_blank", "noopener,noreferrer")
  if (!win) {
    window.location.href = url
  }
}

// Default UI component (WhatsApp only)
export default function BookingShare(props: {
  businessPhone?: string
  details?: BookingDetails
  className?: string
  title?: string
  ctaLabel?: string
}) {
  const {
    businessPhone = "+44 7349428794",
    details = {},
    className,
    title = "Share Booking",
    ctaLabel = "Send via WhatsApp",
  } = props

  const onShare = React.useCallback(() => {
    openWhatsAppShare(details, businessPhone)
  }, [details, businessPhone])

  return (
    <div className={className}>
      <div className="mb-2 text-sm font-medium text-muted-foreground">{title}</div>
      <div className="flex items-center gap-2">
        <Button onClick={onShare} className="bg-green-600 text-white hover:bg-green-700">
          {ctaLabel}
        </Button>
        {/* Email option intentionally removed */}
      </div>
    </div>
  )
}

// Expose a global helper if prior code calls window.openBookingShare(...)
declare global {
  interface Window {
    openBookingShare?: (details: BookingDetails) => void
  }
}

if (typeof window !== "undefined") {
  // Default business number; adjust here if you want a single source of truth
  const DEFAULT_PHONE = "+44 7349428794"
  window.openBookingShare = (details: BookingDetails) => openWhatsAppShare(details, DEFAULT_PHONE)
}
