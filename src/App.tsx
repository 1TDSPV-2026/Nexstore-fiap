import { useState } from "react"
import { ProductCard } from "./components/ProductCard"
import type { Product } from "./types/product"
import type { CartItem } from "./types/cartItem"

interface AppProps {
  products: Product[]
}

function App(props: AppProps) {

  const [cartItem, setCartItem] = useState<CartItem[]>([])

  function handleAddToCart(product:Product):void {

      const exists = props.products.find((item) => {
        return item.id === product.id
      }) 

      if (exists) {
        const cartItem:CartItem = {
          product: exists,
          quantity: 1
        }
        setCartItem([cartItem])
      }
  }


  return (
    <main>

      <h1>NexStore</h1>

      <h2>Itens para comprar</h2>

      <div>
        {cartItem.map((item) => {
          return <p>{item.product.title}</p>
        })}
      </div>

      {
        props.products.map((value) => {
          return <ProductCard product={value} onAddCart={handleAddToCart}/>
        })
      }

      
    </main>
  )
}

export default App
