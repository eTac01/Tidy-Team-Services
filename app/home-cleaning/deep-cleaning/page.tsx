import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Home, Sparkles, Clock, Shield, Star } from "lucide-react"
import Link from "next/link"

export default function DeepCleaningPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Enhanced background animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/15 rounded-full blur-xl animate-float delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary/8 rounded-full blur-3xl animate-float delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-primary/12 rounded-full blur-2xl animate-float delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 neon-glow">Home Cleaning Service</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Deep Cleaning Service</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your home with our comprehensive deep cleaning service. We tackle every corner, surface, and
            detail to restore your space to pristine condition.
          </p>
          
        </div>

        {/* Service Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="glass border-border/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Home className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <Badge variant="secondary">Most Popular</Badge>
              </div>
              <CardTitle>Standard Deep Clean</CardTitle>
              <CardDescription>Perfect for regular deep cleaning maintenance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-4">$299</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">All rooms deep cleaned</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Kitchen & bathroom sanitization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Floor deep cleaning & mopping</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Dusting & surface cleaning</span>
                </li>
              </ul>
              <Button className="w-full neon-glow">Choose Standard</Button>
            </CardContent>
          </Card>

          <Card className="glass border-border/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Sparkles className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <Badge className="neon-glow">Premium</Badge>
              </div>
              <CardTitle>Premium Deep Clean</CardTitle>
              <CardDescription>Comprehensive cleaning with extra attention to detail</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-4">$449</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Everything in Standard</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Inside appliances cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Window cleaning (interior)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Baseboards & light fixtures</span>
                </li>
              </ul>
              <Button className="w-full neon-glow">Choose Premium</Button>
            </CardContent>
          </Card>

          <Card className="glass border-border/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Star className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <Badge variant="outline">Ultimate</Badge>
              </div>
              <CardTitle>Ultimate Deep Clean</CardTitle>
              <CardDescription>The most thorough cleaning experience available</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-4">$649</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Everything in Premium</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Carpet deep cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Upholstery cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Garage & basement cleaning</span>
                </li>
              </ul>
              <Button className="w-full neon-glow">Choose Ultimate</Button>
            </CardContent>
          </Card>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Deep Cleaning Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Assessment</h3>
              <p className="text-muted-foreground text-sm">
                We evaluate your home and create a customized cleaning plan
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Preparation</h3>
              <p className="text-muted-foreground text-sm">We prepare the space and protect your belongings</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Deep Clean</h3>
              <p className="text-muted-foreground text-sm">Thorough cleaning of every surface and corner</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Final Inspection</h3>
              <p className="text-muted-foreground text-sm">Quality check to ensure perfection</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="glass border-border/20 text-center">
            <CardContent className="pt-6">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Time Efficient</h3>
              <p className="text-muted-foreground text-sm">Professional team completes deep cleaning in 4-6 hours</p>
            </CardContent>
          </Card>
          <Card className="glass border-border/20 text-center">
            <CardContent className="pt-6">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Eco-Friendly</h3>
              <p className="text-muted-foreground text-sm">Safe, non-toxic cleaning products for your family</p>
            </CardContent>
          </Card>
          <Card className="glass border-border/20 text-center">
            <CardContent className="pt-6">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Satisfaction Guaranteed</h3>
              <p className="text-muted-foreground text-sm">100% satisfaction guarantee or we'll make it right</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center glass rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready for a Spotless Home?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience the difference of professional deep cleaning. Book your service today and enjoy a pristine,
            healthy living environment.
          </p>
          
        </div>
      </div>
    </div>
  )
}
