import {ChangeEvent, Component} from 'react';
import * as React from "react";

interface FormProps {

}

interface FormState {
    value: string
}

export class Form extends Component<FormProps, FormState> {


    constructor(props: Readonly<FormProps> | FormProps) {
        super(props);

        this.state = {value: "string"}
    }

    render() {
        return (
            <form>
                <label>Name:
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({value: event.target.value})
    }
}
