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
  Stethoscope,
  Activity,
  Phone,
  Award,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"

export default function NHSPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-teal-100 text-teal-800 border-teal-200">
            <Heart className="h-4 w-4 mr-2" />
            NHS Healthcare Cleaning
          </Badge>

          <h1 className="text-5xl font-bold mb-6 text-foreground">NHS Healthcare Facility Cleaning</h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Specialized cleaning services for NHS hospitals, clinics, and healthcare facilities. We maintain the highest
            standards of hygiene and infection control to protect patients, staff, and visitors.
          </p>

          
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Healthcare Cleaning Specialists</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Stethoscope className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Clinical Areas</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized cleaning for operating theaters, ICUs, and clinical areas with strict infection control
                  protocols.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Operating theater deep cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ICU and critical care units
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Isolation room protocols
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Patient Wards</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive ward cleaning including patient rooms, nursing stations, and common areas with patient
                  comfort in mind.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Patient room sanitization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Nursing station maintenance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bathroom and shower facilities
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Public Areas</h3>
                <p className="text-muted-foreground mb-4">
                  High-traffic area cleaning for reception, waiting rooms, corridors, and visitor facilities with
                  continuous maintenance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reception and waiting areas
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Corridor and stairwell cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Visitor facilities maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <AlertTriangle className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Infection Control</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced disinfection and decontamination services following NHS infection prevention and control
                  guidelines.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    MRSA and C.diff protocols
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Terminal cleaning procedures
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Outbreak response cleaning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Activity className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Emergency Response</h3>
                <p className="text-muted-foreground mb-4">
                  24/7 emergency cleaning services for spills, contamination incidents, and urgent sanitization
                  requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 emergency response
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Biohazard cleanup
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rapid deployment teams
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground mb-4">
                  Rigorous quality control with regular audits, ATP testing, and compliance monitoring to NHS standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ATP hygiene monitoring
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Regular quality audits
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    NHS compliance reporting
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
          <h2 className="text-3xl font-bold mb-8">Why NHS Trusts Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Healthcare Expertise</h3>
              <p className="text-muted-foreground">
                Specialized training in healthcare cleaning with deep understanding of clinical requirements.
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
              <p className="text-muted-foreground">
                Round-the-clock service to support healthcare operations without disruption to patient care.
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Full Accreditation</h3>
              <p className="text-muted-foreground">
                NHS approved contractor with all necessary certifications and insurance coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Protect Your Patients and Staff</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us for a comprehensive healthcare cleaning assessment and competitive quote.
          </p>

          
        </div>
      </section>
    </div>
  )
}
