import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'increment':
            return {
                counter: state.counter + 1,
                showCounter: state.showCounter,
            };
        case 'decrement':
            return {
                counter: state.counter - 1,
                showCounter: state.showCounter,
            };
        case 'incrementby5':
            return {
                counter: state.counter + action.amount,
                showCounter: state.showCounter,
            };
        case 'decrementby5':
            return {
                counter: state.counter - action.amount,
                showCounter: state.showCounter,
            };
        case 'toggleCounter':
            return {
                counter: state.counter,
                showCounter: !state.showCounter
            };
        default:
            return state;
    }
}

let store = createStore(counterReducer);

export default store;
