import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { menuView } from "../../database/data";
import { InputOptions } from "../../components/InputOptions";
import { transformToRealBRL } from "../../utils/transformToRealBRL";

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
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies();

  const [quantityProduct, setQuantityProduct] = useState(1); //qtd do produto
  const [totalAddItem, setTotalAddItem] = useState(0); //total de adicionais
  const [noteProduct, setNoteProduct] = useState(""); //observação do produto
  const [totalProduct, setTotalProduct] = useState(0); //total de produtos + total de adicionais

  const ProductsFilter = menuView.filter(item => item.name === cookie.Produto[0].categoria);

  function handleClose() {
    navigate("/home");
  }

  function handleCountQuantityProduct(value: string) {
    if (value === "+") setQuantityProduct((state) => state + 1);
    else {
      if (quantityProduct <= 1) return;
      setQuantityProduct((state) => state - 1);
    }
  }

  function handleSubmit() {
    const newProductSelected = {
      categoria: cookie.Produto[0].categoria,
      descricao: cookie.Produto[0].descricao,
      sabor: cookie.Produto[0].sabor,
      preco: totalProduct,
      quantidade: quantityProduct,
      observação: noteProduct,
    }
    
    const produto = [ ...cookie.Produto, newProductSelected ];
    setCookie("Produto", produto, { secure: true, sameSite: "none" });
    navigate("/home");
  }

  function renderOption(value: "additional" | "iceCream" | "drinks" | "stuffingPots") {
    switch (value) {
      case "additional": {
        //@ts-ignore
        return ProductsFilter[0]?.additionalItem?.map(
          (itemMap: any, index: number) => {
            <InputOptions
              key={index}
              data={itemMap}
              setTotalAddItem={setTotalAddItem}
            />;
          }
        );
      }
      case "iceCream": {
        //@ts-ignore
        return ProductsFilter[0]?.iceCreamItem?.map(
          (itemMap: any, index: number) => (
            <InputOptions
              key={index}
              data={itemMap}
              setTotalAddItem={setTotalAddItem}
            />
          )
        );
      }
      case "drinks": {
        //@ts-ignore
        return ProductsFilter[0]?.drinksItem?.map(
          (itemMap: any, index: number) => (
            <InputOptions
              key={index}
              data={itemMap}
              setTotalAddItem={setTotalAddItem}
            />
          )
        );
      }
      case "stuffingPots": {
        //@ts-ignore
        return ProductsFilter[0]?.stuffingPotsItem?.map(
          (itemMap: any, index: number) => (
            <InputOptions
              key={index}
              data={itemMap}
              setTotalAddItem={setTotalAddItem}
            />
          )
        );
      }
    }
  }

  const SumGeneration = useCallback(() => {
    let total = totalProduct * quantityProduct + totalAddItem;
    return transformToRealBRL(total)
  },[totalAddItem, totalProduct, quantityProduct])
  
  useEffect(() => {
    setTotalProduct(cookie.Produto[0].preco);
  }, []);

  return (
    <Container>
      <Header>
        <ButtonClose onClick={handleClose}>
          <span>Cancelar</span>
        </ButtonClose>
        <Photo src={cookie !== undefined && cookie.Produto[0].imagem} />
      </Header>

      <InfoWrapper>
        <Title>{cookie !== undefined && cookie.Produto[0].sabor}</Title>
        <Description>
          {cookie !== undefined && cookie.Produto[0].descricao}
        </Description>
      </InfoWrapper>

      {
        //@ts-ignore
        ProductsFilter[0].additionalItem && (
          <OptionInput>
            <TitleItem>Adicional</TitleItem>
            <WrapperOption>{renderOption("additional")}</WrapperOption>
          </OptionInput>
        )
      }

      {
        //@ts-ignore
        ProductsFilter[0].iceCreamItem && (
          <OptionInput>
            <TitleItem>Sorvetes</TitleItem>
            <WrapperOption>{renderOption("iceCream")}</WrapperOption>
          </OptionInput>
        )
      }

      {
        //@ts-ignore
        ProductsFilter[0].drinksItem && (
          <OptionInput>
            <TitleItem>Bebidas</TitleItem>
            <WrapperOption>{renderOption("drinks")}</WrapperOption>
          </OptionInput>
        )
      }

      {
        //@ts-ignore
        ProductsFilter[0].stuffingPotsItem && (
          <OptionInput>
            <TitleItem>Potes de recheio</TitleItem>
            <WrapperOption>{renderOption("stuffingPots")}</WrapperOption>
          </OptionInput>
        )
      }

      <OptionInput>
        <TitleItem>OBSERVAÇÕES</TitleItem>
        <TextArea
          value={noteProduct}
          onChange={(e) => setNoteProduct(e.target.value)}
        />
      </OptionInput>

      <Footer>
        <ButtonQuantity>
          <span>Qntde.</span>
          <div>
            <IconSub onClick={() => handleCountQuantityProduct("-")} />
            <span>{quantityProduct}</span>
            <IconAdd onClick={() => handleCountQuantityProduct("+")} />
          </div>
        </ButtonQuantity>

        <ButtonAdd onClick={() => handleSubmit()}>
          <span>Adicionar ao carrinho</span>
          <span>{SumGeneration()}</span>
        </ButtonAdd>
      </Footer>
    </Container>
  );
};
