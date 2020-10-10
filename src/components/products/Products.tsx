import {MouseEventHandler, PureComponent} from "react";
import * as React from "react";
import {Product, ProductsService} from "../../services/Services";
import ProductTable from "./ProductTable";
import EditProductModal from "./edit/EditProductModal";

interface ProductsProps {
    service: ProductsService
}

interface ProductsState {
    products: Array<Product>
    loading: boolean,
    dialog?: 'edit'
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
        let dialog = null
        if (this.state.dialog == "edit") {
            dialog = <EditProductModal onClose={() => {
                this.setState({dialog: null})
            }} updateProduct={this.updateProduct}
            />
        }

        return (
            <>
                {dialog}
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Products</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button type="button" className="btn btn-sm btn-primary" onClick={this.edit}>Add
                            </button>
                        </div>
                    </div>
                </div>
                <ProductTable products={this.state.products}/>
            </>
        );
    }

    updateProduct = (product: Product) => {
        return this.props.service.save(product).then(() => this.loadProducts())
            .then(() => {
                this.setState({dialog: null})
            });
    }

    loadProducts = () => {
        return this.props.service.products().then(
            (products) => {
                this.setState({
                    products: products.products,
                    loading: false
                })
            }
        )
    }

    edit = (e: any) => {
        console.log("click edit");
        this.setState({
            dialog: 'edit'
        })
    }
}