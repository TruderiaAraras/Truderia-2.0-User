import styled from "styled-components";
import { FaPlus } from 'react-icons/fa'; //Icon de add
import { FaMinus } from 'react-icons/fa'; // Icon de sub

export const Container = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 4px;
  grid-template-columns: 80px 45px 1fr 110px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const IconAdd = styled(FaPlus)`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.color.PRIMARY};
`;

export const IconSub = styled(FaMinus)`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.color.PRIMARY};
`;

export const PhotoOption = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.color.BLACK};
  font-family: "Roboto Condensed", sans-serif;
  font-size: 16px;
`;

export const Price = styled.div`
  color: ${({ theme }) => theme.color.BLACK};
  font-family: "Roboto Condensed", sans-serif;
  font-size: 16px;
  
  span {
    margin: 0 8px;
  }
`;