import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { ProductList } from "../components/ProductList";
import { getProducts } from "../services/products";
import type { CartItem } from "../types/cartItem";


export function CatalogPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)
    const [cartItem, setCartItem] = useState<CartItem[]>([])

    useEffect(() => {
        setLoading(true)
        getProducts().then((data) => {
            setProducts(data)
        }).finally(() => setLoading(false))
    }, [])


    function handleAddCartItem(product: Product): void {

        const list = [...cartItem]

        const exists = list.find((value) => value.product.id === product.id)

        if (exists) {
            const item: CartItem = {
                product: exists.product,
                quantity: exists.quantity + 1
            }
            list.push(item)
            setCartItem(list)
            return
        }

        const item: CartItem = {
            product: product,
            quantity: 1
        }
        list.push(item)
        setCartItem(list)
    }

    return (
        <>
            <h2>Itens para comprar</h2>
            <div>
                {cartItem.map((item) => {
                    return <p>{item.product.title} valor: {item.product.price}</p>
                })}
            </div>
            {

                loading ? <p>Carregando Itens...</p>
                    : <ProductList products={products} onAddToCart={handleAddCartItem} />
            }
        </>
    )
}