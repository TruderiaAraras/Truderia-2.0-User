import React from "react";

import { menuView } from '../../database/data';

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

  ViewCategory,
  IconArrow,
  TitleCategory
} from "./style";

import Svg from '../../assets/svg/arrowRight.svg'

function CategoryLabel() {
  return(
    menuView.forEach(({ category,  name: categoryName, items: categoryItems }) => {
      <ViewCategory>
          <IconArrow src={Svg}/>
          <TitleCategory>${categoryName}</TitleCategory>
      </ViewCategory>
    })
  )
}

export const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo/>
      </Header>

      <Content>
      <IconArrow src={Svg}/>
        {CategoryLabel}
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
