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
import MyOrderedFoods from "../components/pages/MyOrderedFoods/MyOrderedFoods";

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
                path: '/foods',
                element: <AllFoods></AllFoods>,
                loader: () => fetch('https://restaurant-management-server-flame-eight.vercel.app/foods')
            },
            {
                path: '/add',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/myAddedFood',
                element: <PrivateRoute><MyAddedFood></MyAddedFood></PrivateRoute>,
                loader: () => fetch("https://restaurant-management-server-flame-eight.vercel.app/foods")
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`https://restaurant-management-server-flame-eight.vercel.app/foods/${params.id}`)
            },
            {
                path: '/myOrderedFood',
                element: <PrivateRoute><MyOrderedFoods></MyOrderedFoods></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/purchase/${params.id}`)
            },
            // {
            //     path: 'details/:id',
            //     element:<PrivateRoute><Details></Details></PrivateRoute>,
            //     loader: ({params}) => fetch(`https://restaurant-management-server-flame-eight.vercel.app${params.id}`)
            // },
            // {
            //     path: 'purchase/:id',
            //     element: <PrivateRoute><Purchase></Purchase></PrivateRoute>,
            //     loader:  ({params}) => fetch(`https://restaurant-management-server-flame-eight.vercel.app${params.id}`)
            // },
            {
                path: '/gallery',
                element: <Gallery></Gallery>,
                loader: () => fetch("https://restaurant-management-server-flame-eight.vercel.app/addedFoods")
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
        loader: ({params}) => fetch(`https://restaurant-management-server-flame-eight.vercel.app/foods/${params.id}`)
    },
    {
        path: 'purchase/:id',
        element: <PrivateRoute><Purchase></Purchase></PrivateRoute>,
        loader:  ({params}) => fetch(`https://restaurant-management-server-flame-eight.vercel.app/foods/${params.id}`)
    },
    {
        path: '/error',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;