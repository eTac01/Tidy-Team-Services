import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Zap, Layers, ArrowRight, Play, Star } from "lucide-react"

export default function PaintProtectionPage() {
  const packages = [
    {
      name: "Essential PPF",
      price: "$1,299",
      coverage: "Front bumper, hood, mirrors",
      warranty: "5 years",
      features: [
        "High-impact areas protection",
        "Self-healing technology",
        "UV resistance",
        "Professional installation",
        "Maintenance kit included",
      ],
      popular: false,
    },
    {
      name: "Premium PPF",
      price: "$2,899",
      coverage: "Full front end + A-pillars",
      warranty: "7 years",
      features: [
        "Extended coverage areas",
        "Advanced self-healing film",
        "Stain resistance",
        "Edge sealing technology",
        "Annual inspection included",
        "Touch-up service",
      ],
      popular: true,
    },
    {
      name: "Full Vehicle PPF",
      price: "$5,999",
      coverage: "Complete vehicle wrap",
      warranty: "10 years",
      features: [
        "100% paint protection",
        "Premium film technology",
        "Invisible protection",
        "Comprehensive warranty",
        "Lifetime maintenance",
        "Concierge service",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 neon-glow bg-primary/20 text-primary border-primary/30">Paint Protection Film</Badge>
          <h1 className="text-5xl font-bold mb-6 neon-text">Paint Protection Film</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced paint protection film (PPF) technology that provides invisible armor for your vehicle's paint.
            Self-healing properties and superior durability keep your car looking pristine.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <Card className="glass border-border/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/40 transition-colors cursor-pointer group">
                    <Play className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">PPF Installation Process</h3>
                  <p className="text-muted-foreground">Watch our expert installation of paint protection film</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section with Animated Icons */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "Impact Protection",
              description: "Guards against rock chips, scratches, and road debris",
            },
            {
              icon: Zap,
              title: "Self-Healing",
              description: "Minor scratches disappear with heat application",
            },
            {
              icon: Layers,
              title: "Invisible Shield",
              description: "Crystal clear protection that's virtually undetectable",
            },
            {
              icon: Star,
              title: "Resale Value",
              description: "Maintains paint condition and vehicle value",
            },
          ].map((benefit, index) => (
            <Card
              key={index}
              className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300">
                  <benefit.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">PPF Protection Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                  <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground mb-2">{pkg.coverage}</div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 mr-1" />
                    <span>{pkg.warranty} warranty</span>
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
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
              <h2 className="text-3xl font-bold mb-4 neon-text">Ultimate Paint Protection</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Invest in the best protection for your vehicle's paint. Our PPF services provide unmatched durability
                and peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="neon-glow text-lg px-8 py-4 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  className="text-lg px-8 py-4 glass border-primary/30 hover:bg-primary/10 bg-transparent"
                >
                  View Coverage Options
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
