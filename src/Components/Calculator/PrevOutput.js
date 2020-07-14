import React from 'react';

const PrevOutput = (props) => {

    return (
        <div class="wpc-output__row">
          <div class="wpc-output__previous-output">
            <div class="wpc-output__previous-output__one-down">
              <span class="wpc-output__previous-output__text">{props.prevOutput}</span>
            </div>
          </div>
        </div>
    );
};

export default PrevOutput;