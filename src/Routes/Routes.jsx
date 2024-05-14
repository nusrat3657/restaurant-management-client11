import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/pages/Home/Home";
import AllFoods from "../components/pages/AllFoods/AllFoods";
import Register from "../components/pages/Register/Register";
import Login from "../components/pages/Login/Login";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Gallery from "../components/pages/Gallery/Gallery";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/all',
                element: <AllFoods></AllFoods>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/error',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;