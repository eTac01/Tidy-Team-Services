import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Key,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Star,
  Building,
  Home,
  FileText,
  Phone,
  Award,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function PropertyLettingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-indigo-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-indigo-100 text-indigo-800 border-indigo-200">
            <Key className="h-4 w-4 mr-2" />
            Property Management Cleaning
          </Badge>

          <h1 className="text-5xl font-bold mb-6 text-foreground">Property Letting & Estate Agent Services</h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Professional cleaning services for estate agents, property managers, and rental property owners. We help you
            maintain property values and ensure quick turnarounds between tenancies with comprehensive cleaning
            solutions.
          </p>

          
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Property Management Cleaning Solutions</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Home className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">End of Tenancy</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive deep cleaning for rental properties between tenancies to ensure deposit return and quick
                  re-letting.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Full property deep clean
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Inventory condition matching
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Deposit protection compliance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Void Property Cleaning</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized cleaning for vacant properties including deep sanitization and preparation for new
                  tenants.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Vacant property deep clean
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Sanitization and deodorizing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Move-in ready preparation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Viewing Preparation</h3>
                <p className="text-muted-foreground mb-4">
                  Quick turnaround cleaning to prepare properties for viewings and ensure the best first impression for
                  potential tenants.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Same-day viewing preparation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Key area focus cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Presentation enhancement
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Inventory Support</h3>
                <p className="text-muted-foreground mb-4">
                  Cleaning services aligned with property inventories and condition reports for accurate tenant
                  check-ins and check-outs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Inventory-matched cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Condition report support
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Documentation assistance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Regular Maintenance</h3>
                <p className="text-muted-foreground mb-4">
                  Ongoing cleaning services for occupied rental properties to maintain standards and protect property
                  investments.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Scheduled maintenance cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Property condition monitoring
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tenant satisfaction support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Portfolio Management</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive cleaning management for property portfolios with centralized booking and reporting
                  systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multi-property coordination
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Centralized reporting
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Volume discount pricing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Property Professionals Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Property Expertise</h3>
              <p className="text-muted-foreground">
                Deep understanding of property management needs and rental market requirements.
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quick Turnaround</h3>
              <p className="text-muted-foreground">
                Fast, efficient service to minimize void periods and maximize rental income potential.
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Reliable Partnership</h3>
              <p className="text-muted-foreground">
                Consistent, professional service you can depend on for all your property management needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Maximize Your Property Returns</h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with us to maintain your property portfolio and ensure quick, profitable tenancy turnovers.
          </p>

          
        </div>
      </section>
    </div>
  )
}
