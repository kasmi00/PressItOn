import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/login.tsx";
import Registration from "./Pages/registration.tsx";
import Navbar from "./components/navbar.tsx";
import Footer from "./components/Footer.tsx";
import Dashboard from "./Pages/dashboard.tsx";
import About from "./Pages/About.tsx";





const router = createBrowserRouter([

    {
        path: "/",
        element: <Login />
    },
    {
        path: "/register",
        element: <Registration/>
    },
    {
        path: "/navbar",
        element: <Navbar/>
    },
    {
        path: "/footer",
        element: <Footer/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    },
    {
        path: "/about",
        element: <About/>
    },



]);

function App() {
    return (
        <>

                <RouterProvider router={router}></RouterProvider>
        </>
    );
}
export default App;