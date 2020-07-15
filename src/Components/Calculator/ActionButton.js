import React from 'react';

const CalculatorActionButton = (props) => {
    const spreadProps = props.spreadProps && 'object' === typeof props.spreadProps ? props.spreadProps : {};
    const value = props.value;
    const text = (null === props.text || undefined === props.text) ? value : props.text;

    return (
        <div
            className = {`dc-actions__action-button ${props.className}`}
            onClick = {props.onClick}
            data-value = {value}
            {...spreadProps}
            >
            {text}
        </div>
    );
};

export default CalculatorActionButton;