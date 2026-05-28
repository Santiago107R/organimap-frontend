import { createHashRouter } from "react-router";
import UserLayout from './user/layouts/UserLayout';
import HomePage from './user/pages/home/HomePage';
import ListPage from "@/user/pages/list/ListPage";
import MapPage from "@/user/pages/map/MapPage";
import LoginPage from "./auth/pages/LoginPage";

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
        element: <LoginPage />
    }
])