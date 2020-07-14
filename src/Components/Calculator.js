import React from "react";
import './Calculator.scss';

const Calculator = (props) => {
  return (
    <div class="wp-calculator">
      <div class="wpc-output">
        <div class="wpc-output__row">
          <div class="wpc-output__previous-output">
            <div class="wpc-output__previous-output__one-down">
              <span class="wpc-output__previous-output__text">567</span>
            </div>
          </div>
        </div>
        <div class="wpc-output__row">
          <div class="wpc-output__current-output">
            <div class="wpc-output__current-output__one-down">
              <span class="wpc-output__current-output__text">1234</span>
            </div>
          </div>
        </div>
      </div>
      <div class="wpc-actions">
        <table>
          <tbody>
            <tr class="wpc-actions__row">
              <td>
                <div class="wpc-actions__action-button">Ans</div>
              </td>
              <td>
                <div class="wpc-actions__action-button">(</div>
              </td>
              <td>
                <div class="wpc-actions__action-button">)</div>
              </td>
              <td>
                <div class="wpc-actions__action-button">%</div>
              </td>
              <td>
                <div class="wpc-actions__action-button">CE</div>
              </td>
            </tr>
            <tr class="wpc-actions__row">
              <td>
                <div class="wpc-actions__action-button">√</div>
              </td>
              <td>
                <div class="wpc-actions__action-button wpc-gray-white-bg">
                  7
                </div>
              </td>
              <td>
                <div class="wpc-actions__action-button wpc-gray-white-bg">
                  8
                </div>
              </td>
              <td>
                <div class="wpc-actions__action-button wpc-gray-white-bg">
                  9
                </div>
              </td>
              <td>
                <div class="wpc-actions__action-button">÷</div>
              </td>
            </tr>
            <tr class="wpc-actions__row">
              <td>
                <div class="wpc-actions__action-button"></div>
              </td>
              <td>
                <div class="wpc-actions__action-button wpc-gray-white-bg">
                  4
                </div>
              </td>
              <td>
                <div class="wpc-actions__action-button wpc-gray-white-bg">
                  5
                </div>
              </td>
              <td>
                <div class="wpc-actions__action-button wpc-gray-white-bg">
                  6
                </div>
              </td>
              <td>
                <div class="wpc-actions__action-button">×</div>
              </td>
            </tr>
            <tr class="wpc-actions__row">
              <td>
                <div class="wpc-actions__action-button"></div>
              </td>
              <td>
                <div class="wpc-actions__action-button wpc-gray-white-bg">
                  1
                </div>
              </td>
              <td>
                <div class="wpc-actions__action-button wpc-gray-white-bg">
                  2
                </div>
              </td>
              <td>
                <div class="wpc-actions__action-button wpc-gray-white-bg">
                  3
                </div>
              </td>
              <td>
                <div class="wpc-actions__action-button">−</div>
              </td>
            </tr>
            <tr class="wpc-actions__row">
              <td>
                <div class="wpc-actions__action-button">AC</div>
              </td>
              <td>
                <div class="wpc-actions__action-button wpc-gray-white-bg">
                  0
                </div>
              </td>
              <td>
                <div class="wpc-actions__action-button wpc-gray-white-bg">
                  .
                </div>
              </td>
              <td>
                <div class="wpc-actions__action-button wpc-calculate-action">
                  =
                </div>
              </td>
              <td>
                <div class="wpc-actions__action-button">+</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
