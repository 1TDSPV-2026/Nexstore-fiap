import type { Product } from "../types/product"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {

    return (
        <section>
            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </section>
    )
}