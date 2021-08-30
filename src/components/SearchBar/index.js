import React from 'react';
import { Wrapper, Content } from './SearchBar.styles';
import searchIcon from '../../images/search-icon.svg';

const SearchBar = () => (
  <>
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="Search icon" />
        <input type="text" placeholder="Search Meal" />
      </Content>
    </Wrapper>
  </>
);

export default SearchBar;
