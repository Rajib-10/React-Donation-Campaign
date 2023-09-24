import { useLoaderData } from "react-router-dom";
import AllCards from "../../Components/AllCards/AllCards";
import Banner from "../../Components/Header/Banner/Banner";


const Home = () => {
    const allCards = useLoaderData()
   
    return (
        <div>
            <Banner />
            <AllCards allCards={allCards}/>
        </div>
    );
};

export default Home;