import * as React from "react";
import {ChangeEvent, ChangeEventHandler, useState} from "react";
import {Product, ProductsService} from "../../services/Services";
import "./add-to-diary-form.css"

interface AddToDiaryFormProps {
    productService: ProductsService
}

export function AddToDiaryForm(props: AddToDiaryFormProps) {
    const [searchResult, setSearchResult] = useState<Product[]>([])
    const [query, setQuery] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const q = e.target.value;
        setQuery(q)
        if (!q) {
            setSearchResult([]);
        } else {
            props.productService.products({q: q})
                .then((products) => setSearchResult(products.products));
        }
    }

    const productName = (query: string, name: string) => {
        const index = name.toLowerCase().indexOf(query.toLowerCase());
        const start = name.substr(0, index);
        const mid = name.substr(index, query.length);
        const end = name.substr(index + query.length);


        return <>{start}<b>{mid}</b>{end}</>;
    }

    return (<form className="">
        <div className="form-group mb-3">
            <input className="add-to-diary-control form-control" onChange={onChange} type="text"
                   placeholder="Add product to your diary"/>
            <ul className="list-group products-auto-suggest">
                {searchResult.map((product) => <li key={product.id}
                                                   className="list-group-item">{productName(query, product.name)}</li>)}
            </ul>
        </div>

    </form>)
}