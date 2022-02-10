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
    grid-template-rows: 40px 2fr;
    grid-template-areas: "title title" "body body";
    margin: 20px;
    text-align: center;
    border: gray solid 1px;
    border-radius: 10px;
    overflow: hidden;
    justify-content: space-between;
`;

export const CardTitle = styled.div`
    grid-area: title;
    background-color: rgb(51, 17, 17);    
    text-align: center;
    color: white;
    font-size: 20px;
    height: auto;
    padding-top: 10px;    
`

export const CardBody = styled.div`
    grid-area: body;    
    text-align: center;
`

export const CardFooter = styled.div`
    grid-area: ancor;
    height: 40px;
    text-align: center;
`

export const Button = styled.button` 
    width: 100%;
    height: 100%;
    background-color: #4CAF50;
    border: none;
    color: white;
    text-decoration: none;
    font-size: 20px;
`

export const Form = styled.form`
    > input {
        border: gray solid 1px;
        border-radius: 6px;
        padding: 8px;
        width: 70%;
        margin-bottom: 15px;
        font-size: 16px;
    }
    > label {
        margin-left: 20px;
        text-align: none;
        align-self: start;
        margin-bottom: 4px;
    }
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Table = styled.table`
    td {
        color: red; 
        padding: 10px;
    }
    align-items: center;
    width: 100%;
`