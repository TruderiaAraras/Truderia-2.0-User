import React from "react";
import Modal from "react-modal";

import {
  //customSizeStyles,
  //customTimeStyles,
  Content,
  Title,
  Buttons,
  Button,
  ButtonClose,
  TextInfo,
} from "./styles";

interface Props {
  isOpen: boolean;
  type: "time" | "size";
  onRequestClose: () => void;
}

export const NewModal: React.FC<Props> = ({ isOpen, type, onRequestClose }) => {

  function teste() {
    console.log('teste')
  }
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
      ariaHideApp={false}
      // style={type === 'size' ? customSizeStyles : customTimeStyles}
    >
      {type === "size" && (
        <>
          <Content>
            <Title>Qual tamanho você deseja?</Title>

            <Buttons>
              <Button onClick={() => console.log("teste")}>Normal</Button>
              <Button>Mini</Button>
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
          <Button onClick={teste}>OK</Button>
        </Content>
      )}
    </Modal>
  );
};
