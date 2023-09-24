import BannerImg from "../../../assets/donation.jpg"

const Banner = () => {
    return (
        <div className="h-[70vh]">
            {/* <div className="card h-[70vh] bg-base-100 shadow-xl image-full">
             <figure><img src={BannerImg} alt="banner" /></figure>
            </div> */}
            <img src={BannerImg} className="h-[70vh] object-cover w-full opacity-10" alt="" />
            <div className="absolute top-[40%] left-[20%] text-center space-y-5">
             <h1 className="text-[#0B0B0B] text-5xl font-bold">I Grow By Helping People In Need</h1>
             <input type="text" placeholder="Search here..." className="input  input-md w-full max-w-xs rounded-none rounded-l-lg outline-none focus:outline-none" />
                <button className="btn btn-secondary bg-[#FF444A] border-none outline-none rounded-none rounded-r-lg text-white capitalize">Search</button>
             </div>
        </div>
    );
};

export default Banner;