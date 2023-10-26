import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./Component/SideLayout/Home";
import About from "./Component/SideLayout/About";
import MainUiLayout from "./Component/MainUiLayout/MainUiLayout";
import Login from "./Component/MainUiLayout/Login";
import Profile from "./Component/MainUiLayout/Profile";
import PublicRoute from "./Component/MainUiLayout/PublicRoute";
import PrivateRoute from "./Component/MainUiLayout/PrivateRoute";

export const router = createBrowserRouter([
    {
        element: <MainUiLayout />,
        children: [
            {
                path: '/',
                element: <PublicRoute component={Home} />
            },
            {
                path: '/about',
                element: <PrivateRoute component={About} />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/profile',
                element: <PrivateRoute component={Profile} />
            },
        ]
    }
])