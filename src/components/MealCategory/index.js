import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatergories } from '../../reducers/catergoryList';
import { getAllCatergory } from '../../API';
import { setCatergories } from '../../actions';
import { Wrapper, Content } from './MealCategory.styles';

const Catergories = () => {
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
          <div key={strCategory}>{strCategory}</div>
        ))}
      </Content>
    </Wrapper>
  );
};

export default Catergories;
