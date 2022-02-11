import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { CardProduct, CardProductProps } from "../../components/CardProduct";

import "./style.css";

interface Props {
  title?: string;
  item?: any;
}

export const NewAccordion: React.FC<Props> = ({ title, item }) => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>{title}</AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
          {item.map((iten: any) => (
            <CardProduct data={iten} />
          ))}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};
