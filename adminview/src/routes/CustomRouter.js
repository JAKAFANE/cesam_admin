import { createBrowserRouter } from "react-router-dom"
import Login from "../Pages/Login"

const routes = [
    {
        path: '/',
        element: <Login />
    }
]

const CustomRouter = createBrowserRouter(routes)

export default CustomRouter