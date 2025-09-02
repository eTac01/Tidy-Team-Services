import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Droplets, Sun, ArrowRight, Play, Star, Clock } from "lucide-react"

export default function CeramicCoatingPage() {
  const packages = [
    {
      name: "Entry Level",
      price: "$899",
      duration: "1 day",
      warranty: "2 years",
      features: [
        "Single layer ceramic coating",
        "Paint decontamination",
        "Surface preparation",
        "UV protection",
        "Hydrophobic properties",
        "Enhanced gloss",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$1,499",
      duration: "2 days",
      warranty: "5 years",
      features: [
        "Multi-layer ceramic system",
        "Paint correction included",
        "Advanced surface prep",
        "Superior durability",
        "Self-cleaning properties",
        "Maintenance kit included",
        "Annual inspection",
      ],
      popular: true,
    },
    {
      name: "Ultimate",
      price: "$2,299",
      duration: "3 days",
      warranty: "10 years",
      features: [
        "Premium ceramic coating",
        "Full paint correction",
        "Wheel ceramic coating",
        "Glass ceramic treatment",
        "Trim protection",
        "Lifetime maintenance program",
        "White-glove service",
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
            Ceramic Coating Services
          </Badge>
          <h1 className="text-5xl font-bold mb-6 neon-text">Ceramic Coating</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The ultimate paint protection technology. Our ceramic coatings create an invisible shield that protects your
            vehicle's paint while enhancing its appearance for years to come.
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
                  <h3 className="text-xl font-semibold mb-2">Watch Ceramic Coating Process</h3>
                  <p className="text-muted-foreground">See how our advanced ceramic coating transforms your vehicle</p>
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
              title: "Ultimate Protection",
              description: "Guards against scratches, chemicals, and environmental damage",
            },
            {
              icon: Droplets,
              title: "Hydrophobic Effect",
              description: "Water beads and rolls off, making cleaning effortless",
            },
            {
              icon: Sun,
              title: "UV Resistance",
              description: "Prevents paint fading and oxidation from harmful UV rays",
            },
            {
              icon: Star,
              title: "Enhanced Gloss",
              description: "Delivers a deep, mirror-like finish that lasts for years",
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
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">Ceramic Coating Packages</h2>
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
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 mr-1" />
                      <span>{pkg.warranty} warranty</span>
                    </div>
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
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">Our Ceramic Coating Process</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Thorough Inspection",
                  description: "Complete assessment of paint condition and contamination levels",
                },
                {
                  step: "02",
                  title: "Paint Correction",
                  description: "Remove swirl marks, scratches, and imperfections for perfect surface",
                },
                {
                  step: "03",
                  title: "Surface Preparation",
                  description: "Deep cleaning and decontamination to ensure optimal coating adhesion",
                },
                {
                  step: "04",
                  title: "Coating Application",
                  description: "Precise application of ceramic coating in controlled environment",
                },
                {
                  step: "05",
                  title: "Curing Process",
                  description: "Proper curing time ensures maximum durability and performance",
                },
              ].map((process, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary font-bold">{process.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="glass rounded-2xl p-8 border-border/20">
              <h3 className="text-xl font-bold mb-6 text-center">Why Choose Our Ceramic Coating?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Certified installation technicians</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Climate-controlled application facility</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Premium coating products only</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Comprehensive warranty coverage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Ongoing maintenance support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass rounded-3xl p-12 border-border/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 neon-text">Protect Your Investment</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Give your vehicle the ultimate protection with our professional ceramic coating services. Book your
                consultation today and discover the difference.
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
