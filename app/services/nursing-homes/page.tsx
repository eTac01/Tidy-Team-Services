import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Star,
  Building,
  Home,
  Utensils,
  Phone,
  Bed,
} from "lucide-react"
import Link from "next/link"

export default function NursingHomesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-pink-50 to-pink-100">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-pink-100 text-pink-800 border-pink-200">
            <Heart className="h-4 w-4 mr-2" />
            Care Home Cleaning Services
          </Badge>

          <h1 className="text-5xl font-bold mb-6 text-foreground">Nursing Home & Care Facility Cleaning</h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Compassionate cleaning services for nursing homes and residential care facilities. We create safe,
            comfortable environments that feel like home while maintaining the highest hygiene standards.
          </p>

          
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Specialized Care Home Cleaning</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-pink-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Bed className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Resident Rooms</h3>
                <p className="text-muted-foreground mb-4">
                  Gentle, respectful cleaning of private rooms with attention to personal belongings and resident
                  comfort.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Personal space sanitization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bathroom deep cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Furniture and surface care
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-pink-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Common Areas</h3>
                <p className="text-muted-foreground mb-4">
                  Welcoming cleaning of lounges, activity rooms, and social spaces where residents gather and families
                  visit.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lounge and sitting areas
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Activity and therapy rooms
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reception and visiting areas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-pink-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Utensils className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Dining Areas</h3>
                <p className="text-muted-foreground mb-4">
                  Food-safe cleaning of dining rooms, kitchens, and food preparation areas with HACCP compliance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dining room sanitization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Kitchen deep cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Food preparation areas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-pink-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Administrative Areas</h3>
                <p className="text-muted-foreground mb-4">
                  Professional cleaning of offices, nursing stations, and administrative areas with confidentiality
                  respect.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Office and desk cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Nursing station maintenance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Medical record areas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-pink-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Infection Control</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized disinfection protocols to protect vulnerable residents from infections and maintain health
                  standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    High-touch surface disinfection
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Isolation room protocols
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Outbreak response cleaning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-pink-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Home className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Specialized Care</h3>
                <p className="text-muted-foreground mb-4">
                  Dementia-friendly cleaning approaches and specialized care for residents with specific health
                  conditions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dementia-sensitive cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Quiet operation protocols
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Resident routine respect
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
          <h2 className="text-3xl font-bold mb-8">Why Care Homes Trust Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Compassionate Service</h3>
              <p className="text-muted-foreground">
                Staff trained in elderly care sensitivity with respectful, gentle cleaning approaches.
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
              <p className="text-muted-foreground">
                Cleaning schedules that work around resident activities, meal times, and care routines.
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">CQC Compliant</h3>
              <p className="text-muted-foreground">
                Full compliance with Care Quality Commission standards and care home regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Create a Home-Like Environment</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us help you maintain a clean, comfortable, and caring environment for your residents.
          </p>

          
        </div>
      </section>
    </div>
  )
}
