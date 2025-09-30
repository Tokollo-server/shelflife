import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the state for the counter
const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    value: 0,
    heading: "Counter App",
  },
  reducers: {
    //This function will increment the state value property by 1
    increment: (state) => {
      state.value += 1;
    },
    //This function will decrement the state value property by 1
    decrement: (state) => {
      state.value -= 1;
    },
    //This function will increment the state value property by an amount passed through the action.payload property
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
// Export the action functions to be used in components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
//Export the reducer function to be used in the store
export default counterSlice.reducer;
