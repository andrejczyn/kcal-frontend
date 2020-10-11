import {Component, PureComponent} from 'react';
import * as React from "react";
import Products from "./products/Products";
import Services from "../services/Services";
import {Page} from "./page/Page";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Diary} from "./diary/Diary";

interface AppProps {
    services: Services
}

export default class App extends PureComponent<AppProps> {
    render() {
        return (
            <Router>

                    <Switch>
                        <Route exact path="/products" component={Products}>
                            <Page><Products service={this.props.services.productsService}/></Page>
                        </Route>
                        <Route exact path="/" component={Products}>
                            <Page><Diary productsService={this.props.services.productsService}/></Page>
                        </Route>
                    </Switch>

            </Router>
        )
    }
}