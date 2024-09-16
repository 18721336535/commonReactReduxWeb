
import { Outlet,Link, NavLink } from "react-router-dom";
import './PlantsManageHome.css'

import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Flex, Menu } from 'antd';

const PlantsManagementHome = () =>{
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div style={{display:"Flex", flexWrap:"nowrap",alignContent:"flex-start",}} >
      <Menu  style={{ marginBottom: 0 , width: 256, height:600}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
            {/* <Button type="primary" onClick={toggleCollapsed} >  {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} </Button> */}

      <div style={{ marginLeft: 20 , width: 1200, height:1200}}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default PlantsManagementHome;


const items = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label:  <NavLink to="/ui/plants/myplants">MyPlants</NavLink>,
  },
  {
    key: '2',
    icon: <ContainerOutlined />,
    label:  <NavLink to="/ui/plants/control">Control</NavLink>,
  },
 
  {
    key: 'sub2',
    label: <NavLink to="/ui/plants/sales">Sales</NavLink>,
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '10',
        label: <NavLink to="/ui/plants/grain">Grain</NavLink>,
      },
      {
        key: 'sub3',
        label: <NavLink to="/ui/plants/fruits">Fruits</NavLink>,
        children: [
          {
            key: '11',
            label:<NavLink to="/ui/plants/melon">Melon</NavLink>, 
          },
          {
            key: '12',
            label: <NavLink to="/ui/plants/grape">Grape</NavLink>,
          },
        ],
      },
    ],
  },

  {
    key: 'sub1',
    label: 'Analyst',
    icon: <MailOutlined />,
    children: [
      {
        key: '5',
        label: 'Vegetables',
      },
      {
        key: '6',
        label: 'Fruits',
      },
      {
        key: '7',
        label: 'Others',
      },
      
    ],
  },
];


