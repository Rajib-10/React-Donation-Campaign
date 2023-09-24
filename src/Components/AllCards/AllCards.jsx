/* eslint-disable react/prop-types */
import AllCard from "../AllCard/AllCard";


const AllCards = ({allCards}) => {
    return (
        <div className="py-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                allCards?.map(allCard=> <AllCard key={allCard.id} allCard={allCard} />)
            }
        </div>
        </div>
    );
};

export default AllCards;