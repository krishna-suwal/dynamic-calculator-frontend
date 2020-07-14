import React from 'react';

const CalculatorActionButton = (props) => {

    return (
        <div className={`wpc-actions__action-button ${props.className}`}>{props.text}</div>
    );
};

export default CalculatorActionButton;