import { useState } from "react"
import { ProductCard } from "./components/ProductCard"
import type { Product } from "./types/product"
import type { CartItem } from "./types/cartItem"
import { ProductList } from "./components/ProductList"

interface AppProps {
  products: Product[]
}

function App(props: AppProps) {
  const [cartItem, setCartItem] = useState<CartItem[]>([])

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
    <main>

      <h1>NexStore</h1>

      <h2>Itens para comprar</h2>

      <div>
        {cartItem.map((item) => {
          return <p>{item.product.title} valor: {item.product.price}</p>
        })}
      </div>

      <ProductList
        products={props.products}
        onAddToCart={handleAddCartItem}
      />

    </main>
  )
}

export default App
