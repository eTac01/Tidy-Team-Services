import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Play } from "lucide-react"

type VideoItem = {
  title: string
  duration: string
  views: string
  category: string
  thumbnail: string
  videoSrc: string
  description: string
}

const videos: VideoItem[] = [
  {
    title: "Proper Car Washing Technique",
    duration: "12:34",
    views: "45K",
    category: "Basics",
    thumbnail: "/car-washing-tutorial.png",
    // CC sample video source used as placeholder
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description:
      "Learn a safe, swirl-minimizing wash process using the two-bucket method, pre-rinse, foam, and proper drying techniques.",
  },
  {
    title: "How to Apply Ceramic Coating",
    duration: "18:45",
    views: "32K",
    category: "Advanced",
    thumbnail: "/ceramic-coating-application.png",
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description:
      "Step-by-step overview of surface prep, panel wipe, application technique, leveling, and curing best practices.",
  },
  {
    title: "Interior Deep Cleaning Process",
    duration: "15:22",
    views: "28K",
    category: "Interior",
    thumbnail: "/interior-car-cleaning.png",
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    description:
      "Comprehensive interior detail: vacuuming, stain removal, plastics cleaning, leather care, and safe finishing.",
  },
  {
    title: "Paint Correction Basics",
    duration: "22:15",
    views: "19K",
    category: "Advanced",
    thumbnail: "/car-paint-correction.png",
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    description:
      "Understand defects, pad and compound selection, test spots, and safe polishing fundamentals to improve gloss.",
  },
]

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

export default function VideoPage({ params }: { params: { slug: string } }) {
  const video = videos.find((v) => slugify(v.title) === params.slug)
  if (!video) return notFound()

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <Badge className="bg-primary/90 text-primary-foreground">{video.category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{video.duration}</span>
          </div>
          <div className="text-sm text-muted-foreground">{video.views} views</div>
        </div>

        <h1 className="text-3xl font-bold text-balance">{video.title}</h1>

        <Card className="glass border-border/20 overflow-hidden">
          <CardContent className="p-0">
            <video
              className="w-full h-auto"
              controls
              preload="metadata"
              poster={video.thumbnail || "/car-care-video-poster.png"}
            >
              <source src={video.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </CardContent>
        </Card>

        <p className="text-muted-foreground leading-relaxed">{video.description}</p>

        <div className="flex items-center gap-3">
          <Link href="/education">
            <Button variant="outline">Back to Education</Button>
          </Link>
          <Link href="/education">
            <Button className="group">
              Explore more tutorials
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Suggested videos */}
        <div className="pt-8">
          <h2 className="text-xl font-semibold mb-4">You might also like</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {videos
              .filter((v) => v.title !== video.title)
              .slice(0, 2)
              .map((v) => (
                <Link key={v.title} href={`/education/videos/${slugify(v.title)}`} className="group">
                  <Card className="glass border-border/20 overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="relative">
                      <img
                        src={v.thumbnail || "/placeholder.svg?height=120&width=240&query=car%20care%20thumbnail"}
                        alt={v.title}
                        className="w-full h-28 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center">
                          <Play className="h-5 w-5 text-white ml-1" />
                        </div>
                      </div>
                      <Badge className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-xs">
                        {v.category}
                      </Badge>
                    </div>
                    <CardContent className="p-3">
                      <div className="text-sm font-medium line-clamp-1 group-hover:text-primary">{v.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {v.views} views • {v.duration}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
