import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Navbar from "../Navbar/Navbar";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                
            }
        ]

    }
])

export default router;