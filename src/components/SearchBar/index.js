import React, { useState } from 'react';
import PropTypes from 'prop-types';

import searchIcon from '../../images/search-icon.svg';

import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
  const [setState] = useState('');

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search A Meal"
          onChange={(e) => setState(e.currentTarget.value)}
          value={setSearchTerm}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.string.isRequired,
};
export default SearchBar;
