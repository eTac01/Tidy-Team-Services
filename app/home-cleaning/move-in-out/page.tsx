import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Home, Truck, Clock, Shield, Star, Package } from "lucide-react"
import Link from "next/link"

export default function MoveInOutPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Enhanced background animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/15 rounded-full blur-xl animate-float delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary/8 rounded-full blur-3xl animate-float delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 neon-glow">Move In/Out Service</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Move In/Out Cleaning</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Make your move stress-free with our comprehensive move-in and move-out cleaning services. Perfect for
            getting your deposit back or starting fresh in your new home.
          </p>
        </div>

        {/* Service Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="glass border-border/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Package className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <Badge variant="secondary">Move Out</Badge>
              </div>
              <CardTitle>Move-Out Cleaning</CardTitle>
              <CardDescription>Get your full deposit back with our thorough move-out service</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-4">$399</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Deep clean all rooms</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Inside appliances cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Cabinet interiors & exteriors</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Baseboards & window sills</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Light fixtures & ceiling fans</span>
                </li>
              </ul>
              <Button className="w-full neon-glow">Book Move-Out</Button>
            </CardContent>
          </Card>

          <Card className="glass border-border/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Home className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <Badge className="neon-glow">Move In</Badge>
              </div>
              <CardTitle>Move-In Cleaning</CardTitle>
              <CardDescription>Start fresh in your new home with a pristine clean space</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-4">$349</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Sanitize all surfaces</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Deep clean bathrooms & kitchen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Floor deep cleaning & polish</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Window cleaning (interior)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Dust removal & air freshening</span>
                </li>
              </ul>
              <Button className="w-full neon-glow">Book Move-In</Button>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Checklist */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Complete Cleaning Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Home className="h-5 w-5 text-primary" />
                  <span>Kitchen</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span className="text-xs">Inside & outside of all appliances</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span className="text-xs">Cabinet interiors & exteriors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span className="text-xs">Countertops & backsplash</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span className="text-xs">Sink & faucet deep clean</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span className="text-xs">Floor scrubbing & mopping</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Bathrooms</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span className="text-xs">Toilet deep clean & sanitize</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span className="text-xs">Shower/tub scrubbing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span className="text-xs">Vanity & mirror cleaning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span className="text-xs">Tile & grout cleaning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span className="text-xs">Floor sanitization</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span>All Rooms</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span className="text-xs">Baseboards & trim cleaning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span className="text-xs">Light switches & outlets</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span className="text-xs">Window sills & frames</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span className="text-xs">Closet cleaning (if empty)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span className="text-xs">Final vacuum & mop</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <Card className="glass border-border/20 text-center">
            <CardContent className="pt-6">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Same Day Service</h3>
              <p className="text-muted-foreground text-sm">Available for urgent move-out needs</p>
            </CardContent>
          </Card>
          <Card className="glass border-border/20 text-center">
            <CardContent className="pt-6">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Deposit Guarantee</h3>
              <p className="text-muted-foreground text-sm">We help ensure you get your deposit back</p>
            </CardContent>
          </Card>
          <Card className="glass border-border/20 text-center">
            <CardContent className="pt-6">
              <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Flexible Timing</h3>
              <p className="text-muted-foreground text-sm">Work around your moving schedule</p>
            </CardContent>
          </Card>
          <Card className="glass border-border/20 text-center">
            <CardContent className="pt-6">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Quality Assured</h3>
              <p className="text-muted-foreground text-sm">Satisfaction guaranteed or we return</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center glass rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Make Your Move Stress-Free</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're moving in or out, let us handle the cleaning so you can focus on what matters. Professional
            service that landlords and new homeowners love.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground shadow hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
