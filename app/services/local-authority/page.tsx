import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Star,
  Building,
  Gavel,
  FileText,
  Phone,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function LocalAuthorityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-red-100 text-red-800 border-red-200">
            <MapPin className="h-4 w-4 mr-2" />
            Local Authority Services
          </Badge>

          <h1 className="text-5xl font-bold mb-6 text-foreground">Local Authority Cleaning Services</h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Trusted cleaning partner for council buildings, public facilities, and government offices. We understand the
            unique requirements of public sector cleaning with full compliance to health and safety regulations.
          </p>

          
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Public Sector Cleaning Solutions</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Council Buildings</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive cleaning for town halls, civic centers, and administrative buildings with public access
                  considerations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Public area maintenance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Office and meeting room cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reception and waiting areas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community Centers</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized cleaning for multi-purpose community facilities including sports halls, meeting rooms, and
                  event spaces.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Sports facility cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Event space preparation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Kitchen and catering areas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Gavel className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Court Houses</h3>
                <p className="text-muted-foreground mb-4">
                  High-security cleaning services for judicial facilities with strict protocols and background-checked
                  staff.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Security-cleared personnel
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Courtroom maintenance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Confidential document handling
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Libraries & Archives</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized cleaning for document preservation areas, reading rooms, and public library spaces.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Document-safe cleaning methods
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Climate-controlled area maintenance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Public computer area cleaning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Emergency Services</h3>
                <p className="text-muted-foreground mb-4">
                  24/7 cleaning support for fire stations, police stations, and emergency response facilities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 availability
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Decontamination services
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Equipment cleaning protocols
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Compliance & Standards</h3>
                <p className="text-muted-foreground mb-4">
                  Full compliance with public sector regulations, health and safety standards, and environmental
                  requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ISO 9001 certified processes
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    COSHH compliance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Environmental sustainability
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
          <h2 className="text-3xl font-bold mb-8">Why Local Authorities Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Public Sector Experience</h3>
              <p className="text-muted-foreground">
                Over 15 years serving local authorities with understanding of public sector requirements.
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Flexible Contracts</h3>
              <p className="text-muted-foreground">
                Adaptable service agreements that work within public sector budgets and procurement processes.
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Full Compliance</h3>
              <p className="text-muted-foreground">
                Complete adherence to all health, safety, and environmental regulations required by law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Partner with a Trusted Public Sector Cleaner</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us for tender documentation and competitive quotes for your local authority cleaning needs.
          </p>

          
        </div>
      </section>
    </div>
  )
}
