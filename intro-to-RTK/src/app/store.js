import { configureStore } from "@reduxjs/toolkit";

import counteSliceReducer from "./features/counter/counterSlice";

export const store = configureStore({
	reducer: {
		counter: counteSliceReducer,
	},
});
