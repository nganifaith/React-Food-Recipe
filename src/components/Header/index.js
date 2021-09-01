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
        <h3>Area</h3>
      </NavBar>
    </Content>
  </Wrapper>
);

export default Header;
