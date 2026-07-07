import { createStore } from "redux";

const INITIAL_STATE = {
  counter: 0,
  showCounter: true,
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
  if (action.type === "toggle") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  }

  return state;
}
const store = createStore(counterReducer);

export default store;
