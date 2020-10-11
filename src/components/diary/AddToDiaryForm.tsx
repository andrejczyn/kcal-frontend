import * as React from "react";
import {ChangeEvent, ChangeEventHandler, useState} from "react";
import {Product, ProductsService} from "../../services/Services";
import "./add-to-diary-form.css"
interface AddToDiaryFormProps {
    productService: ProductsService
}

export function AddToDiaryForm(props: AddToDiaryFormProps) {
    const [searchResult, setSearchResult] = useState<Product[]>([])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.target.value) {
            setSearchResult([]);
        }
        props.productService.products({q: e.target.value})
            .then((products) => setSearchResult(products.products));
    }

    return (<form className="">
        <div className="form-group mb-3">
            <input className="add-to-diary-control form-control" onChange={onChange} type="text"
                   placeholder="Add product to your diary"/>
                   <ul className="list-group products-auto-suggest">
                        {searchResult.map((product) => <li className="list-group-item">{product.name}</li>)}
                   </ul>
        </div>

    </form>)
}