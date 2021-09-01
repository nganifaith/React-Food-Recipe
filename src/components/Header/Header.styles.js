import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0 0px 6px 0 grey;
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--white);
  padding: 0 10px;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;
export const LogoImage = styled.img`
  height: 70px;
  object-fit: contain;
`;
export const NavBar = styled.nav`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 10px;
    font-size: 14px;
    cursor: pointer;
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:active {
    text-decoration: underline;
  }
`;
