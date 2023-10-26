import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./Component/SideLayout/Home";
import About from "./Component/SideLayout/About";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
])