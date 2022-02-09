import React from "react";
import { ContainerPedido, Card, CardTitle, Button, CardFooter, CardBody } from "./style";
import { useFormik } from "formik";

export const PagePedido: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      nome: '',
      celular: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <ContainerPedido>
      <Card>
        <CardTitle>Título</CardTitle>
        <CardBody>
            <form id="myForm" onSubmit={formik.handleSubmit}>
              <label id="nome">Nome: </label>
              <input id="nome" name="nome" placeholder="Isaque Schuwarte" />
              <hr />
              <label id="celular">Celular: </label>
              <input id="celular" name="celular" placeholder="(99) 99999-9999" />
            </form>
        </CardBody>
        <CardFooter>
          <Button onClick={() => alert('Deveria Acionar o FormSubmit')} >Enviar</Button>
        </CardFooter>
      </Card>
    </ContainerPedido>
  );
};
