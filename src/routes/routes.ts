import {
    createBrowserRouter,
} from "react-router-dom";

import ProductList from "../page/ProductList/ProductList";
import Form from "../page/Form/Form";
import App from "../App";



const routers = createBrowserRouter([
    {
        path: "/",
        Component: App
    },
    {
        path: "products",
        Component: ProductList,
    },
    {
        path: "/form",
        Component: Form,
    }
])

export default routers;