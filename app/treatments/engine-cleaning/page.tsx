import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Wrench, Droplets, Sparkles, ArrowRight, Play, Thermometer, Clock } from "lucide-react"

export default function EngineCleaningPage() {
  const packages = [
    {
      name: "Basic Engine Clean",
      price: "$149",
      duration: "2 hours",
      features: [
        "Engine bay degreasing",
        "Component cleaning",
        "Basic protection spray",
        "Visual inspection",
        "Before/after photos",
      ],
      popular: false,
    },
    {
      name: "Premium Engine Detail",
      price: "$249",
      duration: "3-4 hours",
      features: [
        "Deep degreasing treatment",
        "Individual component detailing",
        "Plastic and rubber restoration",
        "Metal polishing",
        "Premium protection coating",
        "Performance check",
      ],
      popular: true,
    },
    {
      name: "Concours Engine Bay",
      price: "$399",
      duration: "5-6 hours",
      features: [
        "Show-quality engine detailing",
        "Complete disassembly cleaning",
        "Paint touch-ups",
        "Chrome polishing",
        "Ceramic coating application",
        "Professional photography",
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
            Engine Cleaning Services
          </Badge>
          <h1 className="text-5xl font-bold mb-6 neon-text">Engine Bay Cleaning</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional engine bay cleaning and detailing services that not only improve appearance but also help
            maintain your vehicle's performance and identify potential issues early.
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
                  <h3 className="text-xl font-semibold mb-2">Engine Cleaning Process</h3>
                  <p className="text-muted-foreground">See our safe and thorough engine bay cleaning method</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section with Animated Icons */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Wrench,
              title: "Performance Benefits",
              description: "Clean engine runs cooler and more efficiently",
            },
            {
              icon: Droplets,
              title: "Safe Cleaning",
              description: "Water-safe methods protect sensitive components",
            },
            {
              icon: Thermometer,
              title: "Heat Management",
              description: "Removes buildup that can cause overheating",
            },
            {
              icon: Sparkles,
              title: "Show Quality",
              description: "Pristine engine bay enhances overall vehicle appeal",
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
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">Engine Cleaning Packages</h2>
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
                    Book Service
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety & Process Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 neon-text">Safe & Professional Process</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Pre-Cleaning Inspection</h3>
                  <p className="text-muted-foreground text-sm">
                    Thorough assessment and protection of sensitive components
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Safe Degreasing</h3>
                  <p className="text-muted-foreground text-sm">
                    Specialized degreasers that won't damage electrical components
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Detail Cleaning</h3>
                  <p className="text-muted-foreground text-sm">Individual component cleaning and restoration</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Protection Application</h3>
                  <p className="text-muted-foreground text-sm">Protective coatings to prevent future contamination</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl p-8 border-border/20">
            <h3 className="text-xl font-bold mb-6 text-center">Why Engine Cleaning Matters</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span>Easier leak detection and maintenance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span>Improved cooling system efficiency</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span>Enhanced resale value</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span>Professional appearance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span>Fire hazard reduction</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass rounded-3xl p-12 border-border/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 neon-text">Professional Engine Care</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Trust our experts to safely clean and detail your engine bay. Improve performance, appearance, and
                maintenance accessibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="neon-glow text-lg px-8 py-4 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                  Book Engine Service
                </Button>
                <Button
                  variant="outline"
                  className="text-lg px-8 py-4 glass border-primary/30 hover:bg-primary/10 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
