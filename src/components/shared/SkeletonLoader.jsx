import React from 'react'

const SkeletonLoader = () => {
  return (
    <div className="container mx-auto px-6 py-24 min-h-screen">
      <div className="animate-pulse space-y-12">
        {/* Hero Skeleton */}
        <div className="h-[60vh] bg-surface-container-highest rounded-3xl w-full" />
        
        {/* Content Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="h-64 bg-surface-container-high rounded-2xl w-full" />
          <div className="h-64 bg-surface-container-high rounded-2xl w-full" />
          <div className="h-64 bg-surface-container-high rounded-2xl w-full" />
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoader
