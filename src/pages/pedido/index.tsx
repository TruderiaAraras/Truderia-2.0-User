import React from "react";
import { ContainerPedido, Forms } from "./style";
import { Formik, Field, Form } from "formik";

export const PagePedido: React.FC = () => {
  return (
    <ContainerPedido>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Isaque" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Schuwarte" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="exemplo@teste.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </ContainerPedido>
  );
};
