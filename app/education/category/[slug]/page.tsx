import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EducationCategoryPage({
  params,
}: {
  params: { slug: string }
}) {
  const name = params.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")

  return (
    <main className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="glass border-border/20">
          <CardHeader>
            <CardTitle className="text-3xl">Category: {name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Badge className="bg-primary/20 text-primary border-primary/30">Example Category</Badge>
            <p className="text-muted-foreground">
              This page lists example content for the “{name}” category. Connect this to your data to filter real
              articles.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Sample article A in {name}</li>
              <li>Sample article B in {name}</li>
              <li>Sample article C in {name}</li>
            </ul>
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
