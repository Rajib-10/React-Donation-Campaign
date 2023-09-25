import { useEffect, useState } from "react";
import DonationCard from "../../Components/DonationCard/DonationCard";


const Donation = () => {
    const [items,setItems] = useState([])
    const [noFound,setNoFound] = useState('')
    const [isShow ,setIsShow] = useState(false)
    useEffect(()=>{
        const storedItem = JSON.parse(localStorage.getItem('favorite'))
        if(storedItem){
            setItems(storedItem)
        }else{
            setNoFound("No Data Found")
        }

    },[])
    console.log(items)
    return (
        <div>
            {noFound ? <p className="flex justify-center items-center h-[80vh] font-bold">{noFound}</p> :
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        isShow ? items.map?.(donateItem=> <DonationCard key={donateItem.id} donateItem={donateItem} />)
                        :
                        items.slice(0,4).map?.(donateItem=> <DonationCard key={donateItem.id} donateItem={donateItem} />)
                    }
                </div>
                <div className="py-5 text-center">
                    {items.length>4 &&<button onClick={()=>setIsShow(!isShow)} className="btn btn-info bg-[#009444] text-white capitalize">{isShow ? "See Less" : "Show All"}</button>
}
                </div>
            </div>
            }
        </div>
    );
};

export default Donation;