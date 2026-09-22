import type { Product } from "../types/product"
import { ProductCard } from "./ProductCard"

interface ProductListProps {
    products: Product[]
    onAddToCart: (product: Product) => void
}

export function ProductList({ onAddToCart, products }: ProductListProps) {


    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {
                products.map((value) => {
                    return <ProductCard
                        product={value}
                        onAddCart={onAddToCart} />
                })
            }
        </div>
    )

}