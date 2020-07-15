import React from 'react';

const CurrentOutput = (props) => {

    return (
        <div class="dc-output__row">
          <div class="dc-output__current-output">
            <div class="dc-output__current-output__one-down">
              <span class="dc-output__current-output__text">{props.currentOutput}</span>
            </div>
          </div>
        </div>
    );
};

export default CurrentOutput;