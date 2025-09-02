import { NextResponse, type NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { serviceType, bookingData } = body || {}

    // Build a plain text summary
    const summaryLines = [
      `New Booking - ${new Date().toLocaleString()}`,
      `Type: ${serviceType === "car" ? "Car Detailing" : "House Cleaning"}`,
      `Service: ${bookingData?.service || "-"}`,
      `Package: ${bookingData?.package || "-"}`,
      `Date: ${bookingData?.date || "-"}`,
      `Time: ${bookingData?.time || "-"}`,
      serviceType === "car"
        ? `Vehicle: ${bookingData?.vehicle?.year || ""} ${bookingData?.vehicle?.make || ""} ${bookingData?.vehicle?.model || ""} ${bookingData?.vehicle?.color ? `(${bookingData.vehicle.color})` : ""}`.trim()
        : `Property: ${bookingData?.property?.type || "-"} | Size: ${bookingData?.property?.size || "-"} | Rooms: ${bookingData?.property?.rooms || "-"}`,
      `Name: ${bookingData?.customer?.name || "-"}`,
      `Email: ${bookingData?.customer?.email || "-"}`,
      `Phone: ${bookingData?.customer?.phone || "-"}`,
      `Address: ${bookingData?.customer?.address || "-"}`,
      `Notes: ${bookingData?.notes || "-"}`,
    ]
    const text = summaryLines.join("\n")

    // 1) Email via SMTP (Nodemailer)
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT ? Number.parseInt(process.env.SMTP_PORT) : undefined
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const smtpSecure = process.env.SMTP_SECURE === "true"

    if (smtpHost && smtpPort && smtpUser && smtpPass) {
      const nodemailer = await import("nodemailer")
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: { user: smtpUser, pass: smtpPass },
      })

      await transporter.sendMail({
        from: `"Tidy Team Booking" <${smtpUser}>`,
        to: "tidyteamco.uk@gmail.com",
        subject: "New Booking - Tidy Team",
        text,
      })
    }

    // 2) WhatsApp via Cloud API (optional)
    const waToken = process.env.WHATSAPP_TOKEN
    const waPhoneId = process.env.WHATSAPP_PHONE_NUMBER_ID
    const recipient = "447349428794" // +44 7349428794

    if (waToken && waPhoneId) {
      const waRes = await fetch(`https://graph.facebook.com/v17.0/${waPhoneId}/messages`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${waToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: recipient,
          type: "text",
          text: { body: `Tidy Team Booking\n\n${text}` },
        }),
      })
      if (!waRes.ok) {
        const errText = await waRes.text()
        console.log("[v0] WhatsApp send failed:", errText)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    console.log("[v0] booking route error:", e?.message)
    return NextResponse.json({ ok: false, error: "Failed to process booking" }, { status: 500 })
  }
}
