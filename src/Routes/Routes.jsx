import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/pages/Home/Home";
import AllFoods from "../components/pages/AllFoods/AllFoods";
import Register from "../components/pages/Register/Register";
import Login from "../components/pages/Login/Login";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Gallery from "../components/pages/Gallery/Gallery";
import Details from "../components/pages/Details/Details";
import PrivateRoute from "./PrivateRoute";
import Purchase from "../components/pages/Purchase/Purchase";
import AddFood from "../components/pages/AddFoods/AddFood";
import MyAddedFood from "../components/pages/MyAddedFood/MyAddedFood";
import Update from "../components/Update/Update";

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
                path: '/add',
                element: <AddFood></AddFood>
            },
            {
                path: '/MyAdddFood',
                element: <PrivateRoute><MyAddedFood></MyAddedFood></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/foods")
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            // {
            //     path: 'details/:id',
            //     element:<PrivateRoute><Details></Details></PrivateRoute>,
            //     loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            // },
            // {
            //     path: 'purchase/:id',
            //     element: <PrivateRoute><Purchase></Purchase></PrivateRoute>,
            //     loader:  ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            // },
            {
                path: '/gallery',
                element: <Gallery></Gallery>,
                loader: () => fetch("http://localhost:5000/addedFoods")
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
        ]
    },
    {
        path: 'details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
    },
    {
        path: 'purchase/:id',
        element: <PrivateRoute><Purchase></Purchase></PrivateRoute>,
        loader:  ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
    },
    {
        path: '/error',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;