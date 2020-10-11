import * as React from "react";
import {ReactElement} from "react";
import {Basket3, Cart, CupStraw} from "react-bootstrap-icons";
import {MenuItem} from "./menu/MenuItem";
import * as H from "history";
import {Menu} from "./menu/Many";

interface PageProps {
    children: ReactElement,
    location: H.Location
}

export function Page(props: any) {
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
                            <Menu location={props.location} />
                        </div>
                    </nav>
                    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </>
    );
}