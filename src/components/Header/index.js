import React from 'react';
import {
  NavBar, Wrapper, Content, LogoImage,
} from './Header.styles';
import Logo from '../../images/logo.png';

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImage src={Logo} />
      <NavBar>
        <h3>Home</h3>
        <h3>Area</h3>
      </NavBar>
    </Content>
  </Wrapper>
);

export default Header;
