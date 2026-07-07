import { createStore } from "redux";

export const actions = {
  increment: "increment",
  decrement: "decrement",
  toggle: "toggle",
  increase: "increase",
};
const INITIAL_STATE = {
  counter: 0,
  showCounter: true,
};
function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.increment:
      return { ...state, counter: state.counter + 1 };

    case actions.decrement:
      return { ...state, counter: state.counter - 1 };

    case actions.toggle:
      return { ...state, showCounter: !state.showCounter };

    case actions.increase:
      return { ...state, counter: state.counter + action.payload };

    default:
      return state;
  }
}
const store = createStore(counterReducer);

export default store;
