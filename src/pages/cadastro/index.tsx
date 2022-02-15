import React from "react";
import * as yup from "yup";
import { pt } from "yup-locale-pt";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from "./style";

export const Cadastro: React.FC = () => {

  yup.setLocale(pt)
  const validation = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().email().required(),
    aniversario: yup.date().required(),
    celular: yup.string().required(),
    cep: yup.string().min(8).max(8).required(),
    rua: yup.string().required(),
    numero: yup.string().required(),
    bairro: yup.string().required(),
    cidade: yup.string().required(),
    estado: yup.string().required(),
    complemento: yup.string().notRequired()
  });

  return (
    <Container>
      <h1>FORMULÁRIO DE CADASTRO</h1>
      <Formik
        initialValues={{
          nome: "",
          email: "",
          aniversario: "",
          celular: "",
          cep: "",
          rua: "",
          numero: "",
          bairro: "",
          cidade: "",
          estado: "",
          complemento: ""
        }}
        onSubmit={async (values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
        validationSchema={validation}
      >
        <Form> 
          <div>
            <label htmlFor="nome">Nome: </label>
            <Field id="nome" name="nome" type="text" />
            <ErrorMessage component="span" name="nome" />
          </div>
          <div>
            <label htmlFor="email">E-mail: </label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage component="span" name="email" />
          </div>
          <div>
            <label htmlFor="aniversario">Aniversário: </label>
            <Field id="aniversario" name="aniversario" type="date" />
            <ErrorMessage component="span" name="aniversario" />
          </div>
          <div>
            <label htmlFor="celular">Celular: </label>
            <Field id="celular" name="celular" type="text" />
            <ErrorMessage component="span" name="celular" />
          </div>
          <div>
            <label htmlFor="cep">CEP: </label>
            <Field id="cep" name="cep" type="text" />
            <ErrorMessage component="span" name="cep" /> 
          </div>
          <div>
            <label htmlFor="rua">Rua: </label>
            <Field id="rua" name="rua" type="text" />
            <ErrorMessage component="span" name="rua" />
            <hr />
            <label htmlFor="numero">Número: </label>
            <Field id="numero" name="numero" type="text" />
            <ErrorMessage component="span" name="numero" />
            <hr />
            <label htmlFor="bairro">Bairro: </label>
            <Field id="bairro" name="bairro" type="text" />
            <ErrorMessage  component="span" name="bairro" />
            <hr />
            <label htmlFor="cidade">Cidade: </label>
            <Field id="cidade" name="cidade" type="text" />
            <ErrorMessage component="span" name="cidade" />
            <hr />
            <label htmlFor="estado">Estado: </label>
            <Field id="estado" name="estado" type="text" />
            <ErrorMessage component="span" name="estado" />
            <hr />
            <label htmlFor="complemento">Complemento: </label>
            <Field id="complemento" name="complemento" type="text" />
            <ErrorMessage component="span" name="complemento" />
          </div>
          <button type="submit">ENVIAR</button>
        </Form>
      </Formik>
    </Container>
  );
};
