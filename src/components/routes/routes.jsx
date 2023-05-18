import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddToys from "../AddToys/AddToys";
import MyToys from "../MyToys/MyToys";
import AllToys from "../AllToys/AllToys";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addToys',
                element: <AddToys></AddToys>
            },
            {
                path: '/myToys',
                element: <MyToys></MyToys>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>

            }
        ]

    }
])

export default router;