import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../Layouts/MainLaout";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLaout />
    }
])
    


export default myCreatedRoute;