import { ProductCardSkeleton } from "./ProductCardSkeleton";


export function ProductGridSkeleton() {

    return (
        <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
        </div>
    )
}