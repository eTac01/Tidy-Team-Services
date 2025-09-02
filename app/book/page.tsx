"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Car, User, CheckCircle, CreditCard, Home, Building } from "lucide-react"
import Navigation from "@/components/navigation"

export default function BookPage() {
  const [step, setStep] = useState(1)
  const [showSharePrompt, setShowSharePrompt] = useState(false)
  const [serviceType, setServiceType] = useState<"car" | "house">("car")
  const [submitting, setSubmitting] = useState(false)
  const [bookingData, setBookingData] = useState({
    service: "",
    package: "",
    date: "",
    time: "",
    vehicle: {
      make: "",
      model: "",
      year: "",
      color: "",
    },
    property: {
      type: "",
      size: "",
      rooms: "",
      frequency: "",
    },
    customer: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    notes: "",
  })

  const carServices = [
    {
      id: "interior",
      name: "Interior Detailing",
      description: "Deep clean and protection for your vehicle's interior",
      duration: "2-3 hours",
      packages: [
        { name: "Basic Interior", price: 89, duration: "2 hours" },
        { name: "Premium Interior", price: 149, duration: "2.5 hours" },
        { name: "Luxury Interior", price: 199, duration: "3 hours" },
      ],
    },
    {
      id: "exterior",
      name: "Exterior Detailing",
      description: "Complete exterior cleaning and protection",
      duration: "1.5-2.5 hours",
      packages: [
        { name: "Basic Wash", price: 69, duration: "1.5 hours" },
        { name: "Premium Wash", price: 119, duration: "2 hours" },
        { name: "Luxury Wash", price: 169, duration: "2.5 hours" },
      ],
    },
    {
      id: "full",
      name: "Full Detailing",
      description: "Complete interior and exterior detailing service",
      duration: "4-6 hours",
      packages: [
        { name: "Complete Detail", price: 199, duration: "4 hours" },
        { name: "Premium Detail", price: 299, duration: "5 hours" },
        { name: "Luxury Detail", price: 399, duration: "6 hours" },
      ],
    },
    {
      id: "ceramic",
      name: "Ceramic Coating",
      description: "Long-lasting paint protection with ceramic technology",
      duration: "6-8 hours",
      packages: [
        { name: "1-Year Protection", price: 599, duration: "6 hours" },
        { name: "3-Year Protection", price: 899, duration: "7 hours" },
        { name: "5-Year Protection", price: 1299, duration: "8 hours" },
      ],
    },
  ]

  const houseServices = [
    {
      id: "regular",
      name: "Regular House Cleaning",
      description: "Weekly or bi-weekly house cleaning service",
      duration: "2-4 hours",
      packages: [
        { name: "Basic Clean", price: 89, duration: "2 hours" },
        { name: "Deep Clean", price: 149, duration: "3 hours" },
        { name: "Premium Clean", price: 199, duration: "4 hours" },
      ],
    },
    {
      id: "deep",
      name: "Deep House Cleaning",
      description: "Comprehensive one-time deep cleaning service",
      duration: "4-8 hours",
      packages: [
        { name: "Standard Deep Clean", price: 199, duration: "4 hours" },
        { name: "Premium Deep Clean", price: 299, duration: "6 hours" },
        { name: "Ultimate Deep Clean", price: 399, duration: "8 hours" },
      ],
    },
    {
      id: "move",
      name: "Move In/Out Cleaning",
      description: "Complete cleaning for moving in or out",
      duration: "4-6 hours",
      packages: [
        { name: "Move Clean", price: 249, duration: "4 hours" },
        { name: "Premium Move Clean", price: 349, duration: "5 hours" },
        { name: "Ultimate Move Clean", price: 449, duration: "6 hours" },
      ],
    },
    {
      id: "commercial",
      name: "Commercial Cleaning",
      description: "Professional office and commercial space cleaning",
      duration: "2-6 hours",
      packages: [
        { name: "Basic Office Clean", price: 149, duration: "2 hours" },
        { name: "Premium Office Clean", price: 249, duration: "4 hours" },
        { name: "Complete Commercial Clean", price: 399, duration: "6 hours" },
      ],
    },
  ]

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ]

  const handleServiceSelect = (serviceId: string, packageName: string) => {
    setBookingData((prev) => ({
      ...prev,
      service: serviceId,
      package: packageName,
    }))
    setStep(2)
  }

  const handleNext = () => {
    setStep((prev) => prev + 1)
  }

  const WHATSAPP_NUMBER = "447349428794" // +44 7349428794 without symbols for wa.me

  function buildBookingText() {
    const services = serviceType === "car" ? carServices : houseServices
    const selectedService = services.find((s) => s.id === bookingData.service)
    const selectedPackage = selectedService?.packages.find((p) => p.name === bookingData.package)

    const lines = [
      "Booking Confirmation - The Tidy Team",
      "",
      `Service Type: ${serviceType === "car" ? "Car Detailing" : "House Cleaning"}`,
      `Service: ${selectedService?.name || "-"}`,
      `Package: ${bookingData.package || "-"}${selectedPackage?.price ? ` (£${selectedPackage.price})` : ""}`,
      `Date: ${bookingData.date || "-"} at ${bookingData.time || "-"}`,
      `Duration: ${selectedPackage?.duration || "-"}`,
      `Total: ${selectedPackage?.price ? `£${selectedPackage.price}` : "-"}`,
      "",
      "Customer Details:",
      `Name: ${bookingData.customer.name || "-"}`,
      `Email: ${bookingData.customer.email || "-"}`,
      `Phone: ${bookingData.customer.phone || "-"}`,
      `Address: ${bookingData.customer.address || "-"}`,
      "",
      serviceType === "car"
        ? `Vehicle: ${bookingData.vehicle.year || "-"} ${bookingData.vehicle.make || ""} ${bookingData.vehicle.model || ""} (${bookingData.vehicle.color || "-"})`
        : `Property: ${bookingData.property.type || "-"} • Size: ${bookingData.property.size || "-"} • Rooms: ${bookingData.property.rooms || "-"}`,
      "",
      `Notes: ${bookingData.notes || "-"}`,
    ]
    return lines.join("\n")
  }

  function openWhatsAppShare() {
    const text = buildBookingText()
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  function openGmailShare() {
    const subject = "New Booking Request - The Tidy Team"
    const body = buildBookingText()
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=tidyteamco.uk@gmail.com&su=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleSubmit = async () => {
    try {
      setSubmitting(true)
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType,
          bookingData,
        }),
      })
      if (!res.ok) {
        const t = await res.text()
        console.log("[v0] booking send failed:", t)
      }
      setStep(5)
      setShowSharePrompt(true)
    } catch (e: any) {
      console.log("[v0] booking error:", e?.message)
      setStep(5)
      setShowSharePrompt(true)
    } finally {
      setSubmitting(false)
    }
  }

  const services = serviceType === "car" ? carServices : houseServices
  const selectedService = services.find((s) => s.id === bookingData.service)
  const selectedPackage = selectedService?.packages.find((p) => p.name === bookingData.package)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-[url('/space-galaxy-stars.png')] opacity-20 bg-cover bg-center dark:opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 animate-pulse neon-glow">
            Book Your Service
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text neon-text">
            Schedule Your Appointment
          </h1>
          <p className="text-lg text-muted-foreground">
            Book your premium car detailing or house cleaning service in just a few simple steps
          </p>
        </div>
      </section>

      <section className="py-8 bg-muted/20 backdrop-blur-sm border-y border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass border-primary/20 backdrop-blur-sm shadow-lg shadow-primary/10">
            <CardHeader>
              <CardTitle className="text-center text-2xl neon-text">Important Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold neon-text text-foreground">Before Your Service</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 animate-pulse"></div>
                      Please ensure your vehicle/property is accessible at the scheduled time
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 animate-pulse"></div>
                      Remove all personal items from your car or clear areas to be cleaned
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 animate-pulse"></div>
                      Ensure water and electricity access for mobile services
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold neon-text text-foreground">Service Information</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 animate-pulse"></div>
                      All services include premium eco-friendly products
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 animate-pulse"></div>
                      Free consultation and damage assessment included
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 animate-pulse"></div>
                      Satisfaction guarantee - we'll make it right if you're not happy
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Type Selection */}
      {step === 1 && (
        <section className="py-8 bg-muted/30 backdrop-blur-sm border-y border-primary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-6 neon-text">Choose Service Type</h2>
            <div className="flex justify-center gap-4">
              <Button
                variant={serviceType === "car" ? "default" : "outline"}
                size="lg"
                onClick={() => setServiceType("car")}
                className={
                  serviceType === "car"
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground neon-glow hover-lift"
                    : "border-primary/30 text-primary hover:bg-primary/10 hover-lift"
                }
              >
                <Car className="h-5 w-5 mr-2" />
                Car Detailing
              </Button>
              <Button
                variant={serviceType === "house" ? "default" : "outline"}
                size="lg"
                onClick={() => setServiceType("house")}
                className={
                  serviceType === "house"
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground neon-glow hover-lift"
                    : "border-primary/30 text-primary hover:bg-primary/10 hover-lift"
                }
              >
                <Home className="h-5 w-5 mr-2" />
                House Cleaning
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Progress Indicator */}
      <section className="py-8 bg-muted/30 backdrop-blur-sm border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500 ${
                    step >= stepNum
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/50 neon-glow animate-pulse"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {stepNum}
                </div>
                {stepNum < 4 && (
                  <div
                    className={`w-16 h-1 mx-3 rounded-full transition-all duration-500 ${
                      step > stepNum ? "bg-gradient-to-r from-primary to-secondary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="text-sm text-muted-foreground neon-text">
              Step {step} of 4:{" "}
              <span className="text-primary">
                {step === 1
                  ? "Select Service"
                  : step === 2
                    ? "Choose Date & Time"
                    : step === 3
                      ? "Your Information"
                      : step === 4
                        ? "Review & Confirm"
                        : "Booking Complete"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-center mb-8 neon-text">
                Choose Your {serviceType === "car" ? "Car" : "House"} Service
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <Card
                    key={service.id}
                    className="glass border-primary/20 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 animate-slide-up hover-lift"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary neon-text">
                        {serviceType === "car" ? (
                          <Car className="h-6 w-6 neon-glow animate-sparkle" />
                        ) : (
                          <Home className="h-6 w-6 neon-glow animate-sparkle" />
                        )}
                        {service.name}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                      <p className="text-secondary text-sm font-medium">Duration: {service.duration}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {service.packages.map((pkg) => (
                          <div
                            key={pkg.name}
                            className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/30 group hover-lift"
                            onClick={() => handleServiceSelect(service.id, pkg.name)}
                          >
                            <div>
                              <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {pkg.name}
                              </p>
                              <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xl font-bold text-primary group-hover:neon-glow transition-all">
                                £{pkg.price}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-center mb-8 neon-text">Select Date & Time</h2>
              <Card className="glass border-primary/20 max-w-2xl mx-auto backdrop-blur-sm shadow-lg shadow-primary/10 hover-lift">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <div>
                      <label className="block text-lg font-medium mb-4 neon-text">
                        <Calendar className="h-5 w-5 inline mr-3 text-primary animate-sparkle" />
                        Select Date
                      </label>
                      <Input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => setBookingData((prev) => ({ ...prev, date: e.target.value }))}
                        className="glass border-primary/20 focus:border-primary text-lg p-4 rounded-lg transition-all duration-300"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-medium mb-4 neon-text">
                        <Clock className="h-5 w-5 inline mr-3 text-secondary animate-sparkle-delayed" />
                        Select Time
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={bookingData.time === time ? "default" : "outline"}
                            size="lg"
                            onClick={() => setBookingData((prev) => ({ ...prev, time }))}
                            className={
                              bookingData.time === time
                                ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 neon-glow hover-lift"
                                : "border-primary/30 text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 hover-lift"
                            }
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="pt-6">
                      <Button
                        onClick={handleNext}
                        disabled={!bookingData.date || !bookingData.time}
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground text-lg py-4 rounded-lg transition-all duration-300 neon-glow hover-lift"
                      >
                        Continue to Information
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-center mb-8 neon-text">Your Information</h2>
              <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="glass border-primary/20 backdrop-blur-sm shadow-lg shadow-primary/10 hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary neon-text text-xl">
                      <User className="h-6 w-6 neon-glow animate-sparkle" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        value={bookingData.customer.name}
                        onChange={(e) =>
                          setBookingData((prev) => ({
                            ...prev,
                            customer: { ...prev.customer, name: e.target.value },
                          }))
                        }
                        placeholder="Your full name"
                        className="glass border-primary/20 focus:border-primary p-4 rounded-lg transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email (optional)</label>
                      <Input
                        type="email"
                        value={bookingData.customer.email}
                        onChange={(e) =>
                          setBookingData((prev) => ({
                            ...prev,
                            customer: { ...prev.customer, email: e.target.value },
                          }))
                        }
                        placeholder="your.email@example.com"
                        className="glass border-primary/20 focus:border-primary p-4 rounded-lg transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <Input
                        value={bookingData.customer.phone}
                        onChange={(e) =>
                          setBookingData((prev) => ({
                            ...prev,
                            customer: { ...prev.customer, phone: e.target.value },
                          }))
                        }
                        placeholder="+44 123 456 7890"
                        className="glass border-primary/20 focus:border-primary p-4 rounded-lg transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Address</label>
                      <Input
                        value={bookingData.customer.address}
                        onChange={(e) =>
                          setBookingData((prev) => ({
                            ...prev,
                            customer: { ...prev.customer, address: e.target.value },
                          }))
                        }
                        placeholder="Your address (for mobile service)"
                        className="glass border-primary/20 focus:border-primary p-4 rounded-lg transition-all duration-300"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-secondary/20 backdrop-blur-sm shadow-lg shadow-secondary/10 hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 neon-text text-xl text-sky-600">
                      {serviceType === "car" ? (
                        <Car className="h-6 w-6 neon-glow animate-sparkle" />
                      ) : (
                        <Building className="h-6 w-6 neon-glow animate-sparkle" />
                      )}
                      {serviceType === "car" ? "Vehicle Information" : "Property Information"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {serviceType === "car" ? (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Year</label>
                            <Input
                              value={bookingData.vehicle.year}
                              onChange={(e) =>
                                setBookingData((prev) => ({
                                  ...prev,
                                  vehicle: { ...prev.vehicle, year: e.target.value },
                                }))
                              }
                              placeholder="2020"
                              className="glass border-secondary/20 focus:border-secondary p-4 rounded-lg transition-all duration-300"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Make</label>
                            <Input
                              value={bookingData.vehicle.make}
                              onChange={(e) =>
                                setBookingData((prev) => ({
                                  ...prev,
                                  vehicle: { ...prev.vehicle, make: e.target.value },
                                }))
                              }
                              placeholder="BMW"
                              className="glass border-secondary/20 focus:border-secondary p-4 rounded-lg transition-all duration-300"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Model</label>
                          <Input
                            value={bookingData.vehicle.model}
                            onChange={(e) =>
                              setBookingData((prev) => ({
                                ...prev,
                                vehicle: { ...prev.vehicle, model: e.target.value },
                              }))
                            }
                            placeholder="3 Series"
                            className="glass border-secondary/20 focus:border-secondary p-4 rounded-lg transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Color</label>
                          <Input
                            value={bookingData.vehicle.color}
                            onChange={(e) =>
                              setBookingData((prev) => ({
                                ...prev,
                                vehicle: { ...prev.vehicle, color: e.target.value },
                              }))
                            }
                            placeholder="Midnight Black"
                            className="glass border-secondary/20 focus:border-secondary p-4 rounded-lg transition-all duration-300"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label className="block text-sm font-medium mb-2">Property Type</label>
                          <Input
                            value={bookingData.property.type}
                            onChange={(e) =>
                              setBookingData((prev) => ({
                                ...prev,
                                property: { ...prev.property, type: e.target.value },
                              }))
                            }
                            placeholder="House, Apartment, Office, etc."
                            className="glass border-secondary/20 focus:border-secondary p-4 rounded-lg transition-all duration-300"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Size (sq ft)</label>
                            <Input
                              value={bookingData.property.size}
                              onChange={(e) =>
                                setBookingData((prev) => ({
                                  ...prev,
                                  property: { ...prev.property, size: e.target.value },
                                }))
                              }
                              placeholder="1500"
                              className="glass border-secondary/20 focus:border-secondary p-4 rounded-lg transition-all duration-300"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Rooms</label>
                            <Input
                              value={bookingData.property.rooms}
                              onChange={(e) =>
                                setBookingData((prev) => ({
                                  ...prev,
                                  property: { ...prev.property, rooms: e.target.value },
                                }))
                              }
                              placeholder="3 bed, 2 bath"
                              className="glass border-secondary/20 focus:border-secondary p-4 rounded-lg transition-all duration-300"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Cleaning Frequency</label>
                          <Input
                            value={bookingData.property.frequency}
                            onChange={(e) =>
                              setBookingData((prev) => ({
                                ...prev,
                                property: { ...prev.property, frequency: e.target.value },
                              }))
                            }
                            placeholder="Weekly, Bi-weekly, Monthly, One-time"
                            className="glass border-secondary/20 focus:border-secondary p-4 rounded-lg transition-all duration-300"
                          />
                        </div>
                      </>
                    )}
                    <div>
                      <label className="block text-sm font-medium mb-2">Special Notes</label>
                      <Textarea
                        value={bookingData.notes}
                        onChange={(e) => setBookingData((prev) => ({ ...prev, notes: e.target.value }))}
                        placeholder={`Any special requests or notes about your ${serviceType === "car" ? "vehicle" : "property"}...`}
                        rows={4}
                        className="glass border-secondary/20 focus:border-secondary resize-none p-4 rounded-lg transition-all duration-300"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-8">
                <Button
                  onClick={handleNext}
                  disabled={!bookingData.customer.name || !bookingData.customer.phone}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-12 py-4 text-lg rounded-lg transition-all duration-300 neon-glow hover-lift"
                >
                  Review Booking
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-center mb-8 neon-text">Review & Confirm</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <Card className="glass border-primary/20 backdrop-blur-sm shadow-lg shadow-primary/10 hover-lift">
                  <CardHeader>
                    <CardTitle className="text-primary neon-text text-2xl">Booking Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Service Type:</span>
                      <span className="font-medium">{serviceType === "car" ? "Car Detailing" : "House Cleaning"}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Service:</span>
                      <span className="font-medium">{selectedService?.name}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Package:</span>
                      <span className="font-medium">{bookingData.package}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">{bookingData.date}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-medium">{bookingData.time}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{selectedPackage?.duration}</span>
                    </div>
                    {serviceType === "car" ? (
                      <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground">Vehicle:</span>
                        <span className="font-medium">
                          {bookingData.vehicle.year} {bookingData.vehicle.make} {bookingData.vehicle.model}
                        </span>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground">Property:</span>
                        <span className="font-medium">
                          {bookingData.property.type} - {bookingData.property.size} sq ft
                        </span>
                      </div>
                    )}
                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <div className="flex justify-between items-center text-2xl">
                        <span className="font-semibold neon-text">Total:</span>
                        <span className="font-bold text-primary text-3xl neon-glow">£{selectedPackage?.price}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-secondary/20 backdrop-blur-sm shadow-lg shadow-secondary/10 hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 neon-text text-xl text-cyan-500">
                      <CreditCard className="h-6 w-6 neon-glow animate-sparkle" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-6">
                      Payment will be collected at the time of service. We accept cash, credit cards, and digital
                      payments including Apple Pay and Google Pay.
                    </p>
                    <div className="flex gap-6 justify-center">
                      <Button
                        onClick={handleSubmit}
                        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-12 py-4 text-lg rounded-lg transition-all duration-300 neon-glow hover-lift"
                      >
                        {submitting ? "Confirming..." : "Confirm Booking"}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setStep(3)}
                        className="border-primary/30 text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover-lift"
                      >
                        Back to Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <CheckCircle className="h-32 w-32 text-green-500 mx-auto mb-8 neon-glow animate-bounce" />
              <h2 className="text-4xl font-bold mb-6 neon-text">Booking Confirmation!</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Please, Select below Option to confirm your Booking:
Thank you for choosing The Tidy Team! 
              </p>

              {showSharePrompt && (
                <Card className="glass border-primary/20 backdrop-blur-sm mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Send us Booking via !</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={openWhatsAppShare}
                        className="bg-[#25D366] hover:bg-[#1ebe59] text-white px-6 py-4 text-base rounded-lg font-semibold"
                        aria-label="Send booking via WhatsApp"
                      >
                        Send via WhatsApp
                      </Button>

                      <Button
                        onClick={openGmailShare}
                        className="bg-[#007BFF] hover:bg-[#0069d9] text-white px-6 py-4 text-base rounded-lg font-semibold"
                        aria-label="Send booking via Gmail"
                      >
                        Send via Gmail
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      This opens WhatsApp or Gmail with your booking summary pre-filled to our business contact.
                    </p>
                  </CardContent>
                </Card>
              )}

              <Card className="glass border-green-500/20 backdrop-blur-sm text-left shadow-lg shadow-green-500/10 hover-lift">
                <CardContent className="p-8">
                  <h3 className="font-semibold mb-6 neon-text text-xl">What's Next?</h3>
                  <ul className="space-y-3 text-muted-foreground text-lg">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-4 animate-pulse"></div>
                      We'll send a reminder 24 hours before your appointment
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 animate-pulse"></div>
                      Our team will arrive at your scheduled time
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-4 animate-pulse"></div>
                      Payment is due at completion of service
                    </li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-green-500/20">
                    <p className="text-sm text-muted-foreground">
                      Need to make changes? Call us at <span className="text-primary neon-text">+44 7349 428 794</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
