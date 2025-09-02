import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Sparkles, Zap, Star, CheckCircle, Plus } from "lucide-react"
import Link from "next/link"

export default function AddOnsPage() {
  const carAddOns = [
    {
      name: "Ceramic Coating",
      price: "£150-£400",
      duration: "2-5 years",
      icon: Shield,
      description: "Ultimate paint protection with hydrophobic properties",
      benefits: ["UV Protection", "Scratch Resistance", "Easy Cleaning", "Enhanced Gloss"],
    },
    {
      name: "Paint Protection Film",
      price: "£200-£600",
      duration: "5-10 years",
      icon: Star,
      description: "Invisible film protection for high-impact areas",
      benefits: ["Stone Chip Protection", "Self-Healing", "Maintains Resale Value", "Invisible Coverage"],
    },
    {
      name: "Interior Protection",
      price: "£80-£150",
      duration: "3-5 years",
      icon: Sparkles,
      description: "Fabric and leather protection treatment",
      benefits: ["Stain Resistance", "UV Protection", "Easy Maintenance", "Odor Prevention"],
    },
    {
      name: "Engine Bay Detail",
      price: "£60-£120",
      duration: "One-time",
      icon: Zap,
      description: "Complete engine bay cleaning and protection",
      benefits: ["Improved Performance", "Easier Maintenance", "Better Resale", "Professional Appearance"],
    },
  ]

  const homeAddOns = [
    {
      name: "Appliance Deep Clean",
      price: "£40-£80",
      duration: "One-time",
      icon: Sparkles,
      description: "Inside and outside cleaning of all appliances",
      benefits: ["Oven Deep Clean", "Fridge Sanitization", "Dishwasher Detail", "Microwave Treatment"],
    },
    {
      name: "Carpet Protection",
      price: "£60-£120",
      duration: "6-12 months",
      icon: Shield,
      description: "Professional carpet and upholstery protection",
      benefits: ["Stain Resistance", "Soil Protection", "Extended Life", "Easy Maintenance"],
    },
    {
      name: "Window Treatment",
      price: "£30-£60",
      duration: "One-time",
      icon: Star,
      description: "Interior and exterior window cleaning",
      benefits: ["Streak-Free Finish", "Frame Cleaning", "Sill Detail", "Screen Cleaning"],
    },
  ]

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 neon-glow bg-primary/20 text-primary border-primary/30">Premium Add-On Services</Badge>
          <h1 className="text-5xl font-bold mb-6 neon-text">Enhance Your Service</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take your cleaning experience to the next level with our premium add-on services and protection packages
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Car Detailing Add-Ons</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carAddOns.map((addon, index) => {
              const IconComponent = addon.icon
              return (
                <Card
                  key={index}
                  className="glass border-border/20 hover:border-primary/50 transition-all duration-300 hover-lift"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{addon.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{addon.price}</div>
                    <Badge variant="outline" className="text-xs">
                      {addon.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4">{addon.description}</p>
                    <div className="space-y-2">
                      {addon.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4 neon-glow" size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add to Service
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Home Cleaning Add-Ons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {homeAddOns.map((addon, index) => {
              const IconComponent = addon.icon
              return (
                <Card
                  key={index}
                  className="glass border-border/20 hover:border-primary/50 transition-all duration-300 hover-lift"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{addon.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{addon.price}</div>
                    <Badge variant="outline" className="text-xs">
                      {addon.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4">{addon.description}</p>
                    <div className="space-y-2">
                      {addon.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4 neon-glow" size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add to Service
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <Card className="glass border-border/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Enhance Your Service?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Add these premium services to your booking for the ultimate cleaning and protection experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="neon-glow">
                  Book with Add-Ons
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="glass border-primary/30 bg-transparent">
                Get Custom Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
