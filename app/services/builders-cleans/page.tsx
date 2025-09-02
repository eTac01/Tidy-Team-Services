import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Hammer,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Star,
  Building,
  HardHat,
  Wrench,
  Phone,
  Award,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"

export default function BuildersCleansPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">
            <Hammer className="h-4 w-4 mr-2" />
            Post-Construction Cleaning
          </Badge>

          <h1 className="text-5xl font-bold mb-6 text-foreground">Builders Cleans & Post-Construction Services</h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Professional post-construction cleaning services for builders, contractors, and property developers. We
            transform construction sites into pristine, move-in ready spaces with thorough deep cleaning and debris
            removal.
          </p>

          
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Post-Construction Cleaning Specialists</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <HardHat className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Rough Clean</h3>
                <p className="text-muted-foreground mb-4">
                  Initial post-construction cleaning including debris removal, dust cleaning, and basic surface
                  preparation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Construction debris removal
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Heavy dust and dirt cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Surface preparation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Final Clean</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed final cleaning to make properties move-in ready with attention to every surface and fixture.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Window and glass cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fixture and fitting polish
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Floor deep cleaning and sealing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Renovation Cleaning</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized cleaning for renovation projects including paint splatter removal and restoration
                  cleaning.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Paint and adhesive removal
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Restoration surface cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Protective film removal
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Commercial Projects</h3>
                <p className="text-muted-foreground mb-4">
                  Large-scale cleaning for commercial construction projects including offices, retail spaces, and
                  warehouses.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Large-scale project management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multi-floor coordination
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tight deadline delivery
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <AlertTriangle className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Hazardous Material</h3>
                <p className="text-muted-foreground mb-4">
                  Safe handling and removal of construction-related hazardous materials with proper disposal protocols.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Asbestos-safe procedures
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Chemical residue removal
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Proper waste disposal
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive quality checks and snagging list completion to ensure properties meet handover
                  standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Pre-handover inspections
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Snagging list completion
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Quality certification
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
          <h2 className="text-3xl font-bold mb-8">Why Builders Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Construction Experience</h3>
              <p className="text-muted-foreground">
                Extensive experience with construction sites and understanding of building trade requirements.
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Project Deadlines</h3>
              <p className="text-muted-foreground">
                Reliable service delivery to meet tight construction deadlines and handover schedules.
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Health & Safety</h3>
              <p className="text-muted-foreground">
                Full health and safety compliance with construction site protocols and insurance coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Handover?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get your construction project ready for handover with our professional post-construction cleaning services.
          </p>

          
        </div>
      </section>
    </div>
  )
}
