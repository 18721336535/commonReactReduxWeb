import { Navigate } from "react-router-dom"
import About from "../pages/About"
import Message from "../pages/Message"
import News from "../pages/News"
import Home from "../pages/main_home/Home"


const ary =  [
    {
        path: '/ui/about',
        element: <About/>
    },
    {
        path: '/ui/tools',
        element: <About/>
    },
    {
        path: '/ui/inbox',
        element: <About/>
    },
    {
        path: '/ui/setting',
        element: <About/>
    },
    {
        path: '/ui/home',
        element:<Home/>,
        children:[
            {
                path: 'about-us',
                element: <About/>,
                children:[
                    {
                        path: 'aim',
                        element: <About/>
                    },
                    {
                        path: 'vision',
                        element: <News/>
                    }
                ]
            },
            {
                path: 'services',
                element: <Message/>,
                children:[
                    {
                        path: 'services1',
                        element:<News/>
                    },
                    {
                        path: 'services2',
                        element:<News/>
                    },
                    {
                        path: 'services3',
                        element:<News/>
                    }
                ]

            },
            {
                path: 'contact',
                element: <Message/>
            },
            {
                path: 'support',
                element: <Message/>
            },
            {
                path: 'events',
                element: <Message/>,
                children:[
                    {
                        path: 'events1',
                        element:<News/>
                    },
                    {
                        path: 'events2',
                        element:<News/>
                    }
                ]

            },


        ]
    },
    {
        path: '/',
        element: <Navigate to="/ui/home"/>
    }
]

export default ary