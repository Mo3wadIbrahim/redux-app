const INITIAL_STATE = {
  counter: 0,
};
function counterReducer(state = INITIAL_STATE, action) {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  return state;
}
// eslint-disable-next-line no-undef
const redux = require("redux");
const store = redux.createStore(counterReducer);
function counterSubscriber() {
  const lastState = store.getState();
  console.log(lastState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
