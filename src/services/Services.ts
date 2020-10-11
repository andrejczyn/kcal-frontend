import axios from 'axios'

export default class Services {
    productsService = new ProductsService()
}

export interface ProductQuery {
    q?: string
}

export class ProductsService {
    products(query: ProductQuery = {}): Promise<Products> {

        return axios.get<Products>("/api/products", {params: query, headers: {"accept": "application/json"}}).then((response) => {
            return response.data
        })
    }

    save(product: Product) {
        if (product.id) {
            return axios.put<Product>(`/api/products/${product.id}`, product).then((response) => {
                return response.data
            })
        }

        return axios.post<Product>("/api/products", product).then((response) => {
            return response.data
        })
    }
}

export interface Products {
    products: Array<Product>
}

export interface Product {
    id?: string,
    name: string,
    calories: number,
    fat: number,
    protein: number,
    carbohydrates: number
}