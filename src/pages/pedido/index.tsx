import React, { useState } from "react";
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
  Label,
  Input,
  Dropdown,
  MoreInfo,
  Header,
  Footer,
} from "./style";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { BsArrowLeftCircle } from "react-icons/bs";
import { CgTrash } from "react-icons/cg";
import { TiArrowForwardOutline } from "react-icons/ti";
import { AiOutlineWhatsApp, AiFillProfile } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa";
import { retiradaImg, entregaImg } from "../../assets/Menu/Delivery/index";
import { useCookies } from "react-cookie";
import produtosArray from "./produtos.json";

export const PagePedido: React.FC = () => {
  const [produtos, setProdutos] = useState([...produtosArray.produtos]);
  const [taxa, setTaxa] = useState(0);
  const [dlvrInfo, setDlvrInfo] = useState(undefined);
  const [cookie, setCookie, removeCookie] = useCookies();

  const locationInfo = (
    <MoreInfo>
      <p className="title"><b>Retirar em:</b></p>
      <p className="ender">Rua Cândida Lacerda, 470, Centro - Araras/SP</p>
      <p className="moreOfMore">
        <i>Próximo a escadaria da rodoviaria e a Av. do Café</i>
      </p>
    </MoreInfo>
  );

  const dlvryForm = (
    <Form>
      <div className="sharedDiv">
        <div className="firstDiv">
          <Label id="name">CEP: </Label>
          <Input id="name" name="name" placeholder="Seu nome..." />
        </div>
        <div className="secondDiv">
          <Label id="number">Numero: </Label>
          <Input id="number" name="number" placeholder="Número da moradia..." />
        </div>
      </div>      
      <Label id="street">Rua: </Label>
      <Input id="street" name="street" placeholder="Sua rua..." />
      <hr />
      <hr />
      <Label id="neighborhood">Bairro: </Label>
      <Input id="neighborhood" name="neighborhood" placeholder="Seu bairro..." />
      <hr />
      <Label id="complement">Complemento: </Label>
      <Input id="complement" name="complement" placeholder="Um complemento" />
    </Form>
  );

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

  function subTotal() {
    let valorTotal = 0;
    produtos.map((prod) => {
      valorTotal += prod.preco * prod.quantidade;
      return 0; // Para remover warning do React
    });
    return valorTotal;
  }

  return (
    <ContainerPedido>
      <Header>
        <div className="go-back">
          <button onClick={() => console.log(cookie.Produto)}>
            <BsArrowLeftCircle />
          </button>
        </div>
        <div className="titulo">Resumo do Pedido</div>
      </Header>
      <Card noFooter={false}>
        <CardTitle>
          <div>Itens no Carrinho</div>
          <div>
            <RiShoppingCartLine style={{ marginLeft: "15px" }} />
          </div>
        </CardTitle>
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
          <Button
            onClick={() => alert("Chamar outra Página")}
            style={{ height: "40px" }}
          >
            Adicionar mais Itens...
          </Button>
        </CardFooter>
      </Card>
      <Card noFooter>
        <CardTitle>
          <div>Dados</div>
          <div>
            <AiFillProfile style={{ marginLeft: "15px" }} />
          </div>
        </CardTitle>
        <CardBody>
          <Form id="myForm">
            <Label id="nome">CEP: </Label>
            <Input id="nome" name="nome" placeholder="Seu nome..." />
            <hr />
            <Label id="celular">Celular: </Label>
            <Input id="celular" name="celular" placeholder="(99) 99999-9999" />
          </Form>
        </CardBody>
      </Card>
      <Card noFooter={false}>
        <CardTitle>
          <div>Forma de Recebimento</div>
          <div>
            <MdOutlineDeliveryDining style={{ marginLeft: "15px" }} />
          </div>
        </CardTitle>
        <CardBody>
          <Images>
            <Withdraw onClick={() => {
              setTaxa(0);
              setDlvrInfo(locationInfo);
            }}>
              Retirada
              <img src={retiradaImg} alt="Retirada" />
            </Withdraw>
            <Delivery onClick={() => {
              setTaxa(5);
              setDlvrInfo(dlvryForm);
            }}>
              Entrega
              <img src={entregaImg} alt="Entrega" />
            </Delivery>
          </Images>
        </CardBody>
        <CardFooter>{ dlvrInfo }</CardFooter>
      </Card>
      <Card noFooter>
        <CardTitle>
          <div>Pagamentos</div>
          <div>
            <FaRegCreditCard style={{ marginLeft: "15px" }} />
          </div>
        </CardTitle>
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
        <CardTitle>
          <div>Total</div>
        </CardTitle>
        <CardBody>
          <Table>
            <thead style={{ width: "100%" }}>
              <tr
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <th>Subtotal</th>
                <th>{convertToReal(subTotal())}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <td>Taxa de Entrega</td>
                <td>{taxa > 0 ? convertToReal(taxa) : null}</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <div style={{ width: "100%", borderTop: "gray solid 1px" }}>
            <Table>
              <thead style={{ width: "100%" }}>
                <tr
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <th>Total</th>
                  <th>{convertToReal(subTotal() + taxa)}</th>
                </tr>
              </thead>
            </Table>
          </div>
        </CardFooter>
      </Card>
      <Footer onClick={() => alert("Ir Para WhatsApp")}>
        <div>
          <AiOutlineWhatsApp
            style={{
              fontSize: "35px",
              alignSelf: "flex-end",
              marginRight: "20px",
            }}
          />
        </div>
        <div>IR PARA WHATSAPP</div>
        <div>
          <TiArrowForwardOutline
            style={{ alignSelf: "flex-end", marginLeft: "5px" }}
          />
        </div>
      </Footer>
    </ContainerPedido>
  );
};
