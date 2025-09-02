import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Star,
  Building,
  BookOpen,
  Utensils,
  Phone,
  Activity,
} from "lucide-react"
import Link from "next/link"

export default function SchoolsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-200">
            <GraduationCap className="h-4 w-4 mr-2" />
            Educational Facility Cleaning
          </Badge>

          <h1 className="text-5xl font-bold mb-6 text-foreground">School & Educational Facility Cleaning</h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Creating safe, healthy learning environments for students and staff. Our specialized school cleaning
            services support education by maintaining clean, hygienic facilities that promote learning and wellbeing.
          </p>

          
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive School Cleaning Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Classrooms</h3>
                <p className="text-muted-foreground mb-4">
                  Daily cleaning of classrooms, desks, whiteboards, and learning equipment to maintain optimal learning
                  conditions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Desk and chair sanitization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Whiteboard and display cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Floor care and maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Common Areas</h3>
                <p className="text-muted-foreground mb-4">
                  High-traffic area cleaning including corridors, reception, staff rooms, and assembly halls with
                  continuous maintenance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Corridor and stairwell cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reception area maintenance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Assembly hall deep cleaning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Utensils className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Dining Facilities</h3>
                <p className="text-muted-foreground mb-4">
                  Food-safe cleaning of canteens, kitchens, and dining areas with HACCP compliance for student meal
                  services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Canteen and dining hall cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Kitchen deep sanitization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Food preparation area maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Activity className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sports Facilities</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized cleaning for gymnasiums, sports halls, changing rooms, and outdoor sports equipment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Gymnasium floor care
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Changing room sanitization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Sports equipment cleaning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Administrative Areas</h3>
                <p className="text-muted-foreground mb-4">
                  Professional cleaning of offices, staff rooms, and administrative areas with respect for confidential
                  materials.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Office and desk cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Staff room maintenance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Meeting room preparation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Health & Safety</h3>
                <p className="text-muted-foreground mb-4">
                  Child-safe cleaning products and protocols with enhanced sanitization to reduce illness transmission.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Child-safe cleaning products
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Enhanced sanitization protocols
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    DBS-checked cleaning staff
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
          <h2 className="text-3xl font-bold mb-8">Why Schools Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Education Focused</h3>
              <p className="text-muted-foreground">
                Understanding of educational environments with minimal disruption to learning activities.
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Flexible Timing</h3>
              <p className="text-muted-foreground">
                Cleaning schedules that work around school hours, events, and holiday periods.
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Child Safety First</h3>
              <p className="text-muted-foreground">
                DBS-checked staff using child-safe products with comprehensive safeguarding protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-yellow-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Support Better Learning Environments</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us for a school cleaning assessment and see how we can support your educational mission.
          </p>

          
        </div>
      </section>
    </div>
  )
}
