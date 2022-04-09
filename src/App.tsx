import { FC, memo } from 'react';
import './App.scss';
import Home from './components/Home/Home';

import './layouts/Grid/Grid.scss'; // костиль, переписати апку на Grid i GridItem

const App: FC = memo(() => {
  return (
    <Home />
  );
});

export default App;
