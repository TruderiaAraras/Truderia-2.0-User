import React, { useState } from "react";

import { menuView } from "../../database/data";
import { NewAccordion } from "../../components/Accordion";
import { NewModal } from "../../components/Modal";

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
  const [modalIsOpen, setIsOpen] = useState(false);

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
          <Logo />
        </Header>

        <Content>
          {menuView.map(
            ({ category, name: categoryName, items: categoryItems }) => (
              <NewAccordion
                key={category}
                title={categoryName}
                item={categoryItems}
                onClick={openModal}
              />
            )
          )}
          <div />
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

      <NewModal type="size" isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  );
};
