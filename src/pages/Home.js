import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMeals } from '../actions';
import { searchMeals } from '../API';
import { getMeals } from '../reducers/mealsList';

import Main from '../components/Main';
import SearchBar from '../components/SearchBar';
import MealImage from '../components/MealImage';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const meals = useSelector(getMeals);
  useEffect(() => {
    setError('');
    searchMeals(searchTerm).then(({ meals }) => {
      dispatch(setMeals(meals));
    });
  }, [searchTerm]);
  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <span>{error}</span>
      <Main header={searchTerm ? 'Search Results' : 'All Meals'}>
        {meals.map((meal) => (
          <MealImage key={meal.idMeal} meals={meal} />
        ))}
      </Main>
    </div>
  );
};

export default Home;
