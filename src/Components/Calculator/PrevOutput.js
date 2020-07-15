import React from 'react';

const PrevOutput = (props) => {

    return (
        <div class="dc-output__row">
          <div class="dc-output__previous-output">
            <div class="dc-output__previous-output__one-down">
              <span class="dc-output__previous-output__text">{props.prevOutput}</span>
            </div>
          </div>
        </div>
    );
};

export default PrevOutput;