import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { getProducts } from "../services/products";

interface UseProductsResult {
    products: Product[]
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

    return {
        products, loading
    }
}