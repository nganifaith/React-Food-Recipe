import React from 'react';
import PropTypes from 'prop-types';
import Image from './MealImage.styles';

const MealImage = ({ image }) => (
  <div>
    <Image src={image} alt="movie-thumb" />
  </div>
);

MealImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default MealImage;
