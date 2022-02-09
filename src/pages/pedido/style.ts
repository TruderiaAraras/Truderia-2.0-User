import styled from 'styled-components';

export const ContainerPedido = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;            
`;

export const Card = styled.div`
    margin: 20px;
    text-align: center;
    border: brown solid 2px;
    border-radius: 5px;
    overflow: hidden;
    justify-content: space-between;
`;

export const CardTitle = styled.div`
    background-color: red;
    text-align: center;
    margin-bottom: 15px;
    height: 30px;
    color: white;
    font-size: 20px;
    padding-top: 3px;
`

export const CardInputGroup = styled.div`
    > input {
        border: gray solid 1px;
        border-radius: 3px;
        padding: 4px;
    }
    > label {
        text-align: none;
    }
    text-align: center;
`

export const CardButton = styled.div`
    margin-top: 15px;
    text-align: center;
    height: 30px;
`

export const Button = styled.button` 
    background-color: #4CAF50;
    width: 100%;
    height: 100%;
    border: none;
    color: white;
    text-decoration: none;
    font-size: 16px;
`