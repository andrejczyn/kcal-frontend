import {Component, PureComponent} from 'react';
import * as React from "react";
import {Form} from "./Form";
import Products from "./products/Products";
import Services from "../services/Services";

interface AppProps {
    services: Services
}

export default class App extends PureComponent<AppProps> {
    render() {
        return (
            <>
                <div
                    className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3">KCal</a>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                            <div className="sidebar-sticky pt-3">
                                <ul className="nav flex-column">

                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                 strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-shopping-cart">
                                                <circle cx="9" cy="21" r="1"></circle>
                                                <circle cx="20" cy="21" r="1"></circle>
                                                <path
                                                    d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6">

                                                </path>
                                            </svg>
                                            Products
                                        </a>

                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <Products service={this.props.services.productsService}/>
                        </main>
                    </div>
                </div>
            </>)
    }
}