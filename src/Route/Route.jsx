import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../Layouts/MainLaout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Error from "../Pages/Statistics/Error/Error";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLaout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/donation",
                element: <Donation />
            },{
                path: "/statistics",
                element: <Statistics />
            }
        ]
    }
])
    


export default myCreatedRoute;