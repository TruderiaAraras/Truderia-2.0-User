import styled from 'styled-components';

export const ContainerPedido = styled.div`
    display: flex;
    overflow: hidden;
    padding: 30px;
`;

export const Card = styled.div`
    > form > input {
        border: gray solid 1px;
        border-radius: 3px;
        padding: 4px;
    }
    display-flex: column;
    border: brown solid 1px;
    border-radius: 3px;
    padding: 8px;
`;

export const CardTitle = styled.div`
    background-color: red;
    text-align: center;
    margin-bottom: 15px;
`

export const Button = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin-top: 15px;
`