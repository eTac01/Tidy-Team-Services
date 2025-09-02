import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Home, Calendar, Clock, Shield, Repeat } from "lucide-react"
import Link from "next/link"

export default function RegularMaintenancePage() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Enhanced background animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/15 rounded-full blur-xl animate-float delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary/8 rounded-full blur-3xl animate-float delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 neon-glow">Recurring Service</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Regular Maintenance Cleaning</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Keep your home consistently clean with our regular maintenance service. Scheduled cleaning that fits your
            lifestyle and maintains your space perfectly.
          </p>
          
        </div>

        {/* Frequency Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="glass border-border/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Calendar className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <Badge variant="secondary">Popular</Badge>
              </div>
              <CardTitle>Weekly Cleaning</CardTitle>
              <CardDescription>Perfect for busy families and high-traffic homes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-2">$149</div>
              <div className="text-sm text-muted-foreground mb-4">per visit</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">All living areas cleaned</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Kitchen & bathroom maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Vacuuming & mopping</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Dusting & surface cleaning</span>
                </li>
              </ul>
              <Button asChild className="w-full neon-glow">
                <Link href="/book?service=home-maintenance&frequency=weekly&price=149">Choose Weekly</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass border-border/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Repeat className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <Badge className="neon-glow">Best Value</Badge>
              </div>
              <CardTitle>Bi-Weekly Cleaning</CardTitle>
              <CardDescription>Ideal balance of cleanliness and affordability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-2">$179</div>
              <div className="text-sm text-muted-foreground mb-4">per visit</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Comprehensive home cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Deep kitchen & bathroom clean</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Floor care & maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Detailed dusting & organizing</span>
                </li>
              </ul>
              <Button asChild className="w-full neon-glow">
                <Link href="/book?service=home-maintenance&frequency=bi-weekly&price=179">Choose Bi-Weekly</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass border-border/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Home className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <Badge variant="outline">Flexible</Badge>
              </div>
              <CardTitle>Monthly Cleaning</CardTitle>
              <CardDescription>Maintenance cleaning for well-kept homes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-2">$229</div>
              <div className="text-sm text-muted-foreground mb-4">per visit</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Thorough monthly deep clean</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">All areas detailed cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Appliance exterior cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Baseboards & window sills</span>
                </li>
              </ul>
              <Button asChild className="w-full neon-glow">
                <Link href="/book?service=home-maintenance&frequency=monthly&price=229">Choose Monthly</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Why Choose Regular Maintenance?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <Clock className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-lg font-semibold text-foreground">Save Time</h3>
              <p className="text-muted-foreground text-sm">More time for what matters most to you</p>
            </div>
            <div className="text-center space-y-4">
              <Shield className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-lg font-semibold text-foreground">Consistent Quality</h3>
              <p className="text-muted-foreground text-sm">Same high standards every visit</p>
            </div>
            <div className="text-center space-y-4">
              <Calendar className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-lg font-semibold text-foreground">Flexible Scheduling</h3>
              <p className="text-muted-foreground text-sm">Schedule that works with your lifestyle</p>
            </div>
            <div className="text-center space-y-4">
              <Home className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-lg font-semibold text-foreground">Healthier Home</h3>
              <p className="text-muted-foreground text-sm">Regular cleaning maintains hygiene</p>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">What's Included in Every Visit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass border-border/20">
              <CardHeader>
                <CardTitle>Living Areas & Bedrooms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Dusting all surfaces and furniture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Vacuuming carpets and rugs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Mopping hard floors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Making beds and tidying</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Emptying trash bins</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-border/20">
              <CardHeader>
                <CardTitle>Kitchen & Bathrooms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Cleaning and sanitizing surfaces</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Scrubbing sinks and fixtures</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Cleaning appliance exteriors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Toilet cleaning and sanitizing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Mirror and glass cleaning</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Start Your Maintenance Plan Today</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us with their regular home maintenance. Flexible scheduling,
            consistent quality, and peace of mind.
          </p>
          
        </div>
      </div>
    </div>
  )
}
