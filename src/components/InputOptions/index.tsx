import React, { useEffect, useState } from "react";

import {
  Container,
  Quantity,
  IconSub,
  IconAdd,
  PhotoOption,
  Name,
  Price,
} from "./style";

interface Props {
  setTotalCount: (state: any) => void;
}

export const InputOptions: React.FC<Props> = ({ setTotalCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTotalCount((state: any) => state + count * 500);
  }, [count]);

  function handleCount(value: string) {
    if (value === "+") {
      setCount((state) => state + 1);
      setTotalCount((state: any) => state + count * 500);
    } else {
      if (count <= 0) return;
      setCount((state) => state - 1);
      setTotalCount((state: any) => state + count * 500);
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
      <Quantity>
        <IconSub onClick={() => handleCount("-")} />
        <span>{count}</span>
        <IconAdd onClick={() => handleCount("+")} />
      </Quantity>

      <PhotoOption>
        <img src="https://revistacontinente.com.br/image/view/news/image/1218" alt="" />
      </PhotoOption>

      <Name>
        <p>Nome</p>
      </Name>

      <Price>
        <p>+ {transformToRealBRL(500)}</p>
      </Price>
    </Container>
  );
};
