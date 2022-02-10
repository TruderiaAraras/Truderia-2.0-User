import React from "react";

import {
  Container,
  WrapperPhoto,
  Photo,
  WrapperContent,
  TopView,
  Title,
  Description,
  BottomView,
  WrapperPrice,
  Price,
  PriceMini,
  Button,
  ButtonTitle,
  Separator
} from "./style";

interface Props {
  data?: {
    title: string;
    description: string;
    photo: string;
    price: number;
    miniPrice: number;
  }
}

export const CardProduct: React.FC<Props> = ({data}) => {
  return (
    <>
      <Container>
        <WrapperPhoto>
          <Photo src="https://github.com/joaovictormartin.png" />
        </WrapperPhoto>

        <WrapperContent>
          <TopView>
            <Title>TRUDELTTONE</Title>
            <Description>Nossa deliciosa e exclusiva massa romena, com um recheio muito especial de Natal: brigadeiro branco sabor panetone e frutas cristalizadas!</Description>
          </TopView>

          <BottomView>
            <WrapperPrice>
              <Price><span>R$</span>16,00</Price>

              {!data?.miniPrice && (
                <PriceMini>Mini 12,00</PriceMini>
              )}
            </WrapperPrice>

            <Button>
              <ButtonTitle>Escolher</ButtonTitle>
            </Button>
          </BottomView>
        </WrapperContent>
      </Container>
      <Separator/>
    </>
  );
};