import React, { useState } from "react";

import { CardProduct } from '../../components/CardProduct'
import { NewModal } from '../../components/Modal'

import {
  Container,
  Header,
  Logo,
  Content,
  Footer,
  TopFooter,
  TitleFooter,
  BottomFooter,
  LinkButton,
  IconWhatsApp,
  IconInstagram,
  IconFacebook,
} from "./style";

export const Home: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Container>
        <Header>
          <Logo/>
        </Header>

        <Content>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
        </Content>

        <Footer>
          <TopFooter>
            <TitleFooter>CONTATO E MÍDIAS</TitleFooter>
            <TitleFooter>SOCIAIS</TitleFooter>
          </TopFooter>

          <BottomFooter>
            <LinkButton href="https://api.whatsapp.com/send?phone=5519996929909">
              <IconWhatsApp />
            </LinkButton>
            <LinkButton href="https://www.instagram.com/truderia/">
              <IconInstagram />
            </LinkButton>
            <LinkButton href="https://www.facebook.com/TruderiaAraras">
              <IconFacebook />
            </LinkButton>
          </BottomFooter>
        </Footer>
      </Container>

      <NewModal
        type="time"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </>
  );
};
