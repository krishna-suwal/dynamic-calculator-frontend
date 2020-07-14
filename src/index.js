import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Components/Calculator/index';
import { Provider } from 'react-redux';
import store from './Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Calculator/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('wp-calculator')
);
