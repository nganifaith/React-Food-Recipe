import React from 'react';
import { Link } from 'react-router-dom';

import {
  NavBar, Wrapper, Content, LogoImage,
} from './Header.styles';
import Logo from '../../images/logo.png';

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImage src={Logo} />
      <NavBar>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
      </NavBar>
    </Content>
  </Wrapper>
);

export default Header;
