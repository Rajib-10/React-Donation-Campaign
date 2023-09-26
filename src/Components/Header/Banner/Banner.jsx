/* eslint-disable react/prop-types */

import BannerImg from "../../../assets/Main.png"
import { useState } from "react";
const Banner = ({ onSearch }) => {
    const [searchCategory, setSearchCategory] = useState('');
  
    const handleSearch = () => {
      onSearch(searchCategory);
    };
  
    return (
      <div className="h-[70vh] text-center">
        <img src={BannerImg} className="h-[70vh] object-cover w-full opacity-10" alt="" />
        <div className="absolute left-[7%] top-[48%] md:top-[46%] lg:top-[40%] md:left-[20%] lg:left-[12%]  xl:left-[20%] text-center space-y-5">
          <h1 className="text-[#0B0B0B] text-xl md:text-3xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
          <input
            type="text"
            placeholder="Search here..."
            className="input input-md w-full max-w-[200px] md:max-w-xs rounded-none rounded-l-lg outline-none focus:outline-none"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          />
          <button
            className="btn btn-secondary bg-[#FF444A] border-none outline-none rounded-none rounded-r-lg text-white capitalize"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    );
  };
  
  export default Banner;