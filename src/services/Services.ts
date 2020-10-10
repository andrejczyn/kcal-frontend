export default class Services {
    productsService = new ProductsService()
}

export class ProductsService {
    products(): Promise<Products> {
        return new Promise<Products>((resolve) => {
            resolve({
                products: [
                    {
                        id: "1",
                        name: "Marchewka",
                        calories: 122
                    },
                    {
                        id: "2",
                        name: "Pomidor",
                        calories: 122
                    }
                ]
            })
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