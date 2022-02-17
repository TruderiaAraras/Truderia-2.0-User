import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { AddItem } from '../pages';

const Router = (): React.ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/addItem" element={<AddItem />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
