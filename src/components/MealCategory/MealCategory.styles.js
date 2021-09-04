import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 10px;

  button {
    padding: 10px;
    cursor: pointer;
    background: transparent;
    border: none;
  }

  button.selected {
    background: cornsilk;
  }
`;
