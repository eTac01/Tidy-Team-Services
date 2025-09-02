import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, CheckCircle, Users, Sparkles, ArrowRight, Clock, Star, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function RetailServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500/30 to-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <ShoppingBag className="h-10 w-10 text-green-500" />
          </div>
          <Badge className="mb-6 bg-green-500/20 border-green-500/30 text-green-700">Retail Cleaning Services</Badge>
          <h1 className="text-5xl font-bold mb-6 text-foreground">Retail Space Excellence</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Create the perfect shopping environment with our specialized retail cleaning services. Maintain customer
            appeal and hygiene standards that drive sales and satisfaction.
          </p>
          
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Retail Cleaning Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/20 hover:border-green-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Shop Floors</h3>
                <p className="text-muted-foreground mb-4">
                  Daily maintenance of retail floors including high-traffic areas and customer walkways.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Daily floor cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Spill response
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Anti-slip treatments
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/20 hover:border-green-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Window & Display</h3>
                <p className="text-muted-foreground mb-4">
                  Professional window and display cleaning to showcase your products in the best light.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Streak-free windows
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Display case cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mirror polishing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/20 hover:border-green-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Areas</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized cleaning for fitting rooms, restrooms, and customer service areas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fitting room sanitization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Restroom maintenance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Seating area cleaning
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Retail Benefits */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Retail Businesses Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Off-Hours Service</h3>
              <p className="text-muted-foreground text-sm">
                Cleaning during closed hours to avoid disrupting customers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Brand Image</h3>
              <p className="text-muted-foreground text-sm">Maintain a pristine environment that reflects your brand</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer Safety</h3>
              <p className="text-muted-foreground text-sm">Ensure a safe, clean environment for all visitors</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Detail Focused</h3>
              <p className="text-muted-foreground text-sm">Attention to every detail that customers notice</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-border/20 p-8">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold mb-4">Enhance Your Customer Experience</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Create a welcoming retail environment that encourages customers to stay longer and return often.
              </p>
              
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
