/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AllCard = ({allCard}) => {
    const {id,category,image,title,category_bg,card_bg,text_color} = allCard || {}
    return (
        <div>
           <Link to={`/singleItem/${id}`}>
           <div className="card card-compact shadow-xl" style={{backgroundColor:card_bg,color:text_color}}>
                <figure><img src={image} alt="card img" /></figure>
                <div className="card-body">
                     <h2 className="p-1 font-semibold w-2/6 text-center rounded-md" style={{backgroundColor:category_bg}}>{category}</h2>
                    <p className="card-title">{title}</p>
                </div>
             </div>
           </Link>
        </div>
    );
};

export default AllCard;

