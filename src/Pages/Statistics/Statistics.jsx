import { useEffect, useState } from "react";
import  Chart from "react-apexcharts"
import { useLoaderData } from "react-router-dom";



const Statistics = () => {
    const [count,setCount] = useState(0)
    const [totalCount,setTotalCount] = useState(0)
    const allItems = useLoaderData()
    useEffect(()=>{
        const storedItem = JSON.parse(localStorage.getItem('favorite'))
        if(storedItem){
            setCount(storedItem.length)
        }else{
            setCount(0)
        }
        setTotalCount(allItems.length)
        
    },[allItems])
    
    return (
        
        <div>
           
    <Chart type="pie"
    className="w-full md:w-[70%] lg:w-[50%] mx-auto flex justify-center items-center"
    series={[count,totalCount-count]}
    options={{
        title:{text:"Donation Campaign Pie Chart"},
        labels:[`Your donation:${count}`,`Total donation:${totalCount}`,],
    }}
    >

    </Chart>
        </div>
    );
};

export default Statistics;