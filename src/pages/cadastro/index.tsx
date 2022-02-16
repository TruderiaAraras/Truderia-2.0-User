import React from "react";
import * as yup from "yup";
import { pt } from "yup-locale-pt";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Container,
  FormControl,
  SubmitButton,
  Title,
  SharedControl,
} from "./style";

export const Cadastro: React.FC = () => {
  yup.setLocale(pt);
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
    complemento: yup.string().notRequired(),
  });

  return (
    <div>
      <Title>FORMULÁRIO DE CADASTRO</Title>
      <Container>
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
            complemento: "",
          }}
          onSubmit={async (values) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
          validationSchema={validation}
        >
          <Form>
            <SharedControl>
              <div className="sharedNome">
                <label htmlFor="nome">Nome: </label>
                <hr />
                <Field id="nome" name="nome" type="text" />
                <ErrorMessage component="span" name="nome" />
              </div>
              <div className="sharedAniversario">
                <label htmlFor="aniversario">Aniversário: </label>
                <hr />
                <Field id="aniversario" name="aniversario" type="date" />
                <ErrorMessage component="span" name="aniversario" />
              </div>
            </SharedControl>
            <FormControl>
              <label htmlFor="email">E-mail: </label>
              <Field id="email" name="email" type="email" />
              <ErrorMessage component="span" name="email" />
            </FormControl>
            <FormControl>
              <label htmlFor="celular">Celular: </label>
              <Field id="celular" name="celular" type="text" />
              <ErrorMessage component="span" name="celular" />
            </FormControl>
            <FormControl>
              <label htmlFor="cep">CEP: </label>
              <Field id="cep" name="cep" type="text" />
              <ErrorMessage component="span" name="cep" />
            </FormControl>
            <FormControl>
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
              <ErrorMessage component="span" name="bairro" />
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
            </FormControl>
            <SubmitButton>
              <button
                type="submit"
                onClick={(event) => event.currentTarget.classList.toggle("btnSubmitClick")}
              >
                ENVIAR
              </button>
            </SubmitButton>
          </Form>
        </Formik>
      </Container>
    </div>
  );
};
