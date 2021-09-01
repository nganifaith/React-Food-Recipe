import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../../components/MealCategory';
import MealImage from '../../components/MealImage';
import Main from '../../components/Main';

import { getMealsByCategory } from '../../API';

import { Wrapper, Content, Category } from './CategoryPage.styles';

import { getMeals } from '../../reducers/mealsList';
import { setMeals } from '../../actions';

const CategoryPage = () => {
  const [category, setCategory] = useState('Pasta');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const meals = useSelector(getMeals);

  useEffect(() => {
    setError('');
    getMealsByCategory(category)
      .then(({ meals }) => {
        dispatch(setMeals(meals));
      })
      .catch(() => {
        setError('Error fetching Data');
      });
  }, [category]);

  return (
    <Wrapper>
      <Content>
        <Category>
          <Categories current={category} onCategorySelected={setCategory} />
          <span>{error}</span>
        </Category>
        <Main header={`Category ~ ${category}`}>
          {meals.map((meal) => (
            <MealImage key={meal.idMeal} meals={meal} />
          ))}
        </Main>
      </Content>
    </Wrapper>
  );
};

export default CategoryPage;
