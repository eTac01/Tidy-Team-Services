"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Shield,
  Zap,
  Sparkles,
  CheckCircle,
  Play,
  Users,
  Award,
  Clock,
  Building2,
  Factory,
  ShoppingBag,
  Briefcase,
  MapPin,
  Heart,
  GraduationCap,
  Hammer,
  Key,
  X,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function HomePage() {
  const [showVideoModal, setShowVideoModal] = useState(false)

  return (
    <div className="min-h-screen relative">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10" />
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 text-center">
          <Badge className="mb-6 md:mb-8 text-xs sm:text-sm md:text-base font-medium tracking-wide text-primary bg-primary/10">
            Premium Car Detailing & Home Services
          </Badge>

          <h1 className="text-balance break-words text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight md:leading-[1.1] font-bold mb-6 md:mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Shine Beyond Limits
          </h1>

          <p className="text-pretty text-base sm:text-lg text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the future of car detailing and home cleaning with our premium, technology-driven services that
            deliver perfection every time. Where innovation meets excellence.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>5,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span>Industry Leading Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Same Day Service</span>
            </div>
          </div>
        </div>
      </section>

      {showVideoModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden glass">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              playsInline
              preload="metadata"
              poster="/professional-car-detailing-service-demonstration.png"
            >
              {/* Primary local source you can replace later by overwriting this file */}
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              {/* Optional remote fallback keeps playback working if local file is removed */}
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <section className="py-16 sm:py-24 px-4 relative z-10 bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 neon-text">See Us in Action</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch how our professional team transforms vehicles and homes with precision and care
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div
              className="relative aspect-video rounded-2xl overflow-hidden glass border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer hover-lift"
              onClick={() => setShowVideoModal(true)}
            >
              <Image
                src="/professional-car-detailing-service-team-working-on.png"
                alt="Professional car detailing demonstration"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 896px"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-xl font-bold mb-2">Professional Service Demo</h3>
                <p className="text-white/80 text-sm">See our expert techniques and premium results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 neon-text">Our Premium Services</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology meets traditional craftsmanship to deliver unparalleled results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Link href="/services/interior">
              <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full hover-lift">
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300 animate-pulse-glow">
                    <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Car Detailing</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 flex-grow">
                    Premium interior and exterior detailing services with nano-technology protection
                  </p>
                  <div className="flex items-center justify-center text-xs sm:text-sm text-primary">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span>75% Focus</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/paint-protection">
              <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full hover-lift">
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300 service-exterior-glow">
                    <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Paint Protection</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-grow">
                    Advanced ceramic coating and protection films with lifetime warranties
                  </p>
                  <div className="flex items-center justify-center text-sm text-primary">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span>10 Year Warranty</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/maintenance">
              <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full hover-lift">
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300 service-maintenance-glow">
                    <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Maintenance Plans</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-grow">
                    Subscription packages for regular upkeep with smart scheduling
                  </p>
                  <div className="flex items-center justify-center text-sm text-primary">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span>Save 30%</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/home-cleaning">
              <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full hover-lift">
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300 service-interior-glow">
                    <Star className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Home Cleaning</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-grow">
                    Professional residential cleaning services with eco-friendly solutions
                  </p>
                  <div className="flex items-center justify-center text-sm text-primary">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span>25% Focus</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 neon-text">Who We Serve</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by diverse clients across all sectors with tailored solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 md:mb-12">
            <Link href="/services/commercial">
              <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] hover-lift">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500/30 to-blue-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-blue-500/40 group-hover:to-blue-500/20 transition-all duration-300">
                    <Building2 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-blue-500" />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-1 sm:mb-2 md:mb-3 leading-tight">
                    Commercial
                  </h3>
                  <p className="text-xs sm:text-xs md:text-sm text-muted-foreground leading-tight">
                    Office buildings, retail spaces, and business facilities
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/industrial">
              <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] hover-lift">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-orange-500/30 to-orange-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-orange-500/40 group-hover:to-orange-500/20 transition-all duration-300">
                    <Factory className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-orange-500" />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-1 sm:mb-2 md:mb-3 leading-tight">
                    Industrial
                  </h3>
                  <p className="text-xs sm:text-xs md:text-sm text-muted-foreground leading-tight">
                    Manufacturing plants, warehouses, and industrial facilities
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/retail">
              <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] hover-lift">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-500/30 to-green-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-green-500/40 group-hover:to-green-500/20 transition-all duration-300">
                    <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-green-500" />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-1 sm:mb-2 md:mb-3 leading-tight">
                    Retail
                  </h3>
                  <p className="text-xs sm:text-xs md:text-sm text-muted-foreground leading-tight">
                    Shops, showrooms, and customer-facing spaces
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/office">
              <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] hover-lift">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-purple-500/40 group-hover:to-purple-500/20 transition-all duration-300">
                    <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-purple-500" />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-1 sm:mb-2 md:mb-3 leading-tight">
                    Office
                  </h3>
                  <p className="text-xs sm:text-xs md:text-sm text-muted-foreground leading-tight">
                    Corporate offices and professional workspaces
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/local-authority">
              <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] hover-lift">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-red-500/30 to-red-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-red-500/40 group-hover:to-red-500/20 transition-all duration-300">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-red-500" />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-1 sm:mb-2 md:mb-3 leading-tight">
                    Local Authority
                  </h3>
                  <p className="text-xs sm:text-xs md:text-sm text-muted-foreground leading-tight">
                    Council buildings and public facilities
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/nhs">
              <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] hover-lift">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-teal-500/30 to-teal-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-teal-500/40 group-hover:to-teal-500/20 transition-all duration-300">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-teal-500" />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-1 sm:mb-2 md:mb-3 leading-tight">
                    NHS Authority
                  </h3>
                  <p className="text-xs sm:text-xs md:text-sm text-muted-foreground leading-tight">
                    Hospitals, clinics, and healthcare facilities
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/nursing-homes">
              <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] hover-lift">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-pink-500/30 to-pink-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-pink-500/40 group-hover:to-pink-500/20 transition-all duration-300">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-pink-500" />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-1 sm:mb-2 md:mb-3 leading-tight">
                    Nursing Homes
                  </h3>
                  <p className="text-xs sm:text-xs md:text-sm text-muted-foreground leading-tight">
                    Care facilities and residential homes
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/schools">
              <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] hover-lift">
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-yellow-500/30 to-yellow-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-yellow-500/40 group-hover:to-yellow-500/20 transition-all duration-300">
                    <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-yellow-500" />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-1 sm:mb-2 md:mb-3 leading-tight">
                    Schools
                  </h3>
                  <p className="text-xs sm:text-xs md:text-sm text-muted-foreground leading-tight">
                    Educational institutions and learning facilities
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/builders-cleans">
              <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] hover-lift">
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-500/30 to-amber-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-amber-500/40 group-hover:to-amber-500/20 transition-all duration-300">
                    <Hammer className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-amber-500" />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-1 sm:mb-2 md:mb-3 leading-tight">
                    Builders Cleans
                  </h3>
                  <p className="text-xs sm:text-xs md:text-sm text-muted-foreground leading-tight">
                    Post-construction and renovation cleaning
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/property-letting">
              <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] hover-lift">
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-indigo-500/30 to-indigo-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:from-indigo-500/40 group-hover:to-indigo-500/20 transition-all duration-300">
                    <Key className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-indigo-500" />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-1 sm:mb-2 md:mb-3 leading-tight">
                    Property Letting
                  </h3>
                  <p className="text-xs sm:text-xs md:text-sm text-muted-foreground leading-tight">
                    Estate agents and rental property management
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
            Free consultation • Same-day booking • 100% satisfaction guarantee
          </p>
        </div>
      </section>
    </div>
  )
}
