import React from 'react';
import {
  // HashRouter, // or //
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Page1, Page2, PagePedido } from '../pages/index';

const Router = (): React.ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/Page2" element={<Page2 />} />
      <Route path="/Pedido" element={<PagePedido />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
