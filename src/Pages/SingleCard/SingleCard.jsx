import { Link, useLoaderData, useParams } from "react-router-dom";
import textImg from "../../assets/donation.jpg"
import { useEffect, useState } from "react";

const SingleCard = () => {
    const [item,setItem] = useState({})
    const {price ,description} = item
    const {id} = useParams();
    const  allItems = useLoaderData()
    
  

    useEffect(()=>{
        const specificItem = allItems.map(item=> item.id==id)
        setItem(specificItem)
    },[id,allItems])

    console.log(item)

    return (
        <div className="h-[70vh]">
            <img className="h-[70vh] w-full object-cover px-10" src={textImg} alt="" />
           <div className="h-[100px] bg-gray-900 w-[1070px] mx-10 absolute bottom-[12%] opacity-20">
           </div>
            <div className="absolute left-[10%] bottom-[16%]">
           <Link>
           <button className="btn btn-secondary capitalize">Donate ${price}</button>
           </Link>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default SingleCard;