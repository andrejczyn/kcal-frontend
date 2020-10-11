import * as React from "react";
import {PureComponent} from "react";
import {useForm, UseFormMethods} from "react-hook-form";
import "./style.css"
import {Product, ProductsService} from "../../../services/Services";
import EditProductForm from "./EditProductForm";

interface EditProductModalProps {
    onClose: () => void
    updateProduct: (product: Product) => void
    service: ProductsService
}

interface EditProductModalState {
    saving: boolean
}


export default class EditProductModal extends PureComponent<EditProductModalProps, EditProductModalState> {
    form: UseFormMethods<Product>
    constructor(props: EditProductModalProps, context: any) {
        super(props, context);
        this.state = {
            saving: false
        }
    }


    render() {
        return (
            <>
                <div className="modal-backdrop fade show"/>
                    <div className="modal fade show" id="edit-product">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Create product</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                            onClick={this.props.onClose}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <EditProductForm {...this.props} />
                            </div>
                        </div>
                    </div>

            </>)
    }


    validateForm = (data: Product) => {
        let errors = {}
        if (!Number.isInteger(data.protein)) {
            errors = {...errors, protein: "Nieprawidłowy format"}
        }

        return errors;
    }
}