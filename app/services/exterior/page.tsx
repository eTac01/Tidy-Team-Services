import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Droplets, Sparkles, ArrowRight, Car } from "lucide-react"

export default function ExteriorWashPage() {
  const packages = [
    {
      name: "Express Wash",
      smallPrice: "£15",
      suvPrice: "£25",
      largePrice: "£35",
      xlPrice: "£45",
      duration: "1-2 hours",
      features: [
        "Hand wash with premium soap",
        "Wheel and tire cleaning",
        "Window cleaning (exterior)",
        "Quick dry and basic wax",
        "Tire shine application",
      ],
      popular: false,
    },
    {
      name: "Premium Wash",
      smallPrice: "£35",
      suvPrice: "£45",
      largePrice: "£55",
      xlPrice: "£70",
      duration: "2-3 hours",
      features: [
        "Everything in Express Wash",
        "Clay bar treatment",
        "Paint decontamination",
        "Premium wax application",
        "Chrome and trim polishing",
        "Undercarriage cleaning",
      ],
      popular: true,
    },
    {
      name: "Signature Wash",
      smallPrice: "£60",
      suvPrice: "£75",
      largePrice: "£95",
      xlPrice: "£115",
      duration: "3-4 hours",
      features: [
        "Everything in Premium Wash",
        "Paint correction (minor scratches)",
        "Ceramic spray coating",
        "Headlight restoration",
        "Engine bay cleaning",
        "3-month protection guarantee",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 neon-glow bg-primary/20 text-primary border-primary/30">Exterior Wash Services</Badge>
          <h1 className="text-5xl font-bold mb-6 neon-text">Exterior Detailing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Restore your vehicle's exterior shine with our comprehensive wash and protection services. From quick
            maintenance to premium treatments that make your car gleam.
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
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-primary">{item.price ?? "—"}</div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                      </div>
                    ))}
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
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
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

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">Our Exterior Wash Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Pre-Rinse",
                description: "Thorough rinse to remove loose dirt and debris",
                icon: Droplets,
              },
              {
                step: "02",
                title: "Hand Wash",
                description: "Gentle hand washing with premium soaps and mitts",
                icon: Car,
              },
              {
                step: "03",
                title: "Detail Clean",
                description: "Wheels, tires, and trim receive special attention",
                icon: Sparkles,
              },
              {
                step: "04",
                title: "Protect & Shine",
                description: "Wax application and final inspection for perfection",
                icon: CheckCircle,
              },
            ].map((process, index) => (
              <Card key={index} className="glass border-border/20 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{process.step}</div>
                  <h3 className="font-semibold mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass rounded-3xl p-12 border-border/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 neon-text">Ready for a Showroom Shine?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book your exterior wash service today and experience the difference professional detailing makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="neon-glow text-lg px-8 py-4 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                  Book Service Now
                </Button>
                <Button
                  variant="outline"
                  className="text-lg px-8 py-4 glass border-primary/30 hover:bg-primary/10 bg-transparent"
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
