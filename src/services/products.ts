import type { Product } from "../types/product";

const API = 'https://fakestoreapi.com'

export function getProducts(): Promise<Product[]> {
    const response = fetch(`${API}/products`)
        .then((data) => {
            return data.json()
        })

    return response
}