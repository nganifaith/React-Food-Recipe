import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMeals } from '../actions';
import { searchMeals } from '../API';
import { getMeals } from '../reducers/mealsList';

import Main from '../components/Main';

const Home = () => {
  const [searchTerm] = useState('');
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
      <h1> Food lover</h1>
      <div>Welcome</div>
      {meals.map((meal) => (
        <Main key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default Home;
