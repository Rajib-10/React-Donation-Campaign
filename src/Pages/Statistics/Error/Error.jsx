
import { Link } from "react-router-dom";
import ErrorImg from "../../../assets/404.jpg"
const Error = () => {
    return (
       <div className="flex justify-center items-center h-screen">
         <div className="text-center">
            <img className="w-[70vh]" src={ErrorImg} alt="" />
            <Link to="/"><button className="btn btn-error">Go Home</button></Link>
        </div>
       </div>
    );
};

export default Error;