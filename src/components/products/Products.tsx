import {PureComponent} from "react";
import * as React from "react";
import {Product, ProductsService} from "../../services/Services";
import ProductTable from "./ProductTable";

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
                this.setState({
                    products: products.products,
                    loading: false
                })
            }
        )
    }

    render() {

        return (
            <>
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Products</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button type="button" className="btn btn-sm btn-primary">Add</button>
                        </div>
                    </div>
                </div>
                <ProductTable products={this.state.products}/>
            </>
        );
    }
}