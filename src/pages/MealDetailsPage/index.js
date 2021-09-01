import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setMealDetails } from '../../actions';
import { getMealDetails } from '../../API';
import { getDetails, getIngredients } from '../../reducers/mealDetails';
import {
  Content,
  Ingredients,
  Main,
  Recipe,
  ImageWrapper,
  IngredientsImage,
  MealImage,
} from './MealDetailsPage.styles';

const MealDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const mealDetail = useSelector(getDetails);
  const mealIngredients = useSelector(getIngredients);

  useEffect(() => {
    getMealDetails(id).then(({ meals }) => {
      dispatch(setMealDetails(meals[0]));
    });
  }, [id]);
  return (
    <Main>
      <Content>
        <ImageWrapper>
          <MealImage src={`${mealDetail.strMealThumb}/preview`} alt="Meal" />
          <h1>{mealDetail.strMeal}</h1>
        </ImageWrapper>

        <Ingredients>
          {mealIngredients.map(({
            ingredient, i, image, measure,
          }) => (
            <div key={i}>
              <IngredientsImage src={image} alt="Ingredient Image" />
              {ingredient}
              {measure}
            </div>
          ))}
        </Ingredients>
      </Content>

      <Recipe>
        <h3>Recipe</h3>
        {mealDetail.strInstructions}
      </Recipe>
    </Main>
  );
};

export default MealDetails;
