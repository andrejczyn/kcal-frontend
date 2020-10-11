import * as React from "react";

interface AddToDiaryFormProps {
}

export function AddToDiaryForm(props: AddToDiaryFormProps) {
    return (<form className="">
        <div className="form-group mb-3" >
            <input className="add-to-diary-control form-control" type="text"placeholder="Add product to your diary"/>
        </div>
    </form>)
}