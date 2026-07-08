// Initial State Object
const STORE_DATA = {
  counter: 0,
};

// Reducer Function
const counterReducer = (state = STORE_DATA, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  return state;
};
// Import Redux Syntax
const redux = require("redux");

// Create Store Syntax
const store = redux.createStore(counterReducer);

// Create a Subscriber
const counterSubscriber = () => {
  const latestState = store.getState().counter;
  console.log("Counter: " + store.getState().counter);
};

store.subscribe(counterSubscriber);

// Dispatch The Action Syntax
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
