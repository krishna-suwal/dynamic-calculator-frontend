import React from "react";
import { connect } from 'react-redux';

import {
  fireCalculationInputAction, fireNumberInputAction, fireOperatorInputAction,
  fireOpenBracketInputAction, fireClosingBracketInputAction, clearEntry, allClear,
  calculate } from '../../Redux/actions/calculatorActions';
import './Calculator.scss';
import ActionButton from './ActionButton';
import PrevOutput from './PrevOutput';
import CurrentOutput from './CurrentOutput';

const Calculator = (props) => {
  const callback__fireNumberInputAction = e => {
    if ( e.target.dataset.value ) {
      props.fireNumberInputAction( parseInt( e.target.dataset.value ) );
    }
  }
  const callback__fireOperatorInputAction = e => {
    if ( e.target.dataset.value ) {
      props.fireOperatorInputAction( e.target.dataset.value );
    }
  }
  return (
    <div class="wp-calculator">
      <div class="wpc-output">
        <PrevOutput prevOutput={props.calculator.prevOutput} />
        <CurrentOutput currentOutput={props.calculator.currentOutput} />
      </div>
      <div class="wpc-actions">
        <table>
          <tbody>
            <tr class="wpc-actions__row">
              <td>
                <ActionButton text="Ans" />
              </td>
              <td>
                <ActionButton
                  value = "("
                  onClick = {props.fireOpenBracketInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = ")"
                  onClick = {props.fireClosingBracketInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "R"
                  onClick = {callback__fireOperatorInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  text = "CE"
                  onClick = {props.clearEntry}
                  />
              </td>
            </tr>
            <tr class="wpc-actions__row">
              <td>
                <ActionButton text="00"/>
              </td>
              <td>
                <ActionButton
                  value = "7"
                  className = "wpc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "8"
                  className = "wpc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "9"
                  className = "wpc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "÷"
                  onClick = {callback__fireOperatorInputAction}
                  />
              </td>
            </tr>
            <tr class="wpc-actions__row">
              <td>
                <ActionButton text="000"/>
              </td>
              <td>
                <ActionButton
                  value = "4"
                  className = "wpc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "5"
                  className = "wpc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "6"
                  className = "wpc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "×"
                  onClick = {callback__fireOperatorInputAction}
                  />
              </td>
            </tr>
            <tr class="wpc-actions__row">
              <td>
                <ActionButton text="0000"/>
              </td>
              <td>
                <ActionButton
                  value = "1"
                  className = "wpc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "2"
                  className = "wpc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "3"
                  className = "wpc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "−"
                  onClick = {callback__fireOperatorInputAction}
                  />
              </td>
            </tr>
            <tr class="wpc-actions__row">
              <td>
                <ActionButton
                  text = "AC"
                  onClick = {props.allClear}
                  />
              </td>
              <td>
                <ActionButton
                  value = "0"
                  className = "wpc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton text="." className="wpc-gray-white-bg-imp" />
              </td>
              <td>
                <ActionButton
                  text = "="
                  className = "wpc-calculate-action"
                  onClick = {props.calculate}
                  />
              </td>
              <td>
                <ActionButton
                  value = "+"
                  onClick = {callback__fireOperatorInputAction}
                  />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default connect((state, props) => ({...state, ...props}), {
  fireCalculationInputAction,
  fireNumberInputAction,
  fireOperatorInputAction,
  fireOpenBracketInputAction,
  fireClosingBracketInputAction,
  clearEntry,
  allClear,
  calculate,
})(Calculator);
