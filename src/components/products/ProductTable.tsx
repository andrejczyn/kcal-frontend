import {PureComponent} from "react";
import * as React from "react";
import {Product} from "../../services/Services";

interface ProductTableProps {
    products: Product[]
}

export default class ProductTable extends PureComponent<ProductTableProps> {
    render() {
        const products = this.props.products.map((it) => {

                return (<tr key={it.id}>
                    <td>{it.id}</td>
                    <td>{it.name}</td>
                    <td>{it.calories}</td>
                    <td>{it.protein}</td>
                    <td>{it.fat}</td>
                    <td>{it.carbohydrates}</td>
                </tr>)
            }
        )

        return <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Calories</th>
                    <th>Protein</th>
                    <th>Fat</th>
                    <th>Carbohydrates</th>
                </tr>
                </thead>
                <tbody>
                {products}
                </tbody>
            </table>
        </div>
    }
}