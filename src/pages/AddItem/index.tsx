import React, { useState } from "react";

import { InputOptions } from "../../components/InputOptions";

import {
  Container,
  ButtonClose,
  Header,
  Photo,
  InfoWrapper,
  Title,
  Description,
  OptionInput,
  TitleItem,
  WrapperOption,
  TextArea,
  Footer,
  ButtonQuantity,
  IconAdd,
  IconSub,
  ButtonAdd,
} from "./style";

export const AddItem: React.FC = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [quantityProduct, setQuantityProduct] = useState(0);

  function handleClose() {
    console.log("teste");
  }

  function handleCount(value: string) {
    if (value === "+") {
      setQuantityProduct((state) => state + 1);
    } else {
      if (quantityProduct <= 0) return;
      setQuantityProduct((state) => state - 1);
    }
  }

  function transformToRealBRL(value: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  return (
    <Container>
      <Header>
        <ButtonClose onClick={handleClose}>
          <span>Cancelar</span>
        </ButtonClose>
        <Photo src="https://revistacontinente.com.br/image/view/news/image/1218" />
      </Header>

      <InfoWrapper>
        <Title>ESPECIAL DE NATAL TRUDELTTONE</Title>
        <Description>
          Nossa deliciosa e exclusiva massa romena, com um recheio muito
          especial de Natal: brigadeiro branco sabor panetone e frutas
          cristalizadas!
        </Description>
      </InfoWrapper>

      <OptionInput>
        <TitleItem>Sorvetes</TitleItem>
        <WrapperOption>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <InputOptions key={item} setTotalCount={setTotalCount} />
          ))}
        </WrapperOption>
      </OptionInput>

      <OptionInput>
        <TitleItem>Bebidas</TitleItem>
        <WrapperOption>
          {[1, 2, 3].map((item) => (
            <InputOptions key={item} setTotalCount={setTotalCount} />
          ))}
        </WrapperOption>
      </OptionInput>

      <OptionInput>
        <TitleItem>OBSERVAÇÕES</TitleItem>
        <TextArea />
      </OptionInput>

      <Footer>
        <ButtonQuantity>
          <span>Qntde.</span>
          <div>
            <IconSub onClick={() => handleCount("-")} />
            <span>{quantityProduct}</span>
            <IconAdd onClick={() => handleCount("+")} />
          </div>
        </ButtonQuantity>

        <ButtonAdd>
          <span>Adicionar ao carrinho</span>
          <span>{transformToRealBRL(100)}</span>
        </ButtonAdd>
      </Footer>
    </Container>
  );
};
