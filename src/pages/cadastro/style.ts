import styled from 'styled-components';

export const Container = styled.div`
  input {
    border: 2px ridge gray;
    border-radius: 5px;
    padding: 4px;
  }
  button {
    border: 2px outset gray;
    background-color: gray;
    border-radius: 5px;
    padding: 8px;
  }
  button:hover {
    border: 2px inset lightgray;
    background-color: lightgray;    
  }
`;
