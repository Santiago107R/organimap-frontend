import { createHashRouter } from "react-router";
import UserLayout from './src/user/layouts/UserLayout';
import HomePage from './src/user/pages/home/HomePage';
import ListPage from "@/user/pages/list/ListPage";

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
        ],
    },
])