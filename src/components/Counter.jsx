import React, { useReducer } from "react";
import { initialState, reducers } from "./GlobalState";

// This component uses the useReducer hook to manage a simple counter state
// It provides buttons to increment and decrement the count value
const Counter = () => {
  //Get access to use and update state
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};
export default Counter;
