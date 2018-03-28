import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'react-emotion';
import Time from 'stores/Time';
import { Provider } from 'mobx-react';

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

ReactDOM.render(
  <Provider time={Time}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
