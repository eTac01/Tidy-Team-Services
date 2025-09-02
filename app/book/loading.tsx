import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="space-y-4 mb-6">
        <Skeleton className="h-8 w-48 bg-muted" />
        <Skeleton className="h-4 w-3/4 bg-muted" />
      </div>

      <div className="space-y-4">
        <Skeleton className="h-10 w-full bg-muted" />
        <Skeleton className="h-10 w-full bg-muted" />
        <Skeleton className="h-10 w-full bg-muted" />
        <div className="flex gap-4">
          <Skeleton className="h-10 w-40 bg-muted" />
          <Skeleton className="h-10 w-28 bg-muted" />
        </div>
      </div>
    </div>
  )
}
