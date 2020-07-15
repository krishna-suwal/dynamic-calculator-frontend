import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Components/Calculator/index';
import { Provider } from 'react-redux';
import store from './Redux/store';

const dc_element = document.getElementById( 'dc-calculator-container' );

if ( dc_element ) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Calculator/>
      </Provider>
    </React.StrictMode>,
    dc_element
  );
}
