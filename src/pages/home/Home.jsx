
import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from './sideBar/SideNavBar';
import './Home.css'

const Home = () =>{
    return (
        <div id="nav">
          <div className="main-content">
            <div className="left-content">
                <SideNavBar/>
            </div>
            <div className="right-content">
               <Outlet></Outlet>
            </div>
          </div>
        </div>
    );
  }
  
  export default Home;

