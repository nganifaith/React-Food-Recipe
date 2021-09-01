import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Image, Content } from './MealImage.styles';

const MealImage = ({ meals }) => (
  <Link to={`/recipe/${meals.idMeal}`}>
    <Image src={`${meals.strMealThumb}/preview`} alt="movie-thumb" />
    <Content>
      <h1>{meals.strMeal}</h1>
      {meals.strArea ? <h3>{meals.strArea}</h3> : ''}
    </Content>
  </Link>
);

MealImage.propTypes = {
  meals: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strArea: PropTypes.string,
  }).isRequired,
};

export default MealImage;
