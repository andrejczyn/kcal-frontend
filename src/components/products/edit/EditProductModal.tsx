import * as React from "react";
import {PureComponent} from "react";
import "./style.css"
import {Field, Form, Formik, FormikHelpers, useFormik} from "formik";
import {Product} from "../../../services/Services";

interface EditProductModalProps {
    onClose: () => void
    updateProduct: (product: Product) => void
}

interface EditProductModalState {

}


export default class EditProductModal extends PureComponent<EditProductModalProps, EditProductModalState> {

    constructor(props: EditProductModalProps, context: any) {
        super(props, context);
    }


    render() {
        return (
            <>
                <div className="modal-backdrop fade show"/>
                <Formik initialValues={{name: "", calories: 0, fat: 0, carbohydrates: 0, protein: 0}}
                        onSubmit={(product: Product, {setSubmitting}: FormikHelpers<Product>) => {
                            this.props.updateProduct(product)
                        }} onReset={() => {
                }}>
                    <Form>
                        <div className="modal fade show" id="edit-product">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Create product</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                        <button type="submit" className="btn btn-primary">Create</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </>)
    }
}