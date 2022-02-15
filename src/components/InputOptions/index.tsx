import React, { useState } from "react";

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
  totalCount: number;
  setTotalCount: (state) => void;
}

export const InputOptions: React.FC<Props> = ({
  totalCount,
  setTotalCount,
}) => {
  const [count, setCount] = useState(0);

  function handleCount(value: string) {
    if (value === "+") {
      setCount((state) => state + 1);
      setTotalCount(totalCount + count);
    } else {
      if (count <= 0) return;
      setCount((state) => state - 1);
      setTotalCount(totalCount);
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
        <img src="http://github.com/joaovictormartin.png" alt="" />
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
