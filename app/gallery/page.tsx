"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Star } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const beforeAfterImages = [
    {
      id: 1,
      category: "car",
      service: "Full Valet",
      before: "/dirty-car-before.png",
      after: "/clean-shiny-car.png",
      description: "BMW M3 - Full exterior and interior detail with ceramic coating",
    },
    {
      id: 2,
      category: "car",
      service: "Paint Correction",
      before: "/scratched-car-paint-before.png",
      after: "/perfect-car-paint.png",
      description: "Mercedes C-Class - Paint correction and protection film",
    },
    {
      id: 3,
      category: "home",
      service: "Deep Clean",
      before: "/messy-kitchen-before.png",
      after: "/spotless-kitchen.png",
      description: "Kitchen deep clean with appliance detailing",
    },
    {
      id: 4,
      category: "car",
      service: "Interior Detail",
      before: "/dirty-car-interior-before.png",
      after: "/pristine-car-interior-after.png",
      description: "Range Rover - Complete interior restoration and protection",
    },
  ]

  const videoTestimonials = [
    {
      id: 1,
      customer: "James Wilson",
      service: "Ceramic Coating",
      thumbnail: "/customer-testimonial-thumbnail.png",
      duration: "2:15",
    },
    {
      id: 2,
      customer: "Sarah Mitchell",
      service: "Home Deep Clean",
      thumbnail: "/home-cleaning-testimonial.png",
      duration: "1:45",
    },
  ]

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 neon-glow bg-primary/20 text-primary border-primary/30">Our Work Gallery</Badge>
          <h1 className="text-5xl font-bold mb-6 neon-text">Before & After Transformations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the incredible transformations we achieve with our premium cleaning and detailing services
          </p>
        </div>

        <Tabs defaultValue="before-after" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="before-after">Before & After</TabsTrigger>
            <TabsTrigger value="testimonials">Video Testimonials</TabsTrigger>
          </TabsList>

          <TabsContent value="before-after">
            <div className="grid md:grid-cols-2 gap-8">
              {beforeAfterImages.map((item) => (
                <Card
                  key={item.id}
                  className="glass border-border/20 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 gap-0">
                      <div className="relative">
                        <Image
                          src={item.before || "/placeholder.svg"}
                          alt="Before"
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover"
                        />
                        <Badge className="absolute top-2 left-2 bg-destructive/80 text-destructive-foreground">
                          Before
                        </Badge>
                      </div>
                      <div className="relative">
                        <Image
                          src={item.after || "/placeholder.svg"}
                          alt="After"
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover"
                        />
                        <Badge className="absolute top-2 right-2 bg-primary/80 text-primary-foreground">After</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-primary border-primary/30">
                          {item.service}
                        </Badge>
                        <Badge variant="secondary">{item.category === "car" ? "Car Detail" : "Home Clean"}</Badge>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="testimonials">
            <div className="grid md:grid-cols-2 gap-8">
              {videoTestimonials.map((video) => (
                <Card
                  key={video.id}
                  className="glass border-border/20 hover:border-primary/50 transition-all duration-300 overflow-hidden group"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={`${video.customer} testimonial`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                        <Button size="lg" className="rounded-full w-16 h-16 neon-glow">
                          <Play className="h-6 w-6 ml-1" />
                        </Button>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-background/80 text-foreground">
                        {video.duration}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{video.customer}</h3>
                      <p className="text-muted-foreground mb-3">{video.service} Experience</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-primary fill-current" />
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
