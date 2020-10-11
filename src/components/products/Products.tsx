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
    dialog?: 'edit',
    product?: Product
}

export default class Products extends PureComponent<ProductsProps, ProductsState> {
    constructor(props: ProductsProps, context: any) {
        super(props, context);
        this.state = {
            products: [],
            loading: true
        }

        this.loadProducts()
    }

    render() {
        return (
            <>
                {(this.state.dialog == "edit") && (
                    <EditProductModal
                        onClose={() => {
                            this.setState({dialog: null})
                        }}
                        updateProduct={this.updateProduct}
                        service={this.props.service}
                        product={this.state.product}
                    />
                )}
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
                <ProductTable products={this.state.products} edit={(p) => {this.setState({product: p, dialog: 'edit'})}}/>
            </>
        );
    }

    updateProduct = (product: Product) => {
        this.setState({
            dialog: null
        })
        this.loadProducts()
    }

    loadProducts = () => {
        this.props.service.products().then(
            (products) => {
                console.log(products);
                this.setState({
                    products: products.products,
                    loading: false
                })
            }
        )
    }

    edit = (e: any) => {
        this.setState({
            dialog: 'edit'
        })
    }
}