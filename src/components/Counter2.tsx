import { useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENTBYAMOUNT = "INCREMENTBYAMOUNT";

type incrementByType = { type: typeof INCREMENT };
type decrementByType = { type: typeof DECREMENT };
type resetByType = { type: typeof RESET };
type incrementByAmountType = { type: typeof INCREMENTBYAMOUNT, payload: number };

type counterActionType = incrementByType | decrementByType | resetByType | incrementByAmountType;

type countType = { count: number };


const initialState = {
  count: 0
}

const reducer = (state: countType, action: counterActionType) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    case INCREMENTBYAMOUNT:
      return { count: state.count + action.payload}
  
    default:
      throw new Error();
  }
}


const Counter2 = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (

    <>
      <h2>Count: {state.count}</h2>

      <button onClick={() => {
        dispatch({type: INCREMENT})
      }}>Increment</button>

      <button onClick={() => {
        dispatch({type: DECREMENT})
      }}>Decrement</button>

      <button onClick={() => {
        dispatch({type: RESET})
      }}>Reset</button>

      <button onClick={() => {
        dispatch({type: INCREMENTBYAMOUNT, payload: 9})
      }}>Add 9 More</button>
    </>
  )
}

export default Counter2
