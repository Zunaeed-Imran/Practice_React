import { createStore } from "redux";


const ADD_USER = "ADD_USER";

const inetialState = {
  user: ["Julius"],
  count: 1,
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

const userReducer = (state = inetialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.user, action.payload],
        count: state.count + 1,
      };
    default:
      state;
  };
};


const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser("Lamia"));