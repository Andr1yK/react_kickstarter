import {
  FC,
  memo,
  useEffect,
} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import CartPage from './pages/CartPage/CartPage';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import { throttle } from './helpers/throttle';
import { useDispatch } from './hooks';
import { actionSetDeviceType } from './store/reducers';

const App: FC = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = throttle(() => dispatch(actionSetDeviceType({
      onTablet: window.matchMedia('(min-width: 768px)').matches,
      onDesktop: window.matchMedia('(min-width: 1024px)').matches,
    })), 300);

    window.addEventListener('resize', handleResize, {
      passive: true,
    });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/" element={<HomePage />} />
      <Route
        path="/*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
});

export default App;
