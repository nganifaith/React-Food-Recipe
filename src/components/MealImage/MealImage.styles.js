import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;
  box-shadow: 5px 5px 10px 5px rgb(220 219 219 / 92%);

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
  padding: 2px;

  h1 {
    font-size: var(--fontMed);
    padding-right: 2px;
    margin-right: 5px;

    &:not(:last-child) {
      border-right: 2px solid var(--medGrey);
    }
  }
`;

export default Image;
