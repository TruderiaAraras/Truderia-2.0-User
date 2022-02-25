import styled from "styled-components";

//Estilo do tamanho
export const customSizeStyles = {
  overlay: {
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    position: "fixed",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    zIndex: 5,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#3A1212",

    position: "relative",
    top: 0,
    left: 0,
    overflow: "visible",

    padding: 32,

    border: "none",
    borderRadius: 5,
  },
};

//Estilo do Horário
export const customTimeStyles = {
  overlay: {
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    position: "fixed",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    zIndex: 5,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    background: "#3A1212",
    position: "relative",
    top: 0,
    left: 0,
    padding: 32,

    border: "none",
    borderRadius: 15,
  },
};

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-family: "Roboto Condensed", sans-serif;
  color: ${({ theme }) => theme.color.SHAPE};
  font-size: 16px;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.color.PRIMARY};
`;

export const Button = styled.button`
  padding: 8px 16px;
  color: ${({ theme }) => theme.color.PRIMARY};
  font-family: "Roboto Condensed", sans-serif;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.SHAPE};
`;

export const ButtonClose = styled.div`
  > span {
    cursor: pointer;
    position: absolute;
    background: ${({ theme }) => theme.color.ALERT};
    font-weight: bold;
    font-size: 16px;
    color: ${({ theme }) => theme.color.SHAPE};
    padding: 2px 8px;
    border-radius: 5px;
    right: -15px;
    top: 5px;
    transform: rotate(45deg);
    box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.5);
    border: 1px solid black;
  }
`;

export const TextInfo = styled.h3`
  text-align: center;
  font-family: 'Roboto Condensed', sans-serif;
  color: ${({ theme }) => theme.color.SHAPE};
  font-size: 16px;
  margin-bottom: 25px;

  > span {
    color: orange;
    font-weight: bold;
  }

  > p {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;

    > a, 
      a.visited,
      a.houve,
      a.active {
      color: orange;
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 18px;
      text-decoration: underline;
    }
  }
`;

export const ButtonTime = styled.button`
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
