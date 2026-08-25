import type { Product } from "../types/product"

interface ProductCardProps {
    product: Product
    onAddCart: (product: Product) => void
}

export function ProductCard({ product, onAddCart }: ProductCardProps) {

    return (
        <section style={{
            display: 'flex',
            width: "80%",
            height: '10rem',
            border: '2px black solid',
            marginBottom: '0.5rem'
        }}>
            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => onAddCart(product)}>Adicionar ao carrinho</button>
        </section>
    )
}