import React from "react";
import { Formik, Form, Field } from "formik";

export const Cadastro: React.FC = () => {
  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{
          name: "",
          age: ""
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Nome: </label>
            <Field id="name" name="name" type="text" style={{ border: '2px ridge gray', borderRadius: '5px', padding: '4px' }} />
          </div>
          <div>
            <label htmlFor="age">Idade: </label>
            <Field id="age" name="age" type="number" style={{ border: '2px ridge gray', borderRadius: '5px', padding: '4px' }} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
