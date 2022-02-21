import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Welcome, Home, AddItem, PagePedido, Cadastro } from '../pages'

const Router = (): React.ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/pedido" element={<PagePedido />} />
      <Route path="/addItem" element={<AddItem />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
