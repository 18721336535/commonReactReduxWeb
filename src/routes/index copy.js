import { Navigate } from "react-router-dom"
import About from "../pages/About"
import Message from "../pages/Message"
import News from "../pages/News"
import Home from "../pages/Home"


export default [
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/home',
        element:<Home/>,
        children:[
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'message',
                element: <Message/>,
                children:[
                    {
                        path: 'message01',
                        element:<News/>
                    },
                    {
                        path: 'message02',
                        element:<News/>
                    },
                    {
                        path: 'message03',
                        element:<News/>
                    }
                ]

            }

        ]
    },
    {
        path: '/',
        element: <Navigate to="/about" />
    }
]