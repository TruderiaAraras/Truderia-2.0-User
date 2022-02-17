import React from "react";


import {
  Container,
  Content,
  Logo,
  WrapperButton,
  ButtonSocial,
  Button,
  Footer,
  TopFooter,
  TitleFooter,
  BottomFooter,
  LinkButton,
  IconWhatsApp,
  IconInstagram,
  IconFacebook,
} from "./style";

export const Welcome: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo />
        
        <WrapperButton>
          <LinkButton href="https://api.whatsapp.com/send?phone=5519996929909">
            <ButtonSocial>WHATSAPP - <span>Dúvidas? Fale conosco!</span></ButtonSocial>
          </LinkButton>

          <Button to="/home">CARDÁPIO E PEDIDOS</Button>
        </WrapperButton>
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
  );
};
