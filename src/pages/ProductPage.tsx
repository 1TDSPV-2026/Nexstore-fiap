import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import type { Product } from "../types/product"
import { getProductById } from "../services/products"
import { formatPrice } from "../utils/formatPrice"
import { ArrowLeft } from "lucide-react"

interface ProductPageProps {
    onAddCart: (product: Product) => void
}

export function ProductPage({ onAddCart }: ProductPageProps) {

    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        if (!id) return

        setLoading(true)

        getProductById(Number(id))
            .then((data) => setProduct(data))
            .finally(() => setLoading(false))

    }, [])

    console.log('product', product)

    if (loading) {
        return <p className="py-20 text-center text-sm text-neutral-500">Carregando produto...</p>
    }

    if (!product) {
        return <p className="py-20 text-center text-sm text-neutral-500">Produto não encontrado</p>
    }

    return (
        <section>
            <Link to="/" className="mb-4 inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900">
                <ArrowLeft size={14} /> Voltar ao catálogo
            </Link>

            <div className="card grid gap-6 p-5 sm:grid-cols-2">

                <div className="flex h-72 item-center justify-center rounded-lg bg-stone-50">
                    <img className="h-full object-contain" src={product.image} alt={product.title} />
                </div>

                <div className="flex flex-col">
                    <span className="text-xs font-medium uppercase text-indigo-600">{product.category}</span>

                    <h1 className="mb-3 mt-1 font-display text-xl font-bold">{product.title}</h1>

                    <p className="mb-5 text-sm text-neutral-600">{product.description}</p>

                    <span className="mb-4 mt-auto font-mono text-2xl font-bold">
                        {formatPrice(product.price)}
                    </span>

                    <div className="flex flex-wrap gap-2">
                        <button className="btn-primary" onClick={() => onAddCart(product)}>Adicionar ao carrinho</button>
                        <button className="btn-primary bg-neutral-900 hover:bg-neutral-800">Comprar Agora</button>
                    </div>
                </div>
            </div>
        </section>
    )

}