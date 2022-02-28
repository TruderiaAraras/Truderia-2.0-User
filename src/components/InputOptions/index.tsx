import React, { useEffect, useState, useCallback } from "react";

import { transformToRealBRL } from "../../utils/transformToRealBRL";

import {
  Container,
  Quantity,
  IconSub,
  IconAdd,
  PhotoOption,
  Name,
  Price,
} from "./style";

interface DataProps {
  flavour: string;
  span: string;
  description?: string;
  image: string;
  price: number;
}

interface Props {
  data: DataProps;
  setTotalAddItem: (state: any) => void;
}

export const InputOptions: React.FC<Props> = ({ setTotalAddItem, data }) => {
  let quantity = 0;
  const [count, setCount] = useState(0);

  const handleCount = useCallback((value: number) => {
    if (value === +1) {
      quantity++;
      setCount((state) => state + 1);
      setTotalAddItem((state: number) => state + quantity * data.price);
    } else {
      if (count <= 0) return;
      quantity--;
      setCount((state) => state - 1);
      setTotalAddItem((state: number) => state + quantity * data.price);
    }
  },[count, quantity]) 

  return (
    <Container>
      <Quantity>
        <IconSub onClick={() => handleCount(-1)} />
        <span>{count}</span>
        <IconAdd onClick={() => handleCount(+1)} />
      </Quantity>

      <PhotoOption>
        <img src={data?.image} alt={data?.flavour} />
      </PhotoOption>

      <Name>
        <p>{data?.flavour}</p>
      </Name>

      <Price>
        <p>+ {transformToRealBRL(data?.price)}</p>
      </Price>
    </Container>
  );
};
