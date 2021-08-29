import React, { useState, useEffect } from 'react';
import { searchMeals } from '../API';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    searchMeals(searchTerm).then((meals) => {
      console.log(meals);
    });
  }, [searchTerm]);
  return (
    <div>
      <h1> Food lover</h1>
      <div> Welcome Home</div>
    </div>
  );
};

export default Home;
