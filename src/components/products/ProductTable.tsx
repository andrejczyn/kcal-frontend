import {PureComponent} from "react";
import * as React from "react";
import {Product} from "../../services/Services";
import "./products.css"
import { PencilSquare } from 'react-bootstrap-icons';
interface ProductTableProps {
    products: Product[],
    edit: (product: Product) => void
}

export default class ProductTable extends PureComponent<ProductTableProps> {
    render() {
        const products = this.props.products.map((it) => {

                return (<tr key={it.id} id={`row-${it.id}`}>
                    <td>{it.name}</td>
                    <td><b>{it.calories}</b> <span className="unit">kcal</span></td>
                    <td>
                        <span className="badge badge-success badge-nutrients">Protein: <span className="badge badge-light">{it.protein}</span></span>
                        <span className="badge badge-warning badge-nutrients">Carbs: <span className="badge badge-light">{it.carbohydrates}</span></span>
                        <span className="badge badge-danger badge-nutrients">Fat: <span className="badge badge-light">{it.fat}</span></span>
                    </td>
                    <td>
                        <a href="#" role="button" onClick={(event) => {this.props.edit(it)}}><PencilSquare /></a>

                    </td>
                </tr>)
            }
        )

        return <div className="table-responsive">
            <table className="table">
                <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Calories</th>
                    <th>Nutrients</th>
                    <th>
                    </th>
                </tr>
                </thead>
                <tbody>
                {products}
                </tbody>
            </table>
        </div>
    }
}