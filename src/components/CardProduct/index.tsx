import React from "react";
import { useCookies } from "react-cookie";

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
  image: string;
  price: number;
  miniPrice: number;
}

interface Props {
  onClick?: () => void;
  data?: CardProductProps;
  categoryName?: string;
}

export const CardProduct: React.FC<Props> = ({ categoryName, data, onClick }) => {
  const [cookie, setCookie, removeCookie] = useCookies();
  
  return (
    <>
      <Container>
        <WrapperPhoto>
          <Photo src={data?.image} />
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

            <Button onClick={() => {
              onClick();
              const produto = [{
                categoria: categoryName,
                sabor: data?.flavour,
                imagem: data?.image,
                descricao: data?.description,
                miniPrice: data?.miniPrice,
                fullPrice: data?.price
              }]
              setCookie("Produto", produto, { secure: true, sameSite: "none" });
            }}>
              <ButtonTitle>Escolher</ButtonTitle>
            </Button>
          </BottomView>
        </WrapperContent>
      </Container>
      <Separator />
    </>
  );
};
