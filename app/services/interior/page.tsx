import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Sparkles, ArrowRight } from "lucide-react"

export default function InteriorCleaningPage() {
  const packages = [
    {
      name: "Essential Interior",
      smallPrice: "£35",
      suvPrice: "£45",
      largePrice: "£55",
      xlPrice: "£65",
      duration: "2-3 hours",
      features: [
        "Complete vacuum of seats, carpets, and mats",
        "Dashboard and console cleaning",
        "Window cleaning (interior)",
        "Door panel and trim cleaning",
        "Basic leather/fabric conditioning",
      ],
      popular: false,
    },
    {
      name: "Premium Interior",
      smallPrice: "£60",
      suvPrice: "£75",
      largePrice: "£90",
      xlPrice: "£110",
      duration: "3-4 hours",
      features: [
        "Everything in Essential Interior",
        "Deep steam cleaning of upholstery",
        "Leather treatment and protection",
        "Air vent deep cleaning",
        "Stain removal treatment",
        "UV protection application",
      ],
      popular: true,
    },
    {
      name: "Luxury Interior",
      smallPrice: "£100",
      suvPrice: "£130",
      largePrice: "£160",
      xlPrice: "£190",
      duration: "4-6 hours",
      features: [
        "Everything in Premium Interior",
        "Ceramic coating for leather surfaces",
        "Odor elimination treatment",
        "Headliner deep cleaning",
        "Trunk/cargo area detailing",
        "6-month protection guarantee",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 neon-glow bg-primary/20 text-primary border-primary/30">
            Interior Cleaning Services
          </Badge>
          <h1 className="text-5xl font-bold mb-6 neon-text">Interior Detailing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your vehicle's interior with our premium cleaning services. From basic maintenance to luxury
            treatments, we restore your cabin to pristine condition.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`glass border-border/20 hover:border-primary/50 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 relative ${
                pkg.popular ? "border-primary/30 neon-glow" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold mb-2">{pkg.name}</CardTitle>
                <div className="mb-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-2">
                    {[
                      { label: "Small Car", price: pkg.smallPrice },
                      { label: "SUV", price: pkg.suvPrice },
                      { label: "Large Car", price: pkg.largePrice },
                      { label: "Extra Large", price: pkg.xlPrice },
                    ].map((item, i) => {
                      return (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-bold text-primary">{item.price ? item.price : "-"}</div>
                          <div className="text-xs text-muted-foreground">{item.label}</div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Small: Hatchback, Sedan • SUV: Crossover • Large: 4x4/MPV • Extra Large: Van/People Carrier
                  </div>
                </div>
                <div className="flex items-center justify-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{pkg.duration}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => {
                    return (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    )
                  })}
                </ul>
                <Button
                  className={`w-full ${
                    pkg.popular
                      ? "neon-glow hover:shadow-xl hover:shadow-primary/30"
                      : "glass border-primary/30 hover:bg-primary/10 bg-transparent"
                  } transition-all duration-300 group`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 neon-text">Why Choose Our Interior Services?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Advanced Protection</h3>
                  <p className="text-muted-foreground">
                    Our treatments provide long-lasting protection against wear, UV damage, and stains.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Sparkles className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Premium Products</h3>
                  <p className="text-muted-foreground">
                    We use only the finest cleaning products and conditioners for optimal results.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-muted-foreground">
                    100% satisfaction guarantee with free touch-ups within 7 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl p-8 border-border/20">
            <h3 className="text-xl font-bold mb-4 text-center">Book Your Service</h3>
            <p className="text-muted-foreground text-center mb-6">
              Ready to transform your vehicle's interior? Get started with a free consultation.
            </p>
            <div className="space-y-4">
              <Button className="w-full neon-glow hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="w-full glass border-primary/30 hover:bg-primary/10 bg-transparent">
                Book Now To get detailing service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
