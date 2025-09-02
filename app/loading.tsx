import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4">
            <Skeleton className="h-6 w-64 bg-muted" />
            <Skeleton className="h-10 w-80 bg-muted" />
            <Skeleton className="h-5 w-3/4 bg-muted" />
            <div className="flex gap-3 mt-4">
              <Skeleton className="h-12 w-40 bg-muted" />
              <Skeleton className="h-12 w-36 bg-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-8 w-56 bg-muted mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-28 w-full bg-muted rounded-xl" />
                <Skeleton className="h-5 w-3/4 bg-muted" />
                <Skeleton className="h-4 w-2/3 bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
