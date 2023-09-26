import { useLoaderData } from "react-router-dom";
import AllCards from "../../Components/AllCards/AllCards";
import Banner from "../../Components/Header/Banner/Banner";

import { useState } from 'react';

const Home = () => {
  const allCards = useLoaderData();
  const [categoryFilter, setCategoryFilter] = useState('');

  const filterByCategory = (category) => {
    setCategoryFilter(category);
  };

  return (
    <div>
      <Banner onSearch={filterByCategory} />
      <AllCards allCards={allCards} categoryFilter={categoryFilter} />
    </div>
  );
};

export default Home;