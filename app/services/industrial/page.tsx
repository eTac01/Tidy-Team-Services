import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, CheckCircle, Shield, Wrench, ArrowRight, AlertTriangle, HardHat, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function IndustrialServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500/30 to-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Factory className="h-10 w-10 text-orange-500" />
          </div>
          <Badge className="mb-6 bg-orange-500/20 border-orange-500/30 text-orange-700">
            Industrial Cleaning Services
          </Badge>
          <h1 className="text-5xl font-bold mb-6 text-foreground">Heavy-Duty Industrial Cleaning</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Specialized cleaning solutions for manufacturing plants, warehouses, and industrial facilities.
            Safety-compliant services with industrial-grade equipment and expertise.
          </p>
          
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Industrial Cleaning Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/20 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Manufacturing Plants</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive cleaning for production facilities, machinery areas, and manufacturing floors.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Production line cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Machinery degreasing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Floor coating maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/20 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Warehouses</h3>
                <p className="text-muted-foreground mb-4">
                  Large-scale warehouse cleaning including high-level cleaning and storage area maintenance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    High-level dusting
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Loading dock cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Inventory area maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/20 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <HardHat className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Safety Compliance</h3>
                <p className="text-muted-foreground mb-4">
                  OSHA-compliant cleaning procedures with proper safety protocols and documentation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    OSHA compliance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Safety documentation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Hazmat handling
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Specialized Industrial Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-orange-500 mr-3" />
                  <h3 className="text-xl font-semibold">Hazardous Material Cleanup</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Certified hazardous material cleanup and disposal services following strict safety protocols.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Chemical spill cleanup
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Proper waste disposal
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Environmental compliance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-orange-500 mr-3" />
                  <h3 className="text-xl font-semibold">Emergency Response</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  24/7 emergency industrial cleaning services for urgent situations and facility incidents.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 availability
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rapid response team
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Incident documentation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-border/20 p-8">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold mb-4">Need Industrial Cleaning Expertise?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our industrial cleaning specialists for a comprehensive facility assessment and custom solution.
              </p>
              
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
