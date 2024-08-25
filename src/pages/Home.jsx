import React from "react";
import { NavLink,Outlet } from "react-router-dom";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

export default function Home(){
    return (
        <div className={
            "ag-theme-quartz-dark"
        }>
            {/* <h1>Hi Home</h1> */}
            <ul className="nav nav-tabs">
                <li>
                    <NavLink className="list-group-item" to="news">news</NavLink>
                </li>
                <li>
                    <NavLink   className="list-group-item" to="message">messages</NavLink>
                </li>
            </ul>
            
            <Outlet className={
            "ag-theme-quartz-dark"
        }></Outlet>
        </div>
    )
}