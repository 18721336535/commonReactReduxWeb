// Filename - components/Sidebar.js

import React from "react";
import styled from "styled-components";
import { SidebarData } from "./SideBarData";
import SubMenu from "./submenu/SubMenu";
import { IconContext } from "react-icons/lib";


const SidebarNav = styled.nav`
    background: #15171c;
    width: 200px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    // top: 0;
    // left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    // left: "0" ;
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const SideNavbar = () => {
    // const [sidebar, setSidebar] = useState(false);

    // const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <SidebarNav >
                    <SidebarWrap>
                        {/* <NavIcon to="#">
                            <AiIcons.AiOutlineClose
                                onClick={showSidebar}
                            />
                        </NavIcon> */}
                        {SidebarData.map((item, index) => {
                            return (
                                <SubMenu
                                    item={item}
                                    key={index}
                                />
                            );
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default SideNavbar;
