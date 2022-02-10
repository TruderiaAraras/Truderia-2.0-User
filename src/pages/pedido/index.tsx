import React from "react";
import { ContainerPedido, Card, CardTitle, Button, CardFooter, CardBody, Form, Table } from "./style";
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
        <CardTitle>Carrinho</CardTitle>
        <CardBody>
          <Table>            
            <tr>
              <td>1x</td>
              <td>Trudel</td>
              <td>Brigadeiro</td>
              <td>R$ 12,00</td>
              <td></td>
            </tr>
          </Table>
        <CardFooter>
          <Button onClick={() => alert('Chamar outra Página')} >Enviar</Button>
        </CardFooter>
        </CardBody>
      </Card>
      <Card>
        <CardTitle>Dados</CardTitle>
        <CardBody>
            <Form id="myForm" onSubmit={formik.handleSubmit}>
              <label id="nome">Nome: </label>
              <input id="nome" name="nome" placeholder="Isaque Schuwarte" />
              <hr />
              <label id="celular">Celular: </label>
              <input id="celular" name="celular" placeholder="(99) 99999-9999" />
            </Form>
        </CardBody>
      </Card>
      <Card>
        <CardTitle>
          Junior
        </CardTitle>
        <CardBody>Algo</CardBody>
      </Card>
      <Card>
        <CardTitle>Mario</CardTitle>
        <CardBody>
          TESTE
          <CardFooter><Button>Teste</Button></CardFooter>
        </CardBody>        
      </Card>
    </ContainerPedido>
  );
};
