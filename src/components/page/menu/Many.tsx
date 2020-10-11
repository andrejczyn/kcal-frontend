import {MenuItem} from "./MenuItem";
import {Cart, CupStraw} from "react-bootstrap-icons";
import * as React from "react";
import * as H from "history";

interface MenuProps {
    location: H.Location
}

export function Menu(props: MenuProps) {
    return <ul className="nav flex-column">
        <MenuItem location={props.location} link="/" text="Meals"
                  active={true}><CupStraw/></MenuItem>
        <MenuItem location={props.location} link="/products" text="Products"><Cart/></MenuItem>
    </ul>
}