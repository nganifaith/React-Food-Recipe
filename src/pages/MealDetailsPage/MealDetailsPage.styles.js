import styled from 'styled-components';

export const Main = styled.div`
  margin: 0;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  min-width: 300px;

  h1 {
    color: black;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
`;
export const MealImage = styled.img`
  max-width: 300px;
  top: 5px;
  box-shadow: 5px 5px 10px 5px rgb(220 219 219 / 92%);
  object-fit: cover;
`;
export const Ingredients = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
  padding: 2px;
  flex-wrap: wrap;
  flex: 1;
  min-width: 300px;
  max-width: 800px;
`;

export const IngredientsImage = styled.img`
  width: 100;
  max-width: 200px;
  padding: 0 20px;
  margin: 5px;
  align-items: center;
  display: flex;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 5px;
  animation: animateThumb 0.5s;
  box-shadow: 2px 2px 3px 2px rgb(220 219 219 / 50%);

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
  margin: auto;
  max-width: 1000px;
`;
