import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMeals } from '../actions';
import { searchMeals } from '../API';
import { getMeals } from '../reducers/mealsList';

import Main from '../components/Main';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const meals = useSelector(getMeals);
  useEffect(() => {
    searchMeals(searchTerm)
      .then(({ meals }) => {
        dispatch(setMeals(meals));
      })
      .catch((e) => {
        console.error(e);
      });
  }, [searchTerm]);
  return (
    <div>
      <h1> WelcomeFood lover</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      {meals.map((meal) => (
        <Main key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default Home;
