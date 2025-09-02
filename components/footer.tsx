"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

const RedditIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.249-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
)

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M13 3h3a6 6 0 0 0 6 6v3a9 9 0 0 1-6-2v7.5A6.5 6.5 0 1 1 9.5 11c.4 0 .9.1 1.3.2V15a2.5 2.5 0 1 0 0 5A2.5 2.5 0 0 0 13 17.5V3z" />
  </svg>
)

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border mt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center lg:text-left">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-5 sm:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="flex flex-col items-center lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-4">
              <Link href="/" className="hover:scale-105 transition-transform duration-300 group">
                <div className="relative">
                  <Image
                    src="/tidy-team-logo.png"
                    alt="Tidy Team Logo"
                    width={64}
                    height={64}
                    className="sm:w-20 sm:h-20 drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                  />
                </div>
              </Link>
              <div className="text-center lg:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">The Tidy Team</h3>
                <p className="text-primary font-semibold text-sm sm:text-base">Shine Beyond Limits</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
              Professional car detailing and home cleaning services that exceed expectations. We bring the shine to your
              vehicles and homes with cutting-edge techniques and premium care.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4 sm:space-y-5 flex flex-col items-center lg:items-start">
            <h4 className="text-base sm:text-lg font-bold text-foreground relative inline-block">
              Our Services
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary/50"></div>
            </h4>
            <div className="space-y-2 sm:space-y-3 flex flex-col items-center lg:items-start">
              <Link
                href="/services/interior"
                className="block text-muted-foreground hover:text-primary transition-all duration-300 text-sm cursor-pointer hover:translate-x-1 group"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-primary group-hover:scale-110 transition-transform">→</span>
                  <span>Interior Cleaning</span>
                </span>
              </Link>
              <Link
                href="/services/exterior"
                className="block text-muted-foreground hover:text-primary transition-all duration-300 text-sm cursor-pointer hover:translate-x-1 group"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-primary group-hover:scale-110 transition-transform">→</span>
                  <span>Exterior Wash</span>
                </span>
              </Link>
              <Link
                href="/services/full-detailing"
                className="block text-muted-foreground hover:text-primary transition-all duration-300 text-sm cursor-pointer hover:translate-x-1 group"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-primary group-hover:scale-110 transition-transform">→</span>
                  <span>Full Detailing</span>
                </span>
              </Link>
              <Link
                href="/home-cleaning/deep-cleaning"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer hover:translate-x-1 group"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-primary group-hover:scale-110 transition-transform">→</span>
                  <span>Home Deep Cleaning</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-5 flex flex-col items-center lg:items-start">
            <h4 className="text-base sm:text-lg font-bold text-foreground relative inline-block">
              Contact Us
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary/50"></div>
            </h4>
            <div className="space-y-3 sm:space-y-4 flex flex-col items-center lg:items-start">
              <span
                aria-disabled="true"
                className="flex items-center space-x-3 text-muted-foreground select-text opacity-90"
              >
                <span className="p-2 rounded-full bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </span>
                <span className="text-sm font-medium">+44 7349 428754</span>
              </span>
              <span
                aria-disabled="true"
                className="flex items-center space-x-3 text-muted-foreground pointer-events-none select-text opacity-90"
              >
                <span className="p-2 rounded-full bg-primary/10 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </span>
                <span className="text-sm font-medium">tidyteamco.uk@gmail.com</span>
              </span>
              <span
                aria-disabled="true"
                className="flex items-center space-x-3 text-muted-foreground select-text opacity-90"
              >
                <span className="p-2 rounded-full bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </span>
                <span className="text-sm font-medium text-center lg:text-left">123 Clean Street, City, ST 12345</span>
              </span>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="space-y-4 sm:space-y-5 flex flex-col items-center lg:items-start">
            <h4 className="text-base sm:text-lg font-bold text-foreground relative inline-block">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary/50"></div>
            </h4>
            <div className="space-y-2 sm:space-y-3 flex flex-col items-center lg:items-start">
              <Link
                href="/book"
                className="block text-muted-foreground hover:text-primary transition-all duration-300 text-sm cursor-pointer hover:translate-x-1 group"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-primary group-hover:scale-110 transition-transform">→</span>
                  <span>Book Now</span>
                </span>
              </Link>
              <Link
                href="/maintenance"
                className="block text-muted-foreground hover:text-primary transition-all duration-300 text-sm cursor-pointer hover:translate-x-1 group"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-primary group-hover:scale-110 transition-transform">→</span>
                  <span>Maintenance Plans</span>
                </span>
              </Link>
              <Link
                href="/education"
                className="block text-muted-foreground hover:text-primary transition-all duration-300 text-sm cursor-pointer hover:translate-x-1 group"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-primary group-hover:scale-110 transition-transform">→</span>
                  <span>Education Center</span>
                </span>
              </Link>
            </div>

            <div className="pt-3 sm:pt-4 flex flex-col items-center lg:items-start">
              <h5 className="text-sm sm:text-base font-bold text-foreground mb-3 sm:mb-4">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/share/1AkYFtJ5xH/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer hover:scale-110 p-2 rounded-full bg-secondary hover:bg-primary/10 border border-border hover:border-primary/30"
                  aria-label="Visit us on Facebook"
                >
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@thetidyteam?_t=ZS-8zKztyOxL9d&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer hover:scale-110 p-2 rounded-full bg-secondary hover:bg-primary/10 border border-border hover:border-primary/30"
                  aria-label="Visit us on TikTok"
                >
                  <TikTokIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a
                  href="https://www.instagram.com/tidy_team925?igsh=eWx4Y2h6MmFvb2hj&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer hover:scale-110 p-2 rounded-full bg-secondary hover:bg-primary/10 border border-border hover:border-primary/30"
                  aria-label="Visit us on Instagram"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a
                  href="https://reddit.com/r/tidyteam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer hover:scale-110 p-2 rounded-full bg-secondary hover:bg-primary/10 border border-border hover:border-primary/30"
                  aria-label="Visit us on Reddit"
                >
                  <RedditIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 sm:mt-12 pt-6 sm:pt-8 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm leading-relaxed">
              © 2024 The Tidy Team Services. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-3">
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors text-sm font-medium text-muted-foreground"
              >
                Privacy Policy
              </Link>
              <span className="text-muted-foreground/60 hidden sm:inline">•</span>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors text-sm font-medium text-muted-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
