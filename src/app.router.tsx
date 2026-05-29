import { createHashRouter } from "react-router";
import UserLayout from './user/layouts/UserLayout';
import HomePage from './user/pages/home/HomePage';
import ListPage from "@/user/pages/list/ListPage";
import MapPage from "@/user/pages/map/MapPage";
import LoginPage from "./auth/pages/login/LoginPage";
import RegisterPage from "./auth/pages/register/RegisterPage";

export const AppRouter = createHashRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'lista',
                element: <ListPage />,
            },
            {
                path: 'mapa',
                element: <MapPage />,
            },
        ],
    },

    {
        path: '/auth',
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    }
])