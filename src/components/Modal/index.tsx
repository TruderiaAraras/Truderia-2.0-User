import React from "react";
import Modal from "react-modal";

import {
  customSizeStyles,
  customTimeStyles,
  Content,
  Title,
  Buttons,
  Button,
  ButtonClose,
  TextInfo,
} from "./styles";

import { useCookies } from "react-cookie";

import { useNavigate } from "react-router-dom";

interface Props {
  isOpen: boolean;
  type: "time" | "size";
  onRequestClose: () => void;
}

export const NewModal: React.FC<Props> = ({ isOpen, type, onRequestClose }) => {
  const [cookie, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
      ariaHideApp={false}
      style={type === 'size' ?{
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
      } : {
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
      }}
    >
      {type === "size" && (
        <>
          <Content>
            <Title>Qual tamanho você deseja?</Title>

            <Buttons>
              <Button onClick={() => {
                const produto = {
                  categoria: cookie.Produto.categoria,
                  sabor: cookie.Produto.sabor,
                  descricao: cookie.Produto.descricao,                
                  preco: cookie.Produto.fullPrice
                };
                setCookie("Produto", produto,{ secure: true, sameSite: "none" });
                navigate("/addItem")
              }}>Normal</Button>
              <Button onClick={() => {
                const produto = {
                  categoria: cookie.Produto.categoria,
                  sabor: cookie.Produto.sabor,
                  descricao: cookie.Produto.descricao,                 
                  preco: cookie.Produto.miniPrice
                };
                setCookie("Produto", produto,{ secure: true, sameSite: "none" });
                navigate("/addItem");
              }}>Mini</Button>
            </Buttons>
          </Content>

          <ButtonClose>
            <span onClick={onRequestClose}>Cancelar</span>
          </ButtonClose>
        </>
      )}
      
      {type === "time" && (
        <Content>
          <TextInfo>
            Não é possivel realizar o pedido no momento.<br/><br/> Nosso horário de atendimento é : <br/><br/>
            <span>
              - Quinta a Sábado das 18 às 22hrs <br/>
              - Domingo das 16 às 20hrs
            </span> <br/><br/>
            <p>
              Caso queira tirar alguma dúvida 
              <a href="https://api.whatsapp.com/send?phone=5519996929909">  clique aqui  </a> 
              para ser direcionado(a) ao nosso Whattsapp
            </p>
          </TextInfo>
          <Button onClick={() => navigate("/home")}>OK</Button>
        </Content>
      )}
    </Modal>
  );
};
