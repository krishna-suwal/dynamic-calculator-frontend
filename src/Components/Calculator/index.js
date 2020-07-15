import React from "react";
import { connect } from 'react-redux';

import {
  fireNumberInputAction, fireOperatorInputAction,
  fireOpenBracketInputAction, fireClosingBracketInputAction, clearEntry, allClear,
  firePrevAnsInputAction, fireZerosInputAction, calculate } from '../../Redux/actions/calculatorActions';
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
    <div class="d-calculator">
      <div class="dc-output">
        <PrevOutput prevOutput={props.calculator.prevOutput} />
        <CurrentOutput currentOutput={props.calculator.currentOutput} />
      </div>
      <div class="dc-actions">
        <table>
          <tbody>
            <tr class="dc-actions__row">
              <td>
                <ActionButton
                  text = "Ans"
                  onClick = {props.firePrevAnsInputAction}
                  />
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
            <tr class="dc-actions__row">
              <td>
                <ActionButton
                  text = "00"
                  onClick = {() => props.fireZerosInputAction(2)}
                  />
              </td>
              <td>
                <ActionButton
                  value = "7"
                  className = "dc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "8"
                  className = "dc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "9"
                  className = "dc-gray-white-bg-imp"
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
            <tr class="dc-actions__row">
              <td>
                <ActionButton
                  text = "000"
                  onClick = {() => props.fireZerosInputAction(3)}
                  />
              </td>
              <td>
                <ActionButton
                  value = "4"
                  className = "dc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "5"
                  className = "dc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "6"
                  className = "dc-gray-white-bg-imp"
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
            <tr class="dc-actions__row">
              <td>
                <ActionButton
                  text = "0000"
                  onClick = {() => props.fireZerosInputAction(4)}
                  />
              </td>
              <td>
                <ActionButton
                  value = "1"
                  className = "dc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "2"
                  className = "dc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton
                  value = "3"
                  className = "dc-gray-white-bg-imp"
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
            <tr class="dc-actions__row">
              <td>
                <ActionButton
                  text = "AC"
                  onClick = {props.allClear}
                  />
              </td>
              <td>
                <ActionButton
                  value = "0"
                  className = "dc-gray-white-bg-imp"
                  onClick = {callback__fireNumberInputAction}
                  />
              </td>
              <td>
                <ActionButton text="." className="dc-gray-white-bg-imp" />
              </td>
              <td>
                <ActionButton
                  text = "="
                  className = "dc-calculate-action"
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
  fireNumberInputAction,
  fireZerosInputAction,
  fireOperatorInputAction,
  firePrevAnsInputAction,
  fireOpenBracketInputAction,
  fireClosingBracketInputAction,
  clearEntry,
  allClear,
  calculate,
})(Calculator);
