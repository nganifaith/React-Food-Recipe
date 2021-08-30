import React from 'react';
import PropTypes from 'prop-types';

import { Content, Wrapper } from './Main.styles';
import MealImage from '../MealImage';

const Main = ({ meal }) => (
  <Wrapper>
    <Content>
      <MealImage image={`${meal.strMealThumb}/preview`} />
      <h1>{meal.strMeal}</h1>
      <div>{meal.strArea}</div>
    </Content>
  </Wrapper>
);

Main.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strArea: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};
export default Main;
