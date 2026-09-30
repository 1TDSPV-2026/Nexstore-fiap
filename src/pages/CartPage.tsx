import { ShoppingCart, Trash2 } from "lucide-react"
import type { CartItem } from "../types/cartItem"
import { Link } from "react-router-dom"
import { formatPrice } from "../utils/formatPrice"

interface CartPageProps {
    cartItem: CartItem[]
    onUpdateQuantity: (productId: number, delta:number) => void
    onRemove: (productId: number) => void 
}

const qtyButton = 'h-6 w-6 rounded-full border border-stone-300 text-sm hover:bg-stone-100'

export function CartPage({ cartItem, onUpdateQuantity, onRemove}: CartPageProps) {

    const total = cartItem.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

    if (!cartItem?.length) {
        return (
            <div className="py-20 text-center">
                <ShoppingCart size={40} className="mx-auto mb-3 text-stone-300" />
                <p className="mb-4 text-sm text-neutral-500">Seu carrinho está vazio</p>
                <Link to='/' className="text-sm font-medium text-indigo-600 hover:underline">
                    Ver produtos</Link>
            </div>
        )
    }

    return (
        <section className="mx-auto max-w-2xl">
            <h1 className="mb-5 font-display text-2xl font-bold">Carrinho</h1>

            <ul className="mb-5 space-y-3">
                {cartItem.map(({ product, quantity }) => {

                    return (
                        <li className="card flex items-center gap-3 p-3" key={product.id}>
                            <img className='h-12 w-12 object-contain' src={product.image} alt={product.title} />
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm text-neutral-500">{product.title}</p>
                                <p className="font-mono text-sx text-neutral-500">{formatPrice(product.price)}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button 
                                onClick={() => onUpdateQuantity(product.id, -1)}
                                className={qtyButton}>-</button>
                                <span className="w-4 text-center text-sm">{quantity}</span>
                                <button 
                                onClick={() => onUpdateQuantity(product.id, 1)}
                                className={qtyButton}>+</button>
                            </div>
                            <button 
                            onClick={() => onRemove(product.id)}
                            className="text-stone400 transition hover:text-red-500">
                                <Trash2 size={15} />
                            </button>
                        </li>
                    )

                })}
            </ul>

            <div className="flex items-center justify-between border-t border-stone-200 pt-3">
                <p className="text-sm text-neutral-500">Total</p>
                <p className="font-mono text-xl font-bold">{formatPrice(total)}</p>
            </div>
        </section>
    )

}