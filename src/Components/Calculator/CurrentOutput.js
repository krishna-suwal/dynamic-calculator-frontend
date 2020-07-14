import React from 'react';

const CurrentOutput = (props) => {

    return (
        <div class="wpc-output__row">
          <div class="wpc-output__current-output">
            <div class="wpc-output__current-output__one-down">
              <span class="wpc-output__current-output__text">{props.currentOutput}</span>
            </div>
          </div>
        </div>
    );
};

export default CurrentOutput;