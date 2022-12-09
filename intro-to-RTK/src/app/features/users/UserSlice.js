import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
	{ id: 1, name: "fady gamil" },
	{ id: 2, name: "magy magdy" },
];

const usersSlice = createSlice({
	initialState,
	name: "users",
	reducers: {
		userAdded: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(name) {
				return {
					payload: {
						id: nanoid(),
						name,
					},
				};
			},
		},
	},
});

export const selectUsers = (state) => state.users;
export const { userAdded } = usersSlice.actions;
export default usersSlice.reducer;
