import { useEffect, useState } from "react";
// import { VictoryPie } from "victory";
import  Chart from "react-apexcharts"
import { useLoaderData } from "react-router-dom";


const Statistics = () => {
    const [count,setCount] = useState(0)
    const [totalCount,setTotalCount] = useState(0)
    const allItems = useLoaderData()
    useEffect(()=>{
        const storedItem = JSON.parse(localStorage.getItem('favorite'))
        // setCount(storedItem.reduce((prev,current)=>prev+current.price,0))
        setCount(storedItem.length)
        // setTotalCount(allItems.reduce((prev,current)=>prev+current.price,0))
        setTotalCount(allItems.length)
        
    },[allItems])
    
    return (
        
        <div>
            {/* <VictoryPie width={1000}
            colorScale={["#4AAE9B", "#EFBB35"]}
            data={[
                { x: "Your Donation", y: count },
                { x: "Total Donation", y: 12 }
                
            ]}
            /> */}
    <Chart type="pie"
    width={1000}
    height={450}
    series={[count,totalCount]}
    options={{
        title:{text:"Donation Campaign Pie Chart"},
        labels:['Your donation $',"Total donation $",],
    }}
    >

    </Chart>
        
        </div>
    );
};

export default Statistics;