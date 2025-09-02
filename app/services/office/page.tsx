import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Star,
  Building,
  Coffee,
  Wifi,
  Phone,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function OfficePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200">
            <Briefcase className="h-4 w-4 mr-2" />
            Office Cleaning Services
          </Badge>

          <h1 className="text-5xl font-bold mb-6 text-foreground">Professional Office Cleaning</h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Create a productive and healthy work environment with our comprehensive office cleaning services. From
            corporate headquarters to small business offices, we maintain professional standards that impress clients
            and motivate employees.
          </p>

          
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Office Cleaning Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Daily Office Cleaning</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive daily cleaning including desks, floors, restrooms, and common areas to maintain a
                  pristine work environment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Desk and workstation sanitization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Floor vacuuming and mopping
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Restroom deep cleaning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Coffee className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Break Room & Kitchen</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized cleaning for office kitchens, break rooms, and dining areas with food-safe sanitization
                  protocols.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Appliance cleaning and sanitization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Countertop and sink deep clean
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Refrigerator and microwave cleaning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Conference Rooms</h3>
                <p className="text-muted-foreground mb-4">
                  Ensure your meeting spaces are always presentation-ready with thorough cleaning and setup services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Table and chair sanitization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    AV equipment dusting
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Whiteboard and glass cleaning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Wifi className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">IT Equipment Care</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized cleaning for computers, servers, and sensitive electronic equipment with anti-static
                  solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Computer and monitor cleaning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Keyboard and mouse sanitization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Server room maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Disinfection Services</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced disinfection protocols to maintain a healthy workplace and reduce sick days among staff.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    High-touch surface sanitization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Air quality improvement
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    EPA-approved disinfectants
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                <p className="text-muted-foreground mb-4">
                  Work around your business hours with flexible cleaning schedules including after-hours and weekend
                  services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    After-hours cleaning available
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Weekend and holiday service
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Emergency cleaning response
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
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Office Cleaning?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Professional Standards</h3>
              <p className="text-muted-foreground">
                Trained staff following industry best practices for commercial cleaning excellence.
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Reliable Service</h3>
              <p className="text-muted-foreground">
                Consistent, on-time service that you can depend on to maintain your professional image.
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fully Insured</h3>
              <p className="text-muted-foreground">
                Complete insurance coverage and bonded staff for your peace of mind and protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Office?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and customized cleaning plan for your office space.
          </p>

          
        </div>
      </section>
    </div>
  )
}
