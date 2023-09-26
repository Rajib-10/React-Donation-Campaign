import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../Layouts/MainLaout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Error from "../Pages/Statistics/Error/Error";
import SingleCard from "../Pages/SingleCard/SingleCard";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLaout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: ()=>fetch("/donation.json")
            },
            {
                path: "/donation",
                element: <Donation />
            },{
                path: "/statistics",
                element: <Statistics />,
                loader: ()=>fetch("/donation.json")
            },
            {
                path: "/singleItem/:id",
                element: <SingleCard />,
                loader: ()=>fetch("/donation.json")
            }
        ]
    }
])
    


export default myCreatedRoute;