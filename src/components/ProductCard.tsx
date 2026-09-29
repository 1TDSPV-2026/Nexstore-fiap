import type { Product } from "../types/product"

interface ProductCardProps {
    product: Product
    onAddCart: (product: Product) => void
}

export function ProductCard({ product, onAddCart }: ProductCardProps) {

    return (
        <section className="card flex flex-col p-3 transition group hover:border-indigo-300 hover:shadow-md">

            <div className="mb-3 flex h-32 items-center justify-center overflow-hidden rounded-lg bg-stone-50">
                <img className="h-full object-contain transition group-hover:scale-105" src={product.image} alt={product.title} />
            </div>

            <h3 className="text-sm font-medium leading-snug">{product.title}</h3>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-3">
                <span className="font-mono text-sm font-semibold">{product.price}</span>

                <button className="btn-primary px-3 py-1 text-xs" onClick={() => onAddCart(product)}>Adicionar ao carrinho</button>
            </div>


        </section>
    )
}