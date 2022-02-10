import React from "react";
import { ContainerPedido, Card, CardTitle, Button, CardFooter, CardBody, Form, Table } from "./style";
import { useFormik } from "formik";
import { CgTrash } from 'react-icons/cg'

class Produto {
  quantidade: number;
  preco: number;
  categoria: string;
  sabor: string
 
  constructor(quantidade: number, preco: number, categoria: string, sabor: string) {
    this.quantidade = quantidade;
    this.preco = preco;
    this.categoria = categoria;
    this.sabor = sabor;
  }
}

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

  let produtos: Array<Produto>;
  produtos = [ new Produto(1, 12.00, 'Refrigerante', 'Coca-Cola'), new Produto(3, 20.00, 'Trudel', 'Brigadeiro') ]

  const renderizando = produtos.map(produto => {
    const valorEmReal = produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
      <tr>
        <td>{produto.quantidade.toString() + 'x'}</td>
        <td>{produto.categoria}</td>
        <td>{produto.sabor}</td>
        <td>{valorEmReal}</td>
        <td><CgTrash className="trash-icon" onClick={() => alert('APAGADO')} /></td>
      </tr>
    );
  });

  return (
    <ContainerPedido>
      <Card noFooter={false}>
        <CardTitle>Itens no Carrinho</CardTitle>
        <CardBody >
          <Table>
            <thead>
              <tr>
                <th>Qtde</th>
                <th>Categoria</th>
                <th>Sabor</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>        
              {renderizando}
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <Button onClick={() => alert('Chamar outra Página')}>Adicionar mais Itens...</Button>
        </CardFooter>
      </Card>
      <Card noFooter>
        <CardTitle>Dados</CardTitle>
        <CardBody>
            <Form id="myForm" onSubmit={formik.handleSubmit}>
              <label id="nome">Nome: </label>
              <input id="nome" name="nome" placeholder="Seu nome..." />
              <hr />
              <label id="celular">Celular: </label>
              <input id="celular" name="celular" placeholder="(99) 99999-9999" />
            </Form>
        </CardBody>
      </Card>
      <Card noFooter>
        <CardTitle>
          Junior
        </CardTitle>
        <CardBody>Algo</CardBody>
      </Card>
      <Card noFooter={false}>
        <CardTitle>Mario</CardTitle>
        <CardBody>
          TESTE
        </CardBody>        
        <CardFooter><Button>Teste</Button></CardFooter>
      </Card>
    </ContainerPedido>
  );
};
