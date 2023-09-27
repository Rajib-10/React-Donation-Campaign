/* eslint-disable react/prop-types */
import AllCard from "../AllCard/AllCard";
const AllCards = ({ allCards, categoryFilter }) => {
    const filteredCards = categoryFilter
      ? allCards.filter((card) => card.category.includes(categoryFilter.toLowerCase()))
      : allCards;
    return (
      <div className="py-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredCards.length > 0 ? filteredCards?.map((allCard) => ( 
            <AllCard key={allCard.id} allCard={allCard} />
          )) : <div className="flex justify-center items-center">
            <p className="font-bold text-red-600 py-6">Not Found Matching data</p>
          </div> }
        </div>
      </div>
    );
  };
  
  export default AllCards;
  