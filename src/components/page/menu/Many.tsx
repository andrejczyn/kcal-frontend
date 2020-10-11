import {MenuItem} from "./MenuItem";
import {CalendarEvent, Cart, CupStraw} from "react-bootstrap-icons";
import * as React from "react";
import * as H from "history";

interface MenuProps {
    location: H.Location
}

export function Menu(props: MenuProps) {
    return <ul className="nav flex-column">
        <MenuItem location={props.location} link="/" text="Diary"
                  active={true}><CalendarEvent/></MenuItem>
        <MenuItem location={props.location} link="/products" text="Products"><Cart/></MenuItem>
    </ul>
}