import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter);
    const showCounter = useSelector((state) => state.counter.showCounter);
    const dispatch = useDispatch();
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && (
                <div className={classes.toggleCounter}>
                    <div className={classes.value}>
                        Counter Value: {counter}
                    </div>
                    <div>
                        <button onClick={() => dispatch(counterActions.increment())}>
                            Increament
                        </button>
                        <button onClick={() => dispatch(counterActions.decrement())}>
                            Decreament
                        </button>
                        <button
                            onClick={() =>
                                dispatch(counterActions.increase(5))
                            }
                        >
                            Increament By 5
                        </button>
                    </div>
                </div>
            )}

            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
// import { Component } from 'react';
// import classes from './Counter.module.css';
// import { connect } from 'react-redux';
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
