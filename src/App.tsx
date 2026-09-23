import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CatalogPage } from "./pages/CatalogPage"
import { CartPage } from "./pages/CartPage"
import { MainLayout } from "./layouts/MainLayout"

import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<CatalogPage />} />
          <Route path="/carrinho" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
