import styled from "styled-components";
import { FaPlus } from "react-icons/fa"; //Icon de add
import { FaMinus } from "react-icons/fa"; // Icon de sub

export const Container = styled.div``;

export const Header = styled.div`
  width: 100%;
`;

export const ButtonClose = styled.div`
  > span {
    cursor: pointer;
    position: fixed;
    background: ${({ theme }) => theme.color.ALERT};
    font-weight: bold;
    font-size: 16px;
    color: ${({ theme }) => theme.color.SHAPE};
    padding: 5px 8px;
    border-radius: 7px;
    left: 5px;
    top: 5px;
    border: 1px solid transparent;
  }
`;

export const Photo = styled.img`
  max-height: 40vh;
  width: 100%;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: auto auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.BLACK};
  font-family: "Roboto Condensed", sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  padding: 16px 8px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.BLACK};
  font-family: "Roboto Condensed", sans-serif;
  font-size: 16px;
  padding: 16px 8px;
`;

export const OptionInput = styled.div``;

export const TitleItem = styled.p`
  color: ${({ theme }) => theme.color.SHAPE};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.color.PRIMARY};
`;

export const WrapperOption = styled.div`
  color: ${({ theme }) => theme.color.BLACK};
  display: flex;
  flex-direction: column;
  margin: 16px auto;
`;

export const Footer = styled.div`
  margin-top: auto;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const ButtonQuantity = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 24px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.color.PRIMARY};

  span {
    width: 100%;
    font-weight: bold;
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
    text-align: flex-end;
    color: ${({ theme }) => theme.color.SHAPE};
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 6px;
    color: ${({ theme }) => theme.color.SHAPE};

    span {
      padding: 0 10px;
    }
  }
`;

export const IconAdd = styled(FaPlus)`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.color.SHAPE};
`;

export const IconSub = styled(FaMinus)`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.color.SHAPE};
`;

export const ButtonAdd = styled.button`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background: ${({ theme }) => theme.color.SUCCESS};
  box-shadow: 2px 2px 12px -4px rgb(0 0 0 / 60%);
  font-weight: bold;
  cursor: pointer;

  padding: 16px 24px;
  border-radius: 4px;

  span {
    color: white;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 16px;
  }
`;

export const TextArea = styled.textarea`
  width: calc(100% - 12px);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: black;
  height: 150px;
  margin: 8px 6px;
  border-radius: 4px;
  padding: 6px;

  font-size: 15px;
  font-family: "Roboto Condensed", sans-serif;

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.PRIMARY};
  }
`;
