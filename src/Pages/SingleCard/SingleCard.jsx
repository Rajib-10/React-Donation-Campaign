import { Link, useLoaderData, useParams } from "react-router-dom";
import textImg from "../../assets/donation.jpg"
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const SingleCard = () => {
   const [itemFind,setItemFind] = useState({})
   const {price,description,title,image} = itemFind || {}
    const {id} = useParams();
    const  allItems = useLoaderData()
    
  
    useEffect(()=>{
        const findItem = allItems?.find(item=>item.id===id)
        setItemFind(findItem)
    },[id,allItems])

    const handleButton=()=>{
        const addedFavorite = []
        const storedItem = JSON.parse(localStorage.getItem('favorite'))
        if(!storedItem){
            addedFavorite.push(itemFind)
            localStorage.setItem('favorite', JSON.stringify(addedFavorite))
            Swal.fire(
                'Good job!',
                'Phone is added!',
                'success'
              )
        }else{
            const isExist = storedItem.find(phone=>phone.id===id)
            if(isExist){
                return  Swal.fire(
                    'Oops!',
                    'Never allow duplication!',
                    'error'
                  )
            }
            addedFavorite.push(...storedItem,itemFind)
            localStorage.setItem('favorite', JSON.stringify(addedFavorite))
            Swal.fire(
                'Good job!',
                'Phone is added!',
                'success'
              )
        }
    }
    



    return (
        <div className="h-[70vh]">
            <img className="h-[70vh] w-full object-cover px-10" src={image} alt="" />
           <div className="h-[100px] bg-gray-900 w-[1070px] mx-10 absolute bottom-[12%] opacity-20">
           </div>
            <div className="absolute left-[10%] bottom-[16%]">
           <Link>
           <button onClick={handleButton} className="btn btn-secondary capitalize">Donate ${price}</button>
           </Link>
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default SingleCard;