import React from "react";
import './Calculator.scss';
import ActionButton from './ActionButton';
import PrevOutput from './PrevOutput';
import CurrentOutput from './CurrentOutput';

const Calculator = (props) => {
  return (
    <div class="wp-calculator">
      <div class="wpc-output">
        <PrevOutput/>
        <CurrentOutput/>
      </div>
      <div class="wpc-actions">
        <table>
          <tbody>
            <tr class="wpc-actions__row">
              <td>
                <ActionButton text="Ans"/>
              </td>
              <td>
                <ActionButton text="("/>
              </td>
              <td>
                <ActionButton text=")"/>
              </td>
              <td>
                <ActionButton text="%"/>
              </td>
              <td>
                <ActionButton text="CE"/>
              </td>
            </tr>
            <tr class="wpc-actions__row">
              <td>
                <ActionButton text="√"/>
              </td>
              <td>
                <ActionButton text="7" className="wpc-gray-white-bg-imp" />
              </td>
              <td>
                <ActionButton text="8" className="wpc-gray-white-bg-imp" />
              </td>
              <td>
                <ActionButton text="9" className="wpc-gray-white-bg-imp" />
              </td>
              <td>
                <ActionButton text="÷"/>
              </td>
            </tr>
            <tr class="wpc-actions__row">
              <td>
                <ActionButton text=""/>
              </td>
              <td>
                <ActionButton text="4" className="wpc-gray-white-bg-imp" />
              </td>
              <td>
                <ActionButton text="5" className="wpc-gray-white-bg-imp" />
              </td>
              <td>
                <ActionButton text="6" className="wpc-gray-white-bg-imp" />
              </td>
              <td>
                <ActionButton text="×"/>
              </td>
            </tr>
            <tr class="wpc-actions__row">
              <td>
                <ActionButton text=""/>
              </td>
              <td>
                <ActionButton text="1" className="wpc-gray-white-bg-imp" />
              </td>
              <td>
                <ActionButton text="2" className="wpc-gray-white-bg-imp" />
              </td>
              <td>
                <ActionButton text="3" className="wpc-gray-white-bg-imp" />
              </td>
              <td>
                <ActionButton text="−"/>
              </td>
            </tr>
            <tr class="wpc-actions__row">
              <td>
                <ActionButton text="AC"/>
              </td>
              <td>
                <ActionButton text="0" className="wpc-gray-white-bg-imp" />
              </td>
              <td>
                <ActionButton text="." className="wpc-gray-white-bg-imp" />
              </td>
              <td>
                <ActionButton text="=" className="wpc-calculate-action" />
              </td>
              <td>
                <ActionButton text="+" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
