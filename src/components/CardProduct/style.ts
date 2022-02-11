import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 125px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  margin-bottom: 0.9rem;
`;

export const WrapperPhoto = styled.div`
  width: 40%;
`;

export const Photo = styled.img`
  width: 140px;
  height: 96px;
  object-fit: cover;
  border-radius: 15px;
`;

export const WrapperContent = styled.div`
  width: 60%;
  padding-left: 10px;
`;

export const TopView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 18px;
  font-family: "Roboto Condensed", sans-serif;
  color: ${({ theme }) => theme.color.SHAPE};
`;

export const Description = styled.p`
  font-size: 13px;
  line-height: 13px;
  font-family: "Roboto Condensed", sans-serif;
  text-indent: 1em;
  color: ${({ theme }) => theme.color.SHAPE};
`;

export const BottomView = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5px;
`;

export const WrapperPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.color.SHAPE};
  font-family: "Roboto Condensed", sans-serif;
  font-size: 15px;

  > span {
    font-size: 18px;
  }
`;

export const PriceMini = styled.p`
  color: ${({ theme }) => theme.color.SHAPE};
  font-family: "Roboto Condensed", sans-serif;
  font-size: 13px;
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.SHAPE};
  padding: 4px 8px;
`;

export const ButtonTitle = styled.span`
  color: ${({ theme }) => theme.color.PRIMARY};
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

export const Separator = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.ORANGE_LIGHTER};
  opacity: 40%;
  margin-bottom: 16px;
  transition: 400ms ease-in-out;
`;