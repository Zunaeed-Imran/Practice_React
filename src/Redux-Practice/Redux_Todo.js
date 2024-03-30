import { createStore } from "redux";



const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const inetialState = {
  count: 0,
};


const increment = () => {
  return {
    type: INCREMENT,
  };
};

const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const reset = () => {
  return {
    type: RESET,
  };
};

const counterReducer = (state = inetialState, action) => {
  switch (state.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
      
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      }
  
    default:
      state;
  };
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState);
});

store.dispatch(increment);

