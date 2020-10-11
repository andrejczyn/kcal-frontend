import * as React from "react";
import {PureComponent} from "react";
import "./style.css"
import {ErrorMessage, Field, Form, Formik, FormikHelpers, useFormik} from "formik";
import {Product} from "../../../services/Services";

interface EditProductModalProps {
    onClose: () => void
    updateProduct: (product: Product) => Promise<void>
}

interface EditProductModalState {
    saving: boolean
}


export default class EditProductModal extends PureComponent<EditProductModalProps, EditProductModalState> {
    constructor(props: EditProductModalProps, context: any) {
        super(props, context);
        this.state = {
            saving: false
        }
    }


    render() {

        let saveText = (<><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"/>
            Loading...</>)
        if (!this.state.saving) {
            saveText = (<>Create</>)
        }

        return (
            <>
                <div className="modal-backdrop fade show"/>

                <Formik initialValues={{name: "", calories: 0, fat: 0, carbohydrates: 0, protein: 0}}
                        onSubmit={(product: Product, {setSubmitting}: FormikHelpers<Product>) => {
                            this.setState({saving: true})
                            this.props.updateProduct(product).then(() => {
                                this.setState({saving: false})
                            })
                        }} onReset={() => {
                }} validate={this.validateForm}>
                    <Form>
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
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <Field className="form-control" name="name"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Calories</label>
                                            <Field className="form-control" name="calories"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="protein">Protein</label>
                                            <Field className="form-control" name="protein"/>
                                            <ErrorMessage name="protein" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="fat">Fat</label>
                                            <Field className="form-control" name="fat"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Carbohydrates</label>
                                            <Field className="form-control" name="carbohydrates"/>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={this.props.onClose}
                                                data-dismiss="modal">Cancel
                                        </button>
                                        <button type="submit" className="btn btn-primary" disabled={this.state.saving}>
                                            {saveText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </>)
    }

    validateForm = (data: Product) => {
        let errors = {}
        if(!Number.isInteger(data.protein)) {
            errors = {...errors, protein: "Nieprawidłowy format"}
        }

        return errors;
    }
}