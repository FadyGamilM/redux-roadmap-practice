import { createSlice } from "@reduxjs/toolkit";

// define the initial state
const initialState = {
	count: 0,
};

// define the slice
export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state, action) => {
			state.count += 1;
		},
		decrement: (state, action) => {
			state.count -= 1;
		},
	},
});

// export the actions and reducers
// => the actions are destructered from the slice.actions
export const { increment, decrement } = counterSlice.actions;
//=> export the full reducer because the store will need that
export default counterSlice.reducer;
