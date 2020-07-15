import {
    NUMBER_INPUT, ZEROS_INPUT, OPERATOR_INPUT,
    PREV_ANS_INPUT, OPEN_BRACKET_INPUT, CLOSING_BRACKET_INPUT,
    CLEAR_ENTRY, ALL_CLEAR,
    CALCULATE } from './types';

export const fireNumberInputAction = ( value ) => dispatch => {
    if ( 'number' === typeof value ) {
        dispatch({
            type: NUMBER_INPUT,
            payload: value,
        });
    }
};

export const fireZerosInputAction = ( numberOfZeros ) => dispatch => {
    if ( 'number' === typeof numberOfZeros ) {
        let value = '';

        while( numberOfZeros ) { numberOfZeros--; value += '0'; }

        dispatch({
            type: ZEROS_INPUT,
            payload: value,
        });
    }
};

export const fireOperatorInputAction = ( value ) => dispatch => {
    if ( 'string' === typeof value && value.length === 1 ) {
        dispatch({
            type: OPERATOR_INPUT,
            payload: value,
        });
    }
};

export const firePrevAnsInputAction = () => dispatch => {
    dispatch({
        type: PREV_ANS_INPUT,
        payload: true,
    });
};

export const fireOpenBracketInputAction = () => dispatch => {
    dispatch({
        type: OPEN_BRACKET_INPUT,
        payload: true,
    });
};

export const fireClosingBracketInputAction = () => dispatch => {
    dispatch({
        type: CLOSING_BRACKET_INPUT,
        payload: true,
    });
};

export const clearEntry = () => dispatch => {
    dispatch({
        type: CLEAR_ENTRY,
        payload: true,
    });
};

export const allClear = () => dispatch => {
    dispatch({
        type: ALL_CLEAR,
        payload: true,
    });
};

export const calculate = () => dispatch => {
    dispatch({
        type: CALCULATE,
        payload: true,
    });
};
