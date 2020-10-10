import {PureComponent} from "react";
import * as React from "react";
import {Product, ProductsService} from "../../services/Services";

interface ProductsProps {
    service: ProductsService
}

interface ProductsState {
    products: Array<Product>
    loading: boolean
}

export default class Products extends PureComponent<ProductsProps, ProductsState> {


    constructor(props: ProductsProps, context: any) {
        super(props, context);
        this.state = {
            products: [],
            loading: true
        }


        props.service.products().then(
            (products) => {
                console.log("test");
                this.setState({
                    products: products.products,
                    loading: false
                })
            }
        )
    }

    render() {
        const products = this.state.products.map((it) => {
            console.log(it);
                return (<tr>
                    <td>{it.id}</td>
                    <td>{it.name}</td>
                    <td>{it.calories}</td>
                </tr>)
            }
        )

        return (
            <>
                <h2>Products</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}