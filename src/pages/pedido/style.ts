import styled, { css } from 'styled-components';

interface CardProps {
    noFooter?: boolean
}

const RobotoFont = css`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
`

export const ContainerPedido = styled.div`
    ${RobotoFont}
    width: 100vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
`;

const withoutFooter = {
    row: '40px 2fr',
    area: `"title title" "body body"`
};
const withFooter = {
    row: '40px 2fr 40px',
    area: `"title title" "body body" "ancor ancor"`
};

export const Card = styled.div<CardProps>`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: ${props => props.noFooter ? withoutFooter.row : withFooter.row};
    grid-template-areas: ${props => props.noFooter ? withoutFooter.area : withFooter.area};
    margin: 10px;
    text-align: center;
    border: gray solid 1px;
    border-radius: 10px;
    overflow: hidden;
    justify-content: space-between;
`;

export const CardTitle = styled.div`
    grid-area: title;
    background-color: #3a1212;    
    text-align: center;
    color: white;
    font-size: 20px;
    height: auto;
    padding-top: 10px;    
`;

export const CardBody = styled.div`
    grid-area: body;
    text-align: center;
`

export const CardFooter = styled.div`
    grid-area: ancor;
    height: 40px;
    text-align: center;
`;

export const Button = styled.button` 
    width: 100%;
    height: 100%;
    background-color: #02a802;
    border: none;
    color: white;
    text-decoration: none;
    font-size: 20px;
`;

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
        font-size: 16px;
    }
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Dropdown = styled.div`
    > label {
        margin-left: 20px;
        text-align: none;
        align-self: start;
        margin-bottom: 4px;
        font-size: 16px;
    }
    > select {
        border: gray solid 1px;
        border-radius: 6px;
        padding: 8px;
        width: 70%;
        margin-bottom: 15px;
        font-size: 16px;
    }
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Table = styled.table`
    .trash-icon {
        color: red;
        font-size: 22px;
    }
    td {
        color: black; 
        padding: 10px;
    }
    margin: 6px;
    align-items: center;
    width: 100%;
`;

export const Images = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Delivery = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100px;
    height: 100px;
    border: #dcdcdc solid 1px;
    border-radius: 8px;
    margin: 10px;
    padding: 8px;
    box-shadow: 5px 5px 10px gray;
    img {
        align-self: center;
        width: 70px;
        height: 70px;
    }
`

export const Withdraw = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100px;
    height: 100px;
    border: #dcdcdc solid 1px;
    border-radius: 8px;
    margin: 10px;
    padding: 8px;
    box-shadow: 5px 5px 10px gray;
    img {
        align-self: center;
        width: 70px;
        height: 70px;
    }
`