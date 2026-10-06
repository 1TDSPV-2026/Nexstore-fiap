import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CatalogPage } from "./pages/CatalogPage"
import { CartPage } from "./pages/CartPage"
import { MainLayout } from "./layouts/MainLayout"

import "./index.css"
import type { CartItem } from "./types/cartItem"
import { useState } from "react"
import type { Product } from "./types/product"
import { ProductPage } from "./pages/ProductPage"

function App() {
  const [cartItem, setCartItem] = useState<CartItem[]>([])

  function handleAddCartItem(product: Product): void {
    const list = [...cartItem]
    const exists = list.find((value) => value.product.id === product.id)
    if (exists) {
      const newList = list.map((item) => {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
      setCartItem(newList)
      return
    }

    const item: CartItem = {
      product: product,
      quantity: 1
    }
    list.push(item)
    setCartItem(list)
  }

  function handleUpdateQuantity(productId: number, delta: number) {

    const list = [...cartItem]

    const newList = list.map((item) => {
      if (item.product.id === productId) {
        return { ...item, quantity: item.quantity + delta }
      } else {
        return item
      }
    }).filter((item) => item.quantity > 0)

    setCartItem(newList)
  }

  function handleRemoveItem(productId: number) {
    const list = [...cartItem]
    const newList = list.filter((item) => item.product.id !== productId)
    setCartItem(newList)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout totalItems={cartItem.length} />}>
          <Route index element={<CatalogPage onAddCartItem={handleAddCartItem} />} />
          <Route path="/carrinho" element={
            <CartPage
              onRemove={handleRemoveItem}
              onUpdateQuantity={handleUpdateQuantity}
              cartItem={cartItem} />
          } />
          <Route path="/product/:id" element={<ProductPage onAddCart={handleAddCartItem} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
