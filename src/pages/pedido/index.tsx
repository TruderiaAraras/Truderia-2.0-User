import React from "react";
import { ContainerPedido, Card, CardTitle, Button } from "./style";
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
            <label htmlFor="nome">Nome: </label>
            <Field id="nome" name="nome" placeholder="Isaque Schuwarte" />
            <hr />
            <label htmlFor="celular">Celular: </label>
            <Field id="celular" name="celular" placeholder="(99) 99999-9999" />
            <hr />
            <Button type="submit">Submit</Button>
          </Form>
        </Formik>
      </Card>
    </ContainerPedido>
  );
};
