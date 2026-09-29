import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CatalogPage } from "./pages/CatalogPage"
import { CartPage } from "./pages/CartPage"
import { MainLayout } from "./layouts/MainLayout"

import "./index.css"
import type { CartItem } from "./types/cartItem"
import { useState } from "react"
import type { Product } from "./types/product"

function App() {
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
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout totalItems={cartItem.length} />}>
          <Route index element={<CatalogPage onAddCartItem={handleAddCartItem} />} />
          <Route path="/carrinho" element={<CartPage cartItem={cartItem} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
