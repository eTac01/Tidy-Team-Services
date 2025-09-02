import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Calendar, Zap, ArrowRight, Star, Shield, Sparkles, Crown, Award, Gem } from "lucide-react"

export default function MaintenancePackagesPage() {
  const packages = [
    {
      name: "Essential Care",
      frequency: "Monthly",
      smallPrice: "£35",
      suvPrice: "£45",
      originalSmallPrice: "£50",
      originalSuvPrice: "£60",
      savings: "Save 30%",
      duration: "2-3 hours",
      icon: Shield,
      color: "emerald",
      features: [
        "Exterior wash and wax",
        "Interior vacuum and wipe down",
        "Tire cleaning and shine",
        "Window cleaning (inside & out)",
        "Dashboard conditioning",
        "Priority booking",
      ],
      popular: false,
      glowColor: "from-emerald-500/30 to-emerald-300/10",
      borderColor: "border-emerald-500/30",
      bgGradient: "from-emerald-50/5 to-emerald-100/5",
    },
    {
      name: "Premium Care",
      frequency: "Quarterly",
      smallPrice: "£60",
      suvPrice: "£75",
      originalSmallPrice: "£90",
      originalSuvPrice: "£110",
      savings: "Save 33%",
      duration: "4-5 hours",
      icon: Award,
      color: "blue",
      features: [
        "Everything in Essential Care",
        "Paint decontamination",
        "Leather conditioning",
        "Engine bay cleaning",
        "Headlight restoration",
        "Ceramic spray coating",
        "Free emergency touch-ups",
      ],
      popular: true,
      glowColor: "from-blue-500/50 to-blue-300/20",
      borderColor: "border-blue-500/50",
      bgGradient: "from-blue-50/10 to-blue-100/10",
    },
    {
      name: "Luxury Care",
      frequency: "Yearly",
      smallPrice: "£100",
      suvPrice: "£130",
      originalSmallPrice: "£160",
      originalSuvPrice: "£200",
      savings: "Save 40%",
      duration: "Full day",
      icon: Crown,
      color: "purple",
      features: [
        "Everything in Premium Care",
        "Professional ceramic coating",
        "Paint correction service",
        "Interior protection treatment",
        "Odor elimination",
        "Concierge pickup/delivery",
        "Unlimited touch-ups",
        "VIP customer support",
      ],
      popular: false,
      glowColor: "from-purple-500/40 to-purple-300/15",
      borderColor: "border-purple-500/40",
      bgGradient: "from-purple-50/8 to-purple-100/8",
    },
  ]

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge className="mb-6 neon-glow bg-primary/20 border-primary/30 text-lg px-6 py-2 text-slate-50">
            Maintenance Packages
          </Badge>
          <h1 className="text-6xl font-bold mb-8 neon-text bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Subscription Plans
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Keep your vehicle in pristine condition year-round with our convenient maintenance packages. Save money,
            time, and ensure your car always looks its best with regular professional care.
          </p>
        </div>

        {/* Pricing Cards with Animated Borders */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon
            return (
              <div key={index} className={`relative ${pkg.popular ? "pt-6" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-40">
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 text-sm font-semibold shadow-lg shadow-blue-500/30 animate-pulse border-0">
                      ⭐ Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`relative glass border-2 ${pkg.borderColor} hover:border-${pkg.color}-400/70 transition-all duration-700 group hover:scale-[1.02] hover:-translate-y-3 ${
                    pkg.popular ? "ring-2 ring-blue-400/30 shadow-2xl shadow-blue-500/20" : "shadow-xl"
                  }`}
                >
                  {/* Animated Glowing Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pkg.glowColor} opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${pkg.bgGradient} opacity-60`} />

                  <div className="relative z-10 bg-background/95 backdrop-blur-xl rounded-lg m-[2px] h-full">
                    <CardHeader className="text-center pb-6 pt-8">
                      {/* Icon and Frequency */}
                      <div className="flex items-center justify-center mb-4">
                        <div className={`p-3 rounded-full bg-${pkg.color}-500/20 border border-${pkg.color}-500/30`}>
                          <IconComponent className={`h-8 w-8 text-${pkg.color}-500`} />
                        </div>
                      </div>
                      <div className="flex items-center justify-center mb-3">
                        <Calendar className={`h-5 w-5 text-${pkg.color}-500 mr-2`} />
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                          {pkg.frequency}
                        </span>
                      </div>

                      <CardTitle className="text-3xl font-bold mb-6 text-foreground">{pkg.name}</CardTitle>

                      {/* Enhanced Pricing Display */}
                      <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-background/50 to-background/30 border border-border/20">
                        <div className="flex items-center justify-center gap-6 mb-3">
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                              <div className={`text-3xl font-bold text-${pkg.color}-500`}>{pkg.smallPrice}</div>
                              <div className="text-lg text-muted-foreground line-through opacity-60">
                                {pkg.originalSmallPrice}
                              </div>
                            </div>
                            <div className="text-sm font-medium text-muted-foreground">Small Car</div>
                          </div>
                          <div className="h-12 w-px bg-border/30"></div>
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                              <div className={`text-3xl font-bold text-${pkg.color}-500`}>{pkg.suvPrice}</div>
                              <div className="text-lg text-muted-foreground line-through opacity-60">
                                {pkg.originalSuvPrice}
                              </div>
                            </div>
                            <div className="text-sm font-medium text-muted-foreground">SUV</div>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className={`bg-${pkg.color}-500/20 text-${pkg.color}-600 border-${pkg.color}-500/30 mb-3 font-semibold`}
                        >
                          {pkg.savings}
                        </Badge>
                        <div className="text-xs text-muted-foreground leading-relaxed">
                          Small Car: Hatchback, Sedan | SUV: 4x4, Large Vehicle
                        </div>
                      </div>

                      {/* Duration */}
                      <div
                        className={`flex items-center justify-center text-${pkg.color}-600 bg-${pkg.color}-50/50 rounded-lg py-2 px-4 border border-${pkg.color}-200/30`}
                      >
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="font-medium">{pkg.duration}</span>
                      </div>
                    </CardHeader>

                    <CardContent className="px-6 pb-8">
                      {/* Features List */}
                      <ul className="space-y-4 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start group/item">
                            <CheckCircle
                              className={`h-5 w-5 text-${pkg.color}-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform`}
                            />
                            <span className="text-sm font-medium leading-relaxed group-hover/item:text-foreground transition-colors">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Enhanced Subscribe Button */}
                      <Button
                        className={`w-full h-12 text-base font-semibold ${
                          pkg.popular
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
                            : `bg-gradient-to-r from-${pkg.color}-500 to-${pkg.color}-600 hover:from-${pkg.color}-600 hover:to-${pkg.color}-700 text-white shadow-lg shadow-${pkg.color}-500/30 hover:shadow-xl hover:shadow-${pkg.color}-500/40`
                        } transition-all duration-300 group/btn`}
                      >
                        Subscribe Now
                        <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Why Choose Maintenance Packages?
            </h2>
            <div className="space-y-8">
              <div className="flex items-start group hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-transparent p-4 rounded-xl transition-all duration-300">
                <div className="p-3 rounded-full bg-emerald-500/20 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg mb-3 text-foreground">Significant Savings</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Save up to 40% compared to individual services. The more you commit, the more you save.
                  </p>
                </div>
              </div>
              <div className="flex items-start group hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent p-4 rounded-xl transition-all duration-300">
                <div className="p-3 rounded-full bg-blue-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform">
                  <Calendar className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg mb-3 text-foreground">Convenient Scheduling</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Priority booking and automated reminders ensure your car gets the care it needs on schedule.
                  </p>
                </div>
              </div>
              <div className="flex items-start group hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-transparent p-4 rounded-xl transition-all duration-300">
                <div className="p-3 rounded-full bg-purple-500/20 border border-purple-500/30 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg mb-3 text-foreground">Consistent Quality</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Regular maintenance prevents damage and keeps your vehicle looking and performing its best.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="glass border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-full bg-primary/20 border border-primary/30 group-hover:scale-110 transition-transform">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl ml-3">Premium Benefits</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Priority booking and flexible scheduling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Dedicated customer support team
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Free emergency touch-ups between services
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Detailed service reports and photos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Cancel or modify anytime
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glass border-2 border-blue-500/30 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-full bg-blue-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform">
                    <Sparkles className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold text-xl ml-3">Smart Scheduling</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our intelligent scheduling system tracks your vehicle's needs and automatically books your next
                  service at the optimal time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">Package Comparison</h2>
          <div className="glass rounded-2xl p-8 border-border/20 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/20">
                  <th className="text-left py-4 px-4">Service</th>
                  <th className="text-center py-4 px-4">Essential</th>
                  <th className="text-center py-4 px-4">Premium</th>
                  <th className="text-center py-4 px-4">Luxury</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Exterior Wash & Wax", true, true, true],
                  ["Interior Cleaning", true, true, true],
                  ["Paint Decontamination", false, true, true],
                  ["Ceramic Coating", false, true, true],
                  ["Paint Correction", false, false, true],
                  ["Pickup/Delivery", false, false, true],
                  ["Emergency Touch-ups", false, true, true],
                  ["VIP Support", false, false, true],
                ].map(([service, essential, premium, luxury], index) => (
                  <tr key={index} className="border-b border-border/10">
                    <td className="py-3 px-4 font-medium">{service}</td>
                    <td className="text-center py-3 px-4">
                      {essential ? (
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <div className="w-5 h-5 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {premium ? (
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <div className="w-5 h-5 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {luxury ? (
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <div className="w-5 h-5 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass rounded-3xl p-16 border-2 border-primary/30 relative overflow-hidden hover:border-primary/50 transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/5 to-purple-500/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="mb-6">
                <Gem className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Start Your Maintenance Journey
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect maintenance package for your vehicle and enjoy consistent, professional care that
                keeps your car looking its absolute best.
              </p>
              
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  No commitment
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  Cancel anytime
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                  30-day guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
