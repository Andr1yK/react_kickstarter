import {
  FC,
  memo,
} from 'react';
import './App.scss';
import Home from './components';
import { DeviceTypeProvider } from './services/contexts/DeviceTypeContext';

import './layouts/Grid/Grid.scss'; // костиль, переписати апку на Grid i GridItem
import { useDeviceType } from './services/hooks';

const App: FC = memo(() => {
  const deviceType = useDeviceType();

  return (
    <DeviceTypeProvider value={deviceType}>
      <Home />
    </DeviceTypeProvider>
  );
});

export default App;
