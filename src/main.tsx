import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { getProducts } from './services/products.ts'

const root = createRoot(document.getElementById('root')!)

root.render(<App />)