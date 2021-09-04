import React from 'react';
import PropTypes from 'prop-types';

import searchIcon from '../../images/search-icon.svg';

import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => (
  <Wrapper>
    <Content>
      <img src={searchIcon} alt="search-icon" />
      <input
        type="text"
        placeholder="Search A Meal"
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
    </Content>
  </Wrapper>
);

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};
export default SearchBar;
