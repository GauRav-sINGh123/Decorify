import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
 

function LoadingSkeleton() {
  return (
    <div className="container mx-auto p-4 mt-16 max-w-3xl">
        <Card>
          <Skeleton className="h-8 w-3/4" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </Card>
      </div>
)}

export default LoadingSkeleton