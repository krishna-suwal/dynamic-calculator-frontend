import {
    NUMBER_INPUT, ZEROS_INPUT, OPERATOR_INPUT,
    PREV_ANS_INPUT, OPEN_BRACKET_INPUT, CLOSING_BRACKET_INPUT,
    CLEAR_ENTRY, ALL_CLEAR,
    CALCULATE } from '../actions/types';
import clone from 'clone';

const initialState = {
    prevOutput: '',
    currentOutput: '0',
    openBracketsCount: 0,
    isOutputCalculationResult: false,
    prevAns: 0,
};

export default function(state = initialState, action) {
    let newState = {};

    switch (action.type) {
        case NUMBER_INPUT:
            newState = clone(state);

            if ( ! tailIsClosingBracket( newState.currentOutput ) ) {
                if ( newState.isOutputCalculationResult ) {
                    newState.prevOutput = `Ans = ${newState.currentOutput}`;
                    newState.currentOutput = '';
                    newState.isOutputCalculationResult = false;
                }

                if ( '0' === newState.currentOutput ) {
                    newState.currentOutput = '' + action.payload;
                } else {
                    newState.currentOutput += '' + action.payload;
                }
            }

            return newState;

        case ZEROS_INPUT:
            newState = clone(state);

            if ( tailIsNumber( newState.currentOutput ) && '0' !== newState.currentOutput ) {
                newState.currentOutput += '' + action.payload;
            }

            return newState;

        case OPERATOR_INPUT:
            newState = clone(state);

            if ( newState.isOutputCalculationResult ) {
                newState.prevOutput = `Ans = ${newState.currentOutput}`;
                newState.currentOutput = 'Ans';
                newState.isOutputCalculationResult = false;
            }

            if ( tailIsOperator( newState.currentOutput ) ) {
                let chars = newState.currentOutput.split('');

                chars.pop();
                chars.push( action.payload );
                newState.currentOutput = chars.join('');
            } else if (
                ( tailIsOpeningBracket( newState.currentOutput ) && '−' === action.payload ) ||
                ! tailIsOpeningBracket( newState.currentOutput )
            ) {
                newState.currentOutput += action.payload;
            }

            return newState;

        case PREV_ANS_INPUT:
            newState = clone(state);

            if ( '0' === newState.currentOutput ) {
                newState.currentOutput = 'Ans';
            } else if ( tailIsOpeningBracket( newState.currentOutput ) || tailIsOperator( newState.currentOutput ) ) {
                newState.currentOutput += 'Ans';
            } else if ( newState.isOutputCalculationResult ) {
                newState.prevOutput = `Ans = ${newState.currentOutput}`;
                newState.currentOutput = 'Ans';
                newState.isOutputCalculationResult = false;
            }

            return newState;

        case OPEN_BRACKET_INPUT:
            newState = clone(state);

            if ( newState.isOutputCalculationResult ) {
                newState.prevOutput = `Ans = ${newState.currentOutput}`;
                newState.currentOutput = '0';
                newState.isOutputCalculationResult = false;
            }

            if ( '0' === newState.currentOutput ) {
                newState.currentOutput = '(';
                newState.openBracketsCount++;
            } else if ( ! tailIsNumber( newState.currentOutput ) && ! tailIsClosingBracket( newState.currentOutput ) ) {
                newState.currentOutput += '(';
                newState.openBracketsCount++;
            }

            return newState;

        case CLOSING_BRACKET_INPUT:
            newState = clone(state);

            if ( newState.openBracketsCount > 0 && ! tailIsOpeningBracket( newState.currentOutput ) && ! tailIsOperator( newState.currentOutput ) ) {
                newState.currentOutput += ')';
                newState.openBracketsCount--;
            }

            return newState;

        case CLEAR_ENTRY:
            newState = clone(state);
            let chars = newState.currentOutput.split('');

            if ( chars.length > 1 ) {
                chars.pop();
            } else {
                chars = ['0'];
            }

            newState.currentOutput = chars.join('');

            return newState;

        case ALL_CLEAR:
            newState = clone(state);

            newState.currentOutput = '0';

            return newState;

        case CALCULATE:
            newState = clone(state);
            let expression = newState.currentOutput;

            newState.prevOutput = newState.currentOutput + ' =';

            expression = expression.replace( /×/g, '*' );
            expression = expression.replace( /÷/g, '/' );
            expression = expression.replace( /R/g, '%' );
            expression = expression.replace( /−/g, '-' );
            expression = expression.replace( /Ans/g, newState.prevAns );

            // eslint-disable-next-line
            newState.prevAns = eval( expression );
            newState.currentOutput = newState.prevAns.toString();
            newState.isOutputCalculationResult = true;

            return newState;

        default:
        return state;
    }
}

const tailIsOperator = str => {
    if ( str.length && 'string' === typeof str ) {
        let chars = str.split('');
        let operators = [ '+', '−', '×', '÷', '%' ];

        return operators.includes( chars.pop() );
    }
    return false;
}

const tailIsNumber = str => {
    if ( str.length && 'string' === typeof str ) {
        let chars = str.split('');
        let operators = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

        return operators.includes( chars.pop() );
    }
    return false;
}

const tailIsOpeningBracket = str => {
    if ( str.length && 'string' === typeof str ) {
        let chars = str.split('');

        return '(' === chars.pop();
    }
    return false;
}

const tailIsClosingBracket = str => {
    if ( str.length && 'string' === typeof str ) {
        let chars = str.split('');

        return ')' === chars.pop();
    }
    return false;
}
