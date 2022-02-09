import styled from 'styled-components';

export const ContainerPedido = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;            
`;

export const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 2fr 1fr;
    grid-template-areas: "title title" "body body" "ancor ancor";
    grid-row-gap: 15px;
    margin: 20px;
    text-align: center;
    border: brown solid 2px;
    border-radius: 5px;
    overflow: hidden;
    justify-content: space-between;
`;

export const CardTitle = styled.div`
    grid-area: title;
    background-color: red;    
    text-align: center;
    color: white;
    font-size: 20px;
    padding-top: 3px;
`

export const CardBody = styled.div`
    grid-area: body;
    > form > input {
        border: gray solid 1px;
        border-radius: 3px;
        padding: 4px;
    }
    > form > label {
        text-align: none;
    }
    text-align: center;
`

export const CardFooter = styled.div`
    grid-area: ancor;
    text-align: center;
`

export const Button = styled.button` 
    width: 100%;
    height: 100%;
    background-color: #4CAF50;
    border: none;
    color: white;
    text-decoration: none;
    font-size: 16px;
`