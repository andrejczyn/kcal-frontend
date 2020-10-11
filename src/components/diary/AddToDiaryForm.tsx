import * as classNames from "classnames";
import * as React from "react";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {Product, ProductsService} from "../../services/Services";
import "./add-to-diary-form.css"
import * as _ from 'lodash';

interface AddToDiaryFormProps {
    productService: ProductsService
}

export function AddToDiaryForm(props: AddToDiaryFormProps) {
    const [searchResult, setSearchResult] = useState<Product[]>([])
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState<number>(null)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const q = e.target.value;
        setQuery(q)
        if (!q) {
            setSearchResult([]);
            setSelected(null);
        } else {
            props.productService.products({q: q})
                .then((products) => {
                    setSearchResult(products.products);
                    setSelected(null);
                });
        }
    }

    const productName = (query: string, name: string) => {
        const index = name.toLowerCase().indexOf(query.toLowerCase());
        const start = name.substr(0, index);
        const mid = name.substr(index, query.length);
        const end = name.substr(index + query.length);


        return <>{start}<b>{mid}</b>{end}</>;
    }

    const onKeyPress = (e: KeyboardEvent<HTMLFormElement>) => {
        if(searchResult.length == 0) {
            setSelected(null);
            return;
        }
        if(e.key == 'ArrowDown') {
            if(selected == null) {
                setSelected(0)
                return;
            }

            if(selected == searchResult.length -1) {
                setSelected(0)
            } else {
                setSelected(selected+1)
            }
            return;
        }

        if(e.key == 'ArrowUp') {
            if(selected == null) {
                setSelected(searchResult.length - 1 )
                return;
            }
            if(selected == 0) {
                setSelected(searchResult.length -1)
            } else {
                setSelected(selected-1)
            }
            return;
        }

    }

    return (<form className="" onKeyDown={onKeyPress}>
        <div className="form-group mb-3">
            <input className="add-to-diary-control form-control" onChange={onChange} type="text"
                   placeholder="Add product to your diary"/>
            <ul className="list-group products-auto-suggest">
                {searchResult.map((product) => <li key={product.id}
                                                   className={classNames(["list-group-item",searchResult[selected]?.id == product.id && "active"])}>{productName(query, product.name)}</li>)}
            </ul>
        </div>

    </form>)
}