import React from 'react';
import PropTypes from 'prop-types';
import { Image, Content } from './MealImage.styles';

const MealImage = ({ meals }) => (
  <div>
    <Image src={`${meals.strMealThumb}/preview`} alt="movie-thumb" />
    <Content>
      <h1>{meals.strMeal}</h1>
      <h3>{meals.strArea}</h3>
    </Content>
  </div>
);

MealImage.propTypes = {
  meals: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strArea: PropTypes.string.isRequired,
  }).isRequired,
};

export default MealImage;
