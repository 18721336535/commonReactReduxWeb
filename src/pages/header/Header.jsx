
import React from "react";
import styled from "styled-components";
import { NavLink , Outlet} from "react-router-dom";


const Nav = styled.div`
    background: #15171c;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const MyNavLink = styled(NavLink)`
    margin-left:30px;
    text-decoration: none;
`;

const Header= ()=>{
        return (
            <div>
            <Nav>
                <MyNavLink to="/ui/home">Home</MyNavLink>
                <MyNavLink to="/ui/workflow">Workflow</MyNavLink>
                <MyNavLink to="/ui/inbox">Inbox</MyNavLink>
                <MyNavLink to="/ui/tools">Tools</MyNavLink>
                <MyNavLink to="/ui/settings">Setting</MyNavLink>
                <MyNavLink to="/ui/plants">PlantsManage</MyNavLink>
            </Nav> 
            {/* <Outlet></Outlet> */}
            </div>
        )
}

export default Header
