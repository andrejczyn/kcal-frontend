import {Icon, Props} from "react-bootstrap-icons";
import * as React from "react";
import {ComponentType, FunctionComponent, ReactElement} from "react";
import "./menu.css"
import {Link} from "react-router-dom";
import * as classNames from "classnames";
import * as H from "history";

interface MenuItemProps {
    children: ReactElement
    link: string,
    text: string,
    active?: boolean,
    location: H.Location
}

export function MenuItem(props: MenuItemProps) {
    const isActive = () => {
        return props.link == location.pathname
    }
    return (<li className="nav-item">
        <Link className={classNames('nav-link', 'app-nav-link', isActive() && 'active')} to={props.link}>
            {props.children} {props.text}
        </Link>
    </li>)
}