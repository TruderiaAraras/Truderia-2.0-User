import styled, { css } from 'styled-components';

const RobotoFont = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
`

export const Container = styled.div`
  ${RobotoFont}
  label {
    margin-bottom: 2px;
    align-self: flex-start;
  }
  input {
    border: 2px ridge gray;
    font-size: 1fr;
    border-radius: 5px;
    padding: 6px;
  }
  span {
    font-size: 10px;
    background-color: darksalmon;
    border-radius: 8px;
    padding: 4px;
    color: whitesmoke;
    margin-top: 2px;
    align-self: baseline;
  }
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: whitesmoke;
`;

export const Title = styled.div`
  font-size: 30px;
  background-color: #610000;
  padding: 20px;
  color: white;
`
export const SharedControl = styled.div`
  .sharedNome {
    label {
      
    }
    input {
      margin-right: 8px;
    }
  }
  .sharedAniversario {
    input {
      padding: 4px;
    }
  }
  display: flex;
  flex-direction: row;
  margin-bottom: 3px;
`

export const FormControl = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 8px;
`

export const SubmitButton = styled.div`
  button {
    border: 2px outset #E8A323;
    background-color: #E8A323; 
    border-radius: 5px;
    padding: 8px;
    margin-top: 10px;
  }
  .btnSubmitClick {
    border: 2px inset #E6932B;
    background-color: #E6932B;       
  }
`