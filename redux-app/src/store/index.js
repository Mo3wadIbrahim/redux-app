// // // // // // * Redux Toolkit * // // // // // //
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const initialAuthState = {
  isAuthenticated: false,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
  },
});

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

// // // // // // * Legacy Redux * // // // // // //

// import { createStore } from "redux";
// export const actions = {
//   increment: "increment",
//   decrement: "decrement",
//   toggle: "toggle",
//   increase: "increase",
// };
// const INITIAL_STATE = {
//   counter: 0,
//   showCounter: true,
// };
// function counterReducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case actions.increment:
//       return { ...state, counter: state.counter + 1 };

//     case actions.decrement:
//       return { ...state, counter: state.counter - 1 };

//     case actions.toggle:
//       return { ...state, showCounter: !state.showCounter };

//     case actions.increase:
//       return { ...state, counter: state.counter + action.payload };

//     default:
//       return state;
//   }
// }
// const store = createStore(counterReducer);

// export default store;
