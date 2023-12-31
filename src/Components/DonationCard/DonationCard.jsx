/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const DonationCard = ({donateItem}) => {
    const {price,title,category,image,text_color,card_bg,category_bg,id} = donateItem
    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{backgroundColor:card_bg,color:text_color}}>
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                    src={image}
                    alt="image"
                    className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold capitalize leading-relaxed tracking-normal antialiased py-1 text-center rounded-md w-[17vh]" style={{backgroundColor: category_bg}}>
                    {category}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl lg:text-xl xl:text-2xl font-semibold leading-snug tracking-normal  antialiased text-black">
                    {title}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-semibold leading-relaxed  antialiased">
                   ${price}
                    </p>
                    <Link to={`/singleItem/${id}`}>
                    <button className="btn btn-secondary outline-none border-none md:font-semibold md:text-lg" style={{backgroundColor:text_color}}>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;