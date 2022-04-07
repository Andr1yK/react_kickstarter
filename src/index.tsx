import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './store/stateContext';

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root'),
);
