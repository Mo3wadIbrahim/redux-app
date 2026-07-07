import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

// // // // // // * Functional Component * // // // // // //
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter} </div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
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
