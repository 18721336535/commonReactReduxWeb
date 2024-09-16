import { Navigate } from "react-router-dom"
import About from "../temp/About"
import Message from "../temp/Message"
import News from "../temp/News"
import Home from "../pages/home/Home"
import UploadHome from "../pages/home/UploadHome"
import AuditHome from "../pages/home/AuditHome"
import PlantsManagementHome from "../pages/plant_management/PlantsManagementHome"
import MyPlants from "../pages/plant_management/MyPlants"


const ary =  [
   
    {
        path: '/ui/home',
        element:<Home/>,
        children:[
            {
                path: '/ui/home',
                element: <Navigate to="/ui/home/upload"/>
            },
            {
                path: 'upload',
                element: <UploadHome/>,
                children:[
                    {
                        path: 'excel',
                        element: <UploadHome/>
                    },
                    {
                        path: 'csv',
                        element: <About/>
                    },
                    {
                        path: 'others',
                        element: <About/>
                    }
                ]
            },
            {
                path: 'audit',
                element: <AuditHome/>,
                children:[
                    {
                        path: 'before',
                        element:<AuditHome/>
                    },
                    {
                        path: 'after',
                        element:<AuditHome/>
                    },
                    {
                        path: 'result',
                        element:<AuditHome/>
                    }
                ]
            },

            {
                path: 'adjust',
                element: <Message/>
            },
    
            {
                path: 'report',
                element: <Message/>
            },

            {
                path: 'dashboard',
                element: <Message/>,
                children:[
                    {
                        path: 'line',
                        element:<News/>
                    },
                    {
                        path: 'pie',
                        element:<News/>
                    }
                ]
            }
        ]
    },
    {
        path: '/ui/workflow',
        element: <About/>
    },
    {
        path: '/ui/inbox',
        element: <About/>
    },
    {
        path: '/ui/tools',
        element: <About/>
    },
    {
        path: '/ui/setting',
        element: <About/>
    },
    {
        path: '/ui/plants',
        element: <PlantsManagementHome/>,
        children:[
            {
                path: '/ui/plants',
                element: <Navigate to="/ui/plants"/>
            },
            {
                path: 'myplants',
                element: <MyPlants/>,
            },
            {
                path: 'control',
                element: <MyPlants/>,
            },
            {
                path: 'sales',
                element: <PlantsManagementHome/>,
                children:[
                    {
                        path: 'grain',
                        element: <PlantsManagementHome/>
                    },
                    {
                        path: 'Fruits',
                        element: <PlantsManagementHome/>
                    },
                    {
                        path: 'others',
                        element: <PlantsManagementHome/>
                    }
                ]
            },
        ]
    },
    {
        path: '/',
        element: <Navigate to="/ui/plants"/>
    }
]

export default ary