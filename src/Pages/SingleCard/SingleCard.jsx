import {  useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const SingleCard = () => {
   const [itemFind,setItemFind] = useState({})
   const {price,description,title,image,text_color} = itemFind || {}
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
            <img className="h-[70vh] w-full object-cover px-2 md:px-10" src={image} alt="" />
           <div className="h-[100px] bg-gray-900  md:w-[688px] lg:w-[945px] xl:w-[1070px] mx-10 absolute  md:bottom-[9%] lg:bottom-[9%] xl:bottom-[12%] opacity-20">
           </div>
            <div className="absolute left-[7%] bottom-[5%] md:bottom-[13%]  lg:bottom-[13%] xl:bottom-[16%] xl:left-[16%]">
           
           <button onClick={handleButton} className="btn btn-secondary capitalize border-none outline-none" style={{backgroundColor:text_color}}>Donate ${price}</button>
           
            </div>
            <h1 className="text-[#0B0B0B] font-bold text-xl md:text-4xl mt-14 px-2 md:px-10 ">{title}</h1>
            <p className="text-[#0B0B0BB2] mt-6 text-justify px-2 md:px-10 pb-10">{description}</p>
        </div>
    );
};

export default SingleCard;