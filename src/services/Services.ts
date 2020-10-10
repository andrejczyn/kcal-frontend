import axios from 'axios'

export default class Services {
    productsService = new ProductsService()
}

export class ProductsService {
    products(): Promise<Products> {
        return axios.get<Products>("http://localhost:8080/products").then((response) => {
            return response.data
        })
    }
}

export interface Products {
    products: Array<Product>
}

export interface Product {
    id: string,
    name: string,
    calories: number
}