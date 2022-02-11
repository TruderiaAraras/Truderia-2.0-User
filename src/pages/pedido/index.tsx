import React, { useState, useEffect } from "react";
import {
  ContainerPedido,
  Card,
  CardTitle,
  Button,
  CardFooter,
  CardBody,
  Form,
  Table,
  Withdraw,
  Delivery,
  Images,
  Dropdown,
} from "./style";
import { useFormik } from "formik";
import { CgTrash } from "react-icons/cg";
import retiradaImg from "../../assets/Menu/Delivery/food-withdraw.png";
import entregaImg from "../../assets/Menu/Delivery/food-delivery.png";

let produtosArray = [
  {
    id: Math.random(),
    quantidade: 1,
    preco: 12.0,
    categoria: "Trudel",
    sabor: "Coca-Cola",
  },
  {
    id: Math.random(),
    quantidade: 1,
    preco: 12.0,
    categoria: "Trudel 2",
    sabor: "Coca-Cola",
  },
  {
    id: Math.random(),
    quantidade: 1,
    preco: 12.0,
    categoria: "Trudel 3",
    sabor: "Coca-Cola",
  },
  {
    id: Math.random(),
    quantidade: 1,
    preco: 12.0,
    categoria: "Trudel 6",
    sabor: "Coca-Cola",
  },
];

export const PagePedido: React.FC = () => {
  const [produtos, setProdutos] = useState([...produtosArray]);
  const [subtotal, setSubtotal] = useState(0);

  const formik = useFormik({
    initialValues: {
      nome: "",
      celular: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  function deleteProd(indexProduto: number) {
    const newProdutos = produtos.filter(
      (produto, index) => index !== indexProduto
    );
    setProdutos(newProdutos);
  }

  function convertToReal(price: number) {
    const valorEmReal = price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return valorEmReal;
  }

  function totalValue() {
    let valorTotal = 0;
    produtos.map(prod => {
      valorTotal += (prod.preco * prod.quantidade);
    });
    return valorTotal;
  }

  return (
    <ContainerPedido>
      <Card noFooter={false}>
        <CardTitle>Itens no Carrinho</CardTitle>
        <CardBody>
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
              {produtos.map((produto, index) => (
                <tr key={produto.id}>
                  <td>{produto.quantidade.toString() + "x"}</td>
                  <td>{produto.categoria}</td>
                  <td>{produto.sabor}</td>
                  <td>{convertToReal(produto.preco)}</td>
                  <td>
                    <CgTrash
                      className="trash-icon"
                      onClick={() => deleteProd(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <Button onClick={() => alert("Chamar outra Página")}>
            Adicionar mais Itens...
          </Button>
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
        <CardTitle>Forma de Recebimento</CardTitle>
        <CardBody>
          <Images>
            <Withdraw>
              Retirada
              <img src={retiradaImg} alt="Retirada" />
            </Withdraw>
            <Delivery>
              Entrega
              <img src={entregaImg} alt="Entrega" />
            </Delivery>
          </Images>
        </CardBody>
      </Card>
      <Card noFooter>
        <CardTitle>Pagamentos</CardTitle>
        <CardBody>
          <Dropdown>
            <label id="metodos">Meio de Pagamento:</label>
            <select name="cars" id="cars">
              <option value="default">- ESCOLHA -</option>
              <option value="dcredtio">Cartão Crédito</option>
              <option value="cdebito">Cartão Débito</option>
              <option value="pix">Pix</option>
              <option value="dinheiro">Dinheiro</option>
            </select>
          </Dropdown>
        </CardBody>
      </Card>
      <Card noFooter={false}>
        <CardTitle>Total</CardTitle>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th>Subtotal</th>
                <th>{totalValue()}</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <div style={{ width: "100%", borderTop: "gray solid 1px" }}>
          </div>
        </CardFooter>
      </Card>
    </ContainerPedido>
  );
};