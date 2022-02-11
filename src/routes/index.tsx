import React from 'react';
import {
  // HashRouter, // or //
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from '../pages';

const Router = (): React.ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
