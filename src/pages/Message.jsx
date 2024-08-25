import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Message(){
    return (
        <div>
            <ul className="nav nav-tabs">
                <li>
                    <NavLink className="list-group-item" to="message01">messages01</NavLink>
                </li>
                <li>
                    <NavLink className="list-group-item" to="message02">messages02</NavLink>
                </li>
                <li>
                    <NavLink className="list-group-item" to="message03">messages03</NavLink>
                </li>
            </ul>
            
            <Outlet></Outlet>
        </div>
    )
}