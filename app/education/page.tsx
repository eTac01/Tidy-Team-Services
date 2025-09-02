import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import {
  BookOpen,
  Play,
  Search,
  Clock,
  User,
  ArrowRight,
  Lightbulb,
  Shield,
  Droplets,
  Sparkles,
  Calendar,
} from "lucide-react"

// Helper function to create slugs from titles
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

export default function EducationPage() {
  const featuredArticles = [
    {
      title: "Complete Guide to Ceramic Coating",
      excerpt: "Everything you need to know about ceramic coating benefits, application, and maintenance.",
      category: "Protection",
      readTime: "8 min read",
      author: "Mike Johnson",
      date: "Dec 15, 2024",
      image: "/ceramic-coated-car.png",
      featured: true,
    },
    {
      title: "DIY Interior Cleaning Tips",
      excerpt: "Professional techniques you can use at home to keep your interior spotless.",
      category: "Maintenance",
      readTime: "5 min read",
      author: "Sarah Chen",
      date: "Dec 12, 2024",
      image: "/car-interior-cleaning.png",
      featured: true,
    },
    {
      title: "Paint Protection Film vs Ceramic Coating",
      excerpt: "Detailed comparison to help you choose the right protection for your vehicle.",
      category: "Protection",
      readTime: "6 min read",
      author: "Alex Rodriguez",
      date: "Dec 10, 2024",
      image: "/car-paint-protection.png",
      featured: true,
    },
  ]

  const videoTutorials = [
    {
      title: "Proper Car Washing Technique",
      duration: "12:34",
      views: "45K",
      category: "Basics",
      thumbnail: "/car-washing-tutorial.png",
    },
    {
      title: "How to Apply Ceramic Coating",
      duration: "18:45",
      views: "32K",
      category: "Advanced",
      thumbnail: "/ceramic-coating-application.png",
    },
    {
      title: "Interior Deep Cleaning Process",
      duration: "15:22",
      views: "28K",
      category: "Interior",
      thumbnail: "/interior-car-cleaning.png",
    },
    {
      title: "Paint Correction Basics",
      duration: "22:15",
      views: "19K",
      category: "Advanced",
      thumbnail: "/car-paint-correction.png",
    },
  ]

  const quickTips = [
    {
      icon: Droplets,
      title: "Two-Bucket Method",
      tip: "Always use two buckets when washing - one for soapy water, one for rinsing your mitt.",
    },
    {
      icon: Shield,
      title: "Protect Your Paint",
      tip: "Never wash your car in direct sunlight. Choose shade or early morning/evening hours.",
    },
    {
      icon: Sparkles,
      title: "Microfiber Care",
      tip: "Wash microfiber towels separately without fabric softener to maintain their effectiveness.",
    },
    {
      icon: Lightbulb,
      title: "Clay Bar Technique",
      tip: "Use a clay bar every 6 months to remove embedded contaminants from your paint.",
    },
  ]

  const categories = [
    { name: "All Articles", count: 24, active: true },
    { name: "Basics", count: 8, active: false },
    { name: "Protection", count: 6, active: false },
    { name: "Interior", count: 5, active: false },
    { name: "Advanced", count: 5, active: false },
  ]

  const recentArticles = [
    {
      title: "Winter Car Care Essentials",
      category: "Seasonal",
      readTime: "4 min read",
      date: "Dec 8, 2024",
    },
    {
      title: "Understanding Paint Correction",
      category: "Advanced",
      readTime: "7 min read",
      date: "Dec 5, 2024",
    },
    {
      title: "Leather Care and Conditioning",
      category: "Interior",
      readTime: "5 min read",
      date: "Dec 3, 2024",
    },
    {
      title: "Wheel and Tire Maintenance",
      category: "Basics",
      readTime: "6 min read",
      date: "Nov 30, 2024",
    },
    {
      title: "Engine Bay Cleaning Safety",
      category: "Advanced",
      readTime: "8 min read",
      date: "Nov 28, 2024",
    },
  ]

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 neon-glow bg-primary/20 text-primary border-primary/30">Education Center</Badge>
          <h1 className="text-5xl font-bold mb-6 neon-text">Car Care Education</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master the art of car care with our comprehensive guides, tutorials, and expert tips. Learn from
            professionals and keep your vehicle in pristine condition.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search articles, tutorials, and tips..."
              className="pl-12 pr-4 py-6 text-lg glass border-border/20 focus:border-primary/50"
            />
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 neon-text">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card
                key={index}
                className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group hover:scale-105 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/education/articles/${slugify(article.title)}`}>
                    <Button
                      variant="outline"
                      className="w-full glass border-primary/30 hover:bg-primary/10 bg-transparent group"
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Tutorials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 neon-text">Video Tutorials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTutorials.map((video, index) => (
              <Link key={index} href={`/education/videos/${slugify(video.title)}`} aria-label={`Watch: ${video.title}`}>
                <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group hover:scale-105 overflow-hidden cursor-pointer">
                  <div className="relative">
                    <img
                      src={
                        video.thumbnail ||
                        "/placeholder.svg?height=160&width=320&query=car%20care%20tutorial%20thumbnail"
                      }
                      alt={video.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-2 right-2 bg-black/70 text-white text-xs">{video.duration}</Badge>
                    <Badge className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-xs">
                      {video.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 text-sm group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{video.views} views</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 neon-text">Quick Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip, index) => (
              <Card
                key={index}
                className="glass border-border/20 hover:border-primary/50 transition-all duration-500 group hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300">
                    <tip.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="glass border-border/20 sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <Link key={index} href={`/education/category/${slugify(category.name)}`}>
                      <Button
                        variant={category.active ? "default" : "ghost"}
                        className={`w-full justify-between ${
                          category.active ? "neon-glow" : "hover:bg-primary/10 hover:text-primary"
                        }`}
                      >
                        <span>{category.name}</span>
                        <Badge variant="secondary" className="ml-2">
                          {category.count}
                        </Badge>
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Articles */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6 neon-text">Recent Articles</h2>
            <div className="space-y-6">
              {recentArticles.map((article, index) => (
                <Card
                  key={index}
                  className="glass border-border/20 hover:border-primary/50 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            {article.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <Link href={`/education/articles/${slugify(article.title)}`}>
                        <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary group">
                          Read
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="glass rounded-3xl p-12 border-border/20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 neon-text">Stay Updated</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the latest car care tips, tutorials, and industry insights delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input placeholder="Enter your email" className="glass border-border/20 focus:border-primary/50" />
                <Button className="neon-glow hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No spam, unsubscribe anytime. Join 5,000+ car enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
