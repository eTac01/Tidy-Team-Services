import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="space-y-3 mb-8">
        <Skeleton className="h-8 w-56 bg-muted" />
        <Skeleton className="h-4 w-2/3 bg-muted" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-40 w-full bg-muted rounded-lg" />
            <Skeleton className="h-5 w-3/4 bg-muted" />
            <Skeleton className="h-4 w-1/2 bg-muted" />
          </div>
        ))}
      </div>
    </div>
  )
}
