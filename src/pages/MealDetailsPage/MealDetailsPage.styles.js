import styled from 'styled-components';

export const Main = styled.div`
  margin: 10px 0 0 20px;
`;
export const Wrapper = styled.div``;

export const Content = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MealImage = styled.img`
  max-width: 500px;
`;
export const Ingredients = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
  padding: 2px;
  flex-wrap: wrap;
  flex: 1;
`;

export const IngredientsImage = styled.img`
  width: 100;
  max-width: 200px;
  padding: 0 20px;
  align-items: center;
  display: flex;
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

export const Recipe = styled.div`
  padding: 20px;
  line-height: 1.5rem;
  font-size: large;
  margin: 10px;
`;
