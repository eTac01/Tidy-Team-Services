import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EducationArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const title = params.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")

  return (
    <main className="min-h-screen py-24 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="glass border-border/20">
          <CardHeader>
            <CardTitle className="text-3xl">{title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Badge className="bg-primary/20 text-primary border-primary/30">Example Article</Badge>
            <p className="text-muted-foreground">
              This is example content for “{title}”. Replace this text with your real article. You can include headings,
              images, and more details here.
            </p>
            <p className="text-muted-foreground">
              Tip: Create a data source to load articles dynamically and map slugs to your CMS entries.
            </p>
            <div className="pt-4">
              <Link href="/education" className="text-primary hover:underline">
                ← Back to Education
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
