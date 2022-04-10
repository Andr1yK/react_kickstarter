import {
  FC,
  memo,
} from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { DeviceTypeProvider } from './services/contexts/DeviceTypeContext';

import './layouts/Grid/Grid.scss'; // костиль, переписати апку на Grid i GridItem
import { useDeviceType } from './services/hooks';
import { Cart, Home } from './components';

const App: FC = memo(() => {
  const deviceType = useDeviceType();

  return (
    <DeviceTypeProvider value={deviceType}>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </DeviceTypeProvider>
  );
});

export default App;
