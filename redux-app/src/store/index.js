import { createStore } from "redux";

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
  if (action.type === "toggle") {
    return {
      ...state,
      counter: state.counter * -1,
    };
  }

  return state;
}
const store = createStore(counterReducer);

export default store;
