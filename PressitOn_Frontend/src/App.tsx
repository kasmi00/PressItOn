import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/login.tsx";
import Dashboard from "./pages/dashboard.tsx";
import Shop from "./pages/shop.tsx";
import AdminDashboard from "./pages/admindashboard.tsx";
import Review from "./pages/review.tsx";
import Register from "./pages/registration.tsx";
const router = createBrowserRouter(
    [
        {
            path:"/",
            element : <Login />
        },
        {
            path:"/register",
            element : <Register />
        },

        {
            path:"/dashboard",
            element : <Dashboard />
        },
        {
            path:"/shop",
            element : <Shop />
        },
        {
            path:"/admin",
            element : <AdminDashboard/>
        },

        {
            path:"/review/:productId",
            element : <Review/>
        },





    ]
)
function App() {

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}
export default App