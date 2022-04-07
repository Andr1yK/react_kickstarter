import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { StateProvider } from './store/stateContext';

ReactDOM.render(
  <Router>
    <StateProvider>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById('root'),
);
