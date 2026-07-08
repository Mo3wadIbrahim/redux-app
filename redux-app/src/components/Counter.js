import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";
// // // // // // * Functional Component * // // // // // //
const Counter = () => {
  const [isIncrease, setIsIncrease] = useState(false);
  const [payloadInput, setPayloadInput] = useState("");
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleIncrease = () => {
    dispatch(counterActions.increase(+payloadInput || 0));
    setIsIncrease(false);
    setPayloadInput("");
  };
  const handleChangePayload = (value) => {
    setPayloadInput(value);
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}> {counter} </div>}
      <div>
        {!isIncrease && (
          <button disabled={isIncrease} onClick={handleIncrement}>
            Increment
          </button>
        )}
        {isIncrease && (
          <div>
            <input
              type="number"
              required
              value={payloadInput}
              onChange={(event) => handleChangePayload(event.target.value)}
            />
            <button onClick={handleIncrease}>Increase</button>
          </div>
        )}

        {!isIncrease && (
          <button disabled={isIncrease} onClick={handleDecrement}>
            Decrement
          </button>
        )}
      </div>
      <button disabled={isIncrease} onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
      {!isIncrease && (
        <button onClick={() => setIsIncrease(true)}>Increase</button>
      )}
    </main>
  );
};

export default Counter;

// // // // // // * Class Based Component * // // // // // //
// import { connect } from "react-redux";
// import { Component } from "react";
// class Counter extends Component {
//   handleIncrement() {
//     this.props.increment();
//   }
//   handleDecrement() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {
//     this.props.toggle();
//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}> {this.props.counter} </div>
//         <div>
//           <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//           <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }
// const mapStateProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapMethodsProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch({ type: "increment" });
//     },
//     decrement: () => {
//       dispatch({ type: "decrement" });
//     },
//     toggle: () => {
//       dispatch({ type: "toggle" });
//     },
//   };
// };
// export default connect(mapStateProps, mapMethodsProps)(Counter);
