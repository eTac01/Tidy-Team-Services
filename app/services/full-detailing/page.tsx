import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Crown, Sparkles, ArrowRight, Shield, Star } from "lucide-react"

export default function FullDetailingPage() {
  const packages = [
    {
      name: "Complete Detail",
      smallPrice: "£100",
      suvPrice: "£130",
      largePrice: "£160",
      xlPrice: "£190",
      duration: "6-8 hours",
      features: [
        "Full interior and exterior cleaning",
        "Paint correction and polishing",
        "Leather conditioning and protection",
        "Engine bay detailing",
        "Wheel and tire deep cleaning",
        "6-month protection warranty",
      ],
      popular: false,
    },
    {
      name: "Premium Detail",
      smallPrice: "£160",
      suvPrice: "£200",
      largePrice: "£240",
      xlPrice: "£280",
      duration: "8-10 hours",
      features: [
        "Everything in Complete Detail",
        "Ceramic coating application",
        "Paint protection film consultation",
        "Headlight restoration",
        "Odor elimination treatment",
        "12-month protection warranty",
        "Monthly maintenance included",
      ],
      popular: true,
    },
    {
      name: "Concours Detail",
      smallPrice: "£250",
      suvPrice: "£320",
      largePrice: "£380",
      xlPrice: "£450",
      duration: "2-3 days",
      features: [
        "Everything in Premium Detail",
        "Multi-stage paint correction",
        "Professional ceramic coating",
        "Interior ceramic protection",
        "Show-quality finish",
        "Lifetime maintenance program",
        "White-glove pickup/delivery",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 neon-glow bg-primary/20 text-primary border-primary/30">Full Detailing Services</Badge>
          <h1 className="text-5xl font-bold mb-6 neon-text">Complete Detailing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The ultimate automotive care experience. Our full detailing services combine interior and exterior
            treatments to restore your vehicle to better-than-new condition.
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

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 neon-text">The Full Detail Difference</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Crown className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Concours-Level Results</h3>
                  <p className="text-muted-foreground">
                    Our full detailing achieves show-quality results that exceed even the most demanding standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Long-Term Protection</h3>
                  <p className="text-muted-foreground">
                    Advanced coatings and treatments provide years of protection against environmental damage.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Star className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Value Preservation</h3>
                  <p className="text-muted-foreground">
                    Professional detailing maintains and enhances your vehicle's resale value significantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="glass border-border/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 text-primary mr-2" />
                  What's Included
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Complete interior deep cleaning and protection</li>
                  <li>• Multi-stage exterior paint correction</li>
                  <li>• Professional ceramic coating application</li>
                  <li>• Engine bay detailing and protection</li>
                  <li>• Wheel and tire ceramic coating</li>
                  <li>• Glass treatment and rain repellent</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glass border-border/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Satisfaction Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  We stand behind our work with a 100% satisfaction guarantee. If you're not completely happy, we'll
                  make it right at no additional cost.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass rounded-3xl p-12 border-border/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 neon-text">Transform Your Vehicle Today</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the ultimate in automotive care. Book your full detailing service and discover what
                perfection looks like.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="neon-glow text-lg px-8 py-4 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  className="text-lg px-8 py-4 glass border-primary/30 hover:bg-primary/10 bg-transparent"
                >
                  View Gallery
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Free consultation • Flexible scheduling • Lifetime support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
