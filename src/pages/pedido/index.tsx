import React from "react";
import { ContainerPedido, Card, CardTitle, Button, CardButton, CardInputGroup } from "./style";
import { Formik, Field, Form } from "formik";

export const PagePedido: React.FC = () => {
  
  return (
    <ContainerPedido>
      <Card>
        <CardTitle>Título</CardTitle>
        <Formik
          initialValues={{
            nome: "",
            celular: ""
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}          
        >
          <Form>
            <CardInputGroup>
              <label htmlFor="nome">Nome: </label>
              <hr />
              <Field id="nome" name="nome" placeholder="Isaque Schuwarte" />
            </CardInputGroup>            
            <hr />
            <CardInputGroup>
              <label htmlFor="celular">Celular: </label>
              <hr />
              <Field id="celular" name="celular" placeholder="(99) 99999-9999" />
            </CardInputGroup>
            <hr />
            <CardButton>
              <Button type="submit">Submit</Button>
            </CardButton>
          </Form>
        </Formik>
      </Card>
    </ContainerPedido>
  );
};
