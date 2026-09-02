import { useState } from "react";
import type { Product } from "../types/product";
import { ProductList } from "../components/ProductList";
import type { CartItem } from "../types/cartItem";
import { useProducts } from "../hooks/useProducts";


export function CatalogPage() {
    const [cartItem, setCartItem] = useState<CartItem[]>([])

    const [query, setQuery] = useState('')

    const [category, setCategory] = useState('all')

    const [minValue, setMinValue] = useState(0)

    const [maxValue, setMaxValue] = useState(0)

    const { products, loading, categories } = useProducts()

    const filtered = products.filter((product) => {
        const searchCategory = category === 'all' || product.category === category
        const searchWords = product.title.toLowerCase().includes(query.toLocaleLowerCase())

        const max = maxValue === 0 || product.price <= maxValue;
        const min = minValue === 0 || product.price >= minValue;

        console.log(max)


        return searchCategory && searchWords && max && min
    })

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
        <section>
            <input
                type="text"
                placeholder="Buscar produto..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />

            <select
                name="category-list"
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
            >
                {
                    categories.map((item) => {
                        return <option value={item}>{item}</option>
                    })
                }

            </select>

            <input 
            type="number"
            placeholder="Valor minimo"
            value={minValue}
            onChange={(event) => setMinValue(event.target.valueAsNumber ? event.target.valueAsNumber : 0)}
            />

            <input 
            type="number" 
            placeholder="Valor máximo"
            value={maxValue}
            onChange={(event) => setMaxValue(event.target.valueAsNumber ? event.target.valueAsNumber : 0)}
            />

            {
                loading ?
                    <p>Carregando itens...</p> :

                    <ProductList
                        products={filtered}
                        onAddToCart={handleAddCartItem}
                    />
            }
        </section>
    )
}