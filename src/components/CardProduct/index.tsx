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
  Separator,
} from "./style";

export interface CardProductProps {
  flavour: string;
  description: string;
  photo: string;
  price: number;
  miniPrice: number;
}

interface Props {
  data?: CardProductProps;
}

export const CardProduct: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Container>
        <WrapperPhoto>
          <Photo src="https://revistacontinente.com.br/image/view/news/image/1218" />
        </WrapperPhoto>

        <WrapperContent>
          <TopView>
            <Title>{data?.flavour}</Title>
            <Description>{data?.description}</Description>
          </TopView>

          <BottomView>
            <WrapperPrice>
              <Price>
                <span>R$</span>{data?.price},00
              </Price>

              {data?.miniPrice && <PriceMini>{`Mini ${data?.miniPrice},00`}</PriceMini>}
            </WrapperPrice>

            <Button>
              <ButtonTitle>Escolher</ButtonTitle>
            </Button>
          </BottomView>
        </WrapperContent>
      </Container>
      <Separator />
    </>
  );
};
