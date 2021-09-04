import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getCatergories } from '../../reducers/catergoryList';
import { getAllCatergory } from '../../API';
import { setCatergories } from '../../actions';
import { Wrapper, Content } from './MealCategory.styles';

const Categories = ({ current, onCategorySelected }) => {
  const dispatch = useDispatch();
  const catergories = useSelector(getCatergories);

  useEffect(() => {
    getAllCatergory().then(({ meals }) => {
      dispatch(setCatergories(meals));
    });
  }, []);

  return (
    <Wrapper>
      <Content>
        {catergories.map(({ strCategory }) => (
          <button
            type="button"
            className={`${current === strCategory ? 'selected' : ''}`}
            key={strCategory}
            onClick={() => onCategorySelected(strCategory)}
          >
            {strCategory}
          </button>
        ))}
      </Content>
    </Wrapper>
  );
};
Categories.propTypes = {
  current: PropTypes.string,
  onCategorySelected: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  current: 'Breakfast',
};
export default Categories;
