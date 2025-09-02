import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, CheckCircle, Clock, Shield, Users, ArrowRight, Star, Award, Zap, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function CommercialServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Building2 className="h-10 w-10 text-blue-500" />
          </div>
          <Badge className="mb-6 bg-blue-500/20 border-blue-500/30 text-blue-700">Commercial Cleaning Services</Badge>
          <h1 className="text-5xl font-bold mb-6 text-foreground">Professional Commercial Cleaning</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comprehensive cleaning solutions for office buildings, retail spaces, and business facilities. Maintain a
            professional image with our reliable commercial cleaning services.
          </p>
          
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Commercial Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/20 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Office Buildings</h3>
                <p className="text-muted-foreground mb-4">
                  Complete office cleaning including workstations, meeting rooms, reception areas, and common spaces.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Daily office cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Sanitization services
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Carpet & upholstery cleaning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/20 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Retail Spaces</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized cleaning for retail environments to maintain customer appeal and hygiene standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Shop floor maintenance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Window & display cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Restroom sanitization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/20 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Business Facilities</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive facility management and cleaning for various business environments.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Deep cleaning services
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Waste management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Emergency cleaning
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Commercial Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-muted-foreground text-sm">Available 24/7 to work around your business hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Certified Team</h3>
              <p className="text-muted-foreground text-sm">Fully trained and insured cleaning professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
              <p className="text-muted-foreground text-sm">Same-day service available for urgent cleaning needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground text-sm">100% satisfaction guarantee on all services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-border/20 p-8">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Business Image?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a free consultation and customized cleaning plan for your commercial space.
              </p>
              
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
