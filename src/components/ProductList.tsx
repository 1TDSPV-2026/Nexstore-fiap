import type { Product } from "../types/product"
import { ProductCard } from "./ProductCard"

interface ProductListProps {
    products: Product[]
    onAddToCart: (product: Product) => void
}

export function ProductList({ onAddToCart, products }: ProductListProps) {


    return (
        <>
            {
                products.map((value) => {
                    return <ProductCard
                        product={value}
                        onAddCart={onAddToCart} />
                })
            }
        </>
    )

}