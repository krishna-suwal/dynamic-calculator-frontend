import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Components/Calculator/index';
import { Provider } from 'react-redux';
import store from './Redux/store';

const wpc_element = document.getElementById( 'wp-calculator-container' );

if ( wpc_element ) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Calculator/>
      </Provider>
    </React.StrictMode>,
    wpc_element
  );
}
