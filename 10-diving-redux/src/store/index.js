import { createStore } from 'redux';

function counterReducer(state = { counter: 0 }, action) {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + 1 };
        case 'decrement':
            return { counter: state.counter - 1 };
        case 'incrementby5':
            return { counter: state.counter + action.amount };
        case 'decrementby5':
            return { counter: state.counter - action.amount };
        default:
            return state;
    }
}

let store = createStore(counterReducer);

export default store;
