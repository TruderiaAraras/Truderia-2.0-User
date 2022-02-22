import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { CardProduct } from "../../components/CardProduct";

import { useCookies } from "react-cookie";

import "./style.css";

interface Props {
  item?: any;
  title?: string;
  onClick?: () => void;
}

export const NewAccordion: React.FC<Props> = ({ title, item, onClick }) => {
  const [cookie, setCookie, removeCookie] = useCookies();

  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>{title}</AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
          {item.map((iten: any, index: number) => (
            <CardProduct key={index} data={iten} onClick={() => {
              onClick();
              const product = {
                categoria: cookie.Produto.categoria,
                sabor: iten.flavour,
                descricao: iten.description,                
                fullPrice: iten.price,
                miniPrice: iten.miniPrice
              };
              setCookie("Produto", product, { secure: true, sameSite: "none" });
            }} />
          ))}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};
