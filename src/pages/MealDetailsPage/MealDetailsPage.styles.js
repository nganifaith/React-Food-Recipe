import styled from 'styled-components';

export const Main = styled.div``;
export const Wrapper = styled.div``;
export const Content = styled.div``;
export const Recipe = styled.div``;
export const Ingredients = styled.div``;
export const MealImage = styled.img``;
export const IngredientsImage = styled.img`
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;

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
