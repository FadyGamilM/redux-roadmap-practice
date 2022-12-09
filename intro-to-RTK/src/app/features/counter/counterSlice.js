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
		reset: (state, action) => {
			state.count = 0;
		},
		incrementByAmount: (state, action) => {
			state.count += action.payload;
		},
	},
});

// export the actions and reducers
// => the actions are destructered from the slice.actions
export const { increment, decrement, reset, incrementByAmount } =
	counterSlice.actions;
//=> export the full reducer because the store will need that
export default counterSlice.reducer;
