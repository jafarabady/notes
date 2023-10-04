import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import EmptyNote from "@/Pages/Note/EmptyNote/index.jsx";
import Note from "@/Pages/Note/index.jsx";
import Page404 from "@/Pages/Page404.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
              index:true,
              element:<EmptyNote/>,

            },
            {
              path:'/note',
              element:<Note/>,

            },
            {
                path:"/note/:noteId",
                element:<Note/>,
            }
        ]
    },
    {
        path: "*",
        element: <Page404/>,
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <RouterProvider router={router}/>

    </React.StrictMode>,
)
