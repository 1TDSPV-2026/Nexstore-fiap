import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CatalogPage } from "./pages/CatalogPage"
import { CartItem } from "./pages/CartItem"
import { MainLayout } from "./layouts/MainLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<CatalogPage />} />
          <Route path="/cart" element={<CartItem />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
