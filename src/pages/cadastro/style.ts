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
  .viaCep {
    background-color: green;
    border-radius: 10px;
    color: white;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  background-color: #610000;
  padding: 20px;
  color: white;
`
export const SharedControl = styled.div`
  .firstDiv {
    div:first-child {
      align-self: flex-start;
    }
    display: flex;
    flex-direction: column;    
  }
  .secondDiv {
    label {
      align-self: flex-start;
    }
    display: flex;
    flex-direction: column;
  }
  .city {
    width: 80%;
    margin-right: 5%;
  }
  .state {
    width: 15%;
  }
  .name {
    width: 55%;
    margin-right: 5%;
  }
  .birthday {
    width: 40%;
  }
  .street {
    width: 75%;
    margin-right: 5%;
  }
  .number {
    width: 20%;
  }
  display: flex;
  justify-content: baseline;
  flex-direction: row;
  margin-bottom: 3px;
  width: 100%;
`

export const FormEndereco = styled.div`
  input {
    margin-bottom: 2px;
  }
  flex-direction: column;
  display: flex;
  margin-bottom: 10px;
`

export const FormCep = styled.div`
  input {
    width: 30%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 8px;
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