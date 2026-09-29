import type { Product } from "../types/product";

const API = 'http://localhost:3000'

export function getProducts(): Promise<Product[]> {
    const response = fetch(`${API}/products`)
        .then((data) => {
            return data.json()
        })

    return response
}