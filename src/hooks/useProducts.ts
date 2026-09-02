import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { getProducts } from "../services/products";

interface UseProductsResult {
    products: Product[]
    categories: string[]
    loading: boolean
}

export function useProducts(): UseProductsResult {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getProducts().then((data) => {
            setProducts(data)
        }).finally(() => setLoading(false))
    }, [])


    const categories = ['all', ...new Set(products.map((product) => product.category))]

    return {
        products, loading, categories
    }
}