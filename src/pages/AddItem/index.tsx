import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { menuView } from '../../database/data';
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
  const [product, setProduct] = useState([]);
  const [cookie, setCookie, removeCookie] = useCookies();

  const navigate = useNavigate();

  function handleClose() {
    navigate("/home");
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

  function handleSubmit() {
    const produto = [{
      categoria: cookie.Produto[0].categoria,
      descricao: cookie.Produto[0].descricao,           
      preco: cookie.Produto[0].preco,
      sabor: cookie.Produto[0].sabor,
      quantidade: 1
    }];
    setCookie("Produto", produto, { secure: true, sameSite: "none" });
    navigate("/pedido");
  }

  useEffect(() => {
    const newProduct = menuView.filter(item => item.name === cookie.Produto[0].categoria);
    product.push(newProduct[0]);
    setProduct(product);
  },[]);

  return (
    <Container>
      <Header>
        <ButtonClose onClick={handleClose}>
          <span>Cancelar</span>
        </ButtonClose>
        <Photo src="https://revistacontinente.com.br/image/view/news/image/1218" />
      </Header>

      <InfoWrapper>
        <Title>
          { cookie !== undefined ? cookie.Produto[0].sabor : null }
        </Title>
        <Description>
          { cookie !== undefined ? cookie.Produto[0].descricao : null }          
        </Description>
      </InfoWrapper>

      <OptionInput>
        <TitleItem>Sorvetes</TitleItem>
        <WrapperOption>
          {/* {
            //@ts-ignore
            product.additionalItem.map((itemMap, index) => (
              
              <InputOptions key={index} setTotalCount={setTotalCount} />
            ))
          } */}
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

        <ButtonAdd onClick={() => handleSubmit()}>
          <span>Adicionar ao carrinho</span>
          <span>{transformToRealBRL(totalCount)}</span>
        </ButtonAdd>
      </Footer>
    </Container>
  );
};
