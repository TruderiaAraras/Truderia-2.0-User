import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { CardProduct } from "../../components/CardProduct";

import "./style.css";

interface Props {
  item?: any;
  title?: string;
  onClick?: () => void;
}

export const NewAccordion: React.FC<Props> = ({ title, item, onClick }) => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>{title}</AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
          {item.map((iten: any, index: number) => (
            <CardProduct key={index} data={iten} categoryName={title} onClick={() => onClick()} />
          ))}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};
