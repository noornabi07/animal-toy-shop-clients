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
import Details from "../Details/Details";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivetRoutes from "./PrivetRoutes";
import Update from "../Update/Update";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivetRoutes><AddToys></AddToys></PrivetRoutes>
            },
            {
                path: '/myToys',
                element: <PrivetRoutes><MyToys></MyToys></PrivetRoutes>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,

            },
            {
                path: '/details/:id',
                element: <PrivetRoutes><Details></Details></PrivetRoutes>,
                loader: ({params}) => fetch(`https://animal-toys-server-five.vercel.app/allToys/${params.id}`)
            },
            {
                path: '/updateToy/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`https://animal-toys-server-five.vercel.app/allToys/${params.id}`)
            }
        ]

    }
])

export default router;