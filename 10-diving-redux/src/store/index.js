import { createStore } from 'redux';

function counterReducer(state = { counter: 0 }, action) {
    switch (action.type) {
        case 'incremented':
            return { counter: state.counter + 1 };
        case 'decremented':
            return { counter: state.counter - 1 };
        default:
            return state;
    }
}

let store = createStore(counterReducer);

export default store;