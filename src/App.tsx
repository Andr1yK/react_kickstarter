import { FC, memo } from 'react';
import './App.scss';
import Home from './components/Home/Home';

const App: FC = memo(() => {
  return (
    <Home />
  );
});

export default App;
