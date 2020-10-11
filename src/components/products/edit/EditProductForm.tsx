import {useForm} from "react-hook-form";
import {Product, ProductsService} from "../../../services/Services";
import * as React from "react";
import {useState} from "react";
import validate = WebAssembly.validate;
import {validateNumeric} from "../../../validators/validators";
import * as classNames from "classnames";

interface EditProductFormProps {
    onClose: () => void
    updateProduct: (product: Product) => void
    service: ProductsService
}

export default function EditProductForm(props: EditProductFormProps) {
    const {register, handleSubmit, errors} = useForm<Product>()
    const [saving, setSaving] = useState(false)
    const save = (data: Product) => {
        setSaving(true)

        props.service.save(data)
            .then((product) => {
                setSaving(false)
                props.updateProduct(product)
            })
    }


    let saveText = (<><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"/>
        Loading...</>)
    if (!saving) {
        saveText = (<>Create</>)
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <div className="modal-body">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className={classNames(["form-control", errors.name && "is-invalid"])} name="name" ref={register({required: true})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Calories</label>
                    <input type="rext" className={classNames(["form-control", errors.calories && "is-invalid"])} name="calories"
                           ref={register({required: true, validate: validateNumeric})}/>

                </div>
                <div className="form-group">
                    <label htmlFor="protein">Protein</label>
                    <input type="text" className={classNames(["form-control", errors.protein && "is-invalid"])} name="protein"
                           ref={register({required: true, validate: validateNumeric})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="fat">Fat</label>
                    <input type="text" className={classNames(["form-control", errors.fat && "is-invalid"])} name="fat"
                           ref={register({required: true, validate: validateNumeric})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="carbohydrates">Carbohydrates</label>
                    <input type="text" className={classNames(["form-control", errors.carbohydrates && "is-invalid"])} name="carbohydrates"
                           ref={register({required: true, validate: validateNumeric})}/>
                </div>
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={props.onClose}
                        data-dismiss="modal">Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={saving}>
                    {saveText}
                </button>
            </div>
        </form>
    )
}