"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showDetailServices, setShowDetailServices] = useState(false)
  const [showHomeCleaning, setShowHomeCleaning] = useState(false)
  const [detailServicesClicked, setDetailServicesClicked] = useState(false)
  const [homeCleaningClicked, setHomeCleaningClicked] = useState(false)

  const detailServicesRef = useRef<HTMLDivElement>(null)
  const homeCleaningRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (detailServicesRef.current && !detailServicesRef.current.contains(event.target as Node)) {
        setDetailServicesClicked(false)
        setShowDetailServices(false)
      }
      if (homeCleaningRef.current && !homeCleaningRef.current.contains(event.target as Node)) {
        setHomeCleaningClicked(false)
        setShowHomeCleaning(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (detailServicesClicked) {
      timer = setTimeout(() => {
        setDetailServicesClicked(false)
        setShowDetailServices(false)
      }, 5000)
    }
    return () => clearTimeout(timer)
  }, [detailServicesClicked])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (homeCleaningClicked) {
      timer = setTimeout(() => {
        setHomeCleaningClicked(false)
        setShowHomeCleaning(false)
      }, 5000)
    }
    return () => clearTimeout(timer)
  }, [homeCleaningClicked])

  const handleDetailServicesClick = () => {
    setDetailServicesClicked(true)
    setShowDetailServices(true)
  }

  const handleHomeCleaningClick = () => {
    setHomeCleaningClicked(true)
    setShowHomeCleaning(true)
  }

  const handleMenuOptionClick = (menuType: "detail" | "home") => {
    if (menuType === "detail") {
      setDetailServicesClicked(false)
      setShowDetailServices(false)
    } else {
      setHomeCleaningClicked(false)
      setShowHomeCleaning(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="flex items-center group">
            <div className="relative flex items-center space-x-3">
              <Image
                src="/tidy-team-logo.png"
                alt="Tidy Team - Professional Cleaning Services"
                width={120}
                height={120}
                className="h-12 w-12 md:h-16 md:w-16 object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
              />
              <div className="block">
                <h1 className="text-base md:text-lg font-bold text-foreground leading-tight">Tidy Team</h1>
                <span className="text-xs md:text-sm text-muted-foreground leading-tight">Services</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
              Home
            </Link>

            <div className="relative" ref={detailServicesRef}>
              <button
                className={`flex items-center text-foreground hover:text-primary transition-colors duration-200 focus:outline-none font-medium ${
                  detailServicesClicked ? "text-primary bg-primary/10 px-3 py-1 rounded-lg" : ""
                }`}
                onClick={handleDetailServicesClick}
                onMouseEnter={() => !detailServicesClicked && setShowDetailServices(true)}
                onMouseLeave={() => !detailServicesClicked && setShowDetailServices(false)}
              >
                Detail Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {(showDetailServices || detailServicesClicked) && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 glass border border-border/20 bg-background/95 backdrop-blur-md rounded-lg p-4 shadow-xl z-50"
                  onMouseEnter={() => !detailServicesClicked && setShowDetailServices(true)}
                  onMouseLeave={() => !detailServicesClicked && setShowDetailServices(false)}
                >
                  <div className="space-y-3">
                    <Link
                      href="/services/interior"
                      className="block p-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      onClick={() => handleMenuOptionClick("detail")}
                    >
                      <div className="font-medium">Interior Cleaning</div>
                      <div className="text-sm text-muted-foreground">Deep clean your vehicle's interior</div>
                    </Link>
                    <Link
                      href="/services/exterior"
                      className="block p-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      onClick={() => handleMenuOptionClick("detail")}
                    >
                      <div className="font-medium">Exterior Wash</div>
                      <div className="text-sm text-muted-foreground">Premium exterior cleaning service</div>
                    </Link>
                    <Link
                      href="/services/full-detailing"
                      className="block p-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      onClick={() => handleMenuOptionClick("detail")}
                    >
                      <div className="font-medium">Full Detailing</div>
                      <div className="text-sm text-muted-foreground">Complete interior & exterior service</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/maintenance"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Maintenance Packages
            </Link>

            <div className="relative" ref={homeCleaningRef}>
              <button
                className={`flex items-center text-foreground hover:text-primary transition-colors duration-200 focus:outline-none font-medium ${
                  homeCleaningClicked ? "text-primary bg-primary/10 px-3 py-1 rounded-lg" : ""
                }`}
                onClick={handleHomeCleaningClick}
                onMouseEnter={() => !homeCleaningClicked && setShowHomeCleaning(true)}
                onMouseLeave={() => !homeCleaningClicked && setShowHomeCleaning(false)}
              >
                Home Cleaning <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {(showHomeCleaning || homeCleaningClicked) && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 glass border border-border/20 bg-background/95 backdrop-blur-md rounded-lg p-4 shadow-xl z-50"
                  onMouseEnter={() => !homeCleaningClicked && setShowHomeCleaning(true)}
                  onMouseLeave={() => !homeCleaningClicked && setShowHomeCleaning(false)}
                >
                  <div className="space-y-3">
                    <Link
                      href="/home-cleaning/deep-cleaning"
                      className="block p-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      onClick={() => handleMenuOptionClick("home")}
                    >
                      <div className="font-medium">Deep Cleaning</div>
                      <div className="text-sm text-muted-foreground">Thorough home deep cleaning service</div>
                    </Link>
                    <Link
                      href="/home-cleaning/regular-maintenance"
                      className="block p-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      onClick={() => handleMenuOptionClick("home")}
                    >
                      <div className="font-medium">Regular Maintenance</div>
                      <div className="text-sm text-muted-foreground">Weekly & monthly cleaning plans</div>
                    </Link>
                    <Link
                      href="/home-cleaning/move-in-out"
                      className="block p-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      onClick={() => handleMenuOptionClick("home")}
                    >
                      <div className="font-medium">Move In/Out Cleaning</div>
                      <div className="text-sm text-muted-foreground">Complete move-in/out cleaning</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/education"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Education
            </Link>

            <ThemeToggle />

            <Button
              asChild
              className="neon-glow hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 px-6 py-2 font-semibold"
            >
              <Link href="/book">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass border-t border-border/20 mt-1 rounded-lg p-3">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2">
                <span className="text-sm font-medium text-muted-foreground">Detail Services</span>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/services/interior"
                    className="block text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Interior Cleaning
                  </Link>
                  <Link
                    href="/services/exterior"
                    className="block text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Exterior Wash
                  </Link>
                  <Link
                    href="/services/full-detailing"
                    className="block text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Full Detailing
                  </Link>
                </div>
              </div>
              <Link
                href="/maintenance"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Maintenance Packages
              </Link>
              <div className="space-y-2">
                <span className="text-sm font-medium text-muted-foreground">Home Cleaning</span>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/home-cleaning/deep-cleaning"
                    className="block text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Deep Cleaning
                  </Link>
                  <Link
                    href="/home-cleaning/regular-maintenance"
                    className="block text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Regular Maintenance
                  </Link>
                  <Link
                    href="/home-cleaning/move-in-out"
                    className="block text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Move In/Out Cleaning
                  </Link>
                </div>
              </div>
              <Link
                href="/education"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Education
              </Link>
              <Button asChild className="neon-glow w-full">
                <Link href="/book" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
