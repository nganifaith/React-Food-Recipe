import React from 'react';
import PropTypes from 'prop-types';

import { Content, Wrapper } from './Main.styles';

const Main = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

Main.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Main;
