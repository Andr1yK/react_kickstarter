import {
  FC,
  memo,
} from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';

const App: FC = memo(() => {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
});

export default App;
