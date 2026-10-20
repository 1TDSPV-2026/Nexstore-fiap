

export function ProductCardSkeleton() {
    return (
        <div className="card animate-pulse py-10 px-24">
            <div className="mb-3 h-32 rounded-lg bg-stone-200" />
            <div className="mb-2 h-3 w-3/4 rounded-sm bg-stone-200" />
            <div className="h-3 w-1/2 rounded-sm bg-stone-200" />
        </div>
    )
}