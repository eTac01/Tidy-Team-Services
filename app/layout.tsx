import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import ClientOnly from "@/components/client-only"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "The Tidy Team Services - Shine Beyond Limits",
  description:
    "Premium car detailing and home cleaning services. Professional, reliable, and futuristic approach to keeping your vehicles and spaces pristine.",
  generator: "v0.app",
  keywords: ["car detailing", "home cleaning", "ceramic coating", "paint protection", "premium services"],
  openGraph: {
    title: "The Tidy Team Services - Shine Beyond Limits",
    description: "Premium car detailing and home cleaning services with a futuristic approach.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${dmSans.style.fontFamily};
  --font-sans: ${dmSans.variable};
}
        `}</style>
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ClientOnly>
          <ThemeProvider defaultTheme="light" storageKey="tidy-team-theme">
            <Navigation />
            <ScrollToTop />
            <main className="pt-16">{children}</main>
            <Footer />
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  )
}
