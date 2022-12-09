import { createSlice, nanoid } from "@reduxjs/toolkit";

// define the initial state
const initialState = [
	{
		id: 1,
		title: "how to start with C#",
		content:
			"to start with any language, you have to learn the basics then learn the OOP concepts and go to design pattern and other advanced stuff of the language",
	},
	{
		id: 2,
		title: "how to start with DDD",
		content:
			"you need to learn the basics of OOP and grasp them first, and then go to some concepts such as domain models, aggregate, value objects, and ....",
	},
];

// define the reducer slice
const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postCreated: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(title, authorId, content) {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
						authorId,
					},
				};
			},
		},
	},
});

// lets create our own post selector so if we changed the hierarchy of the state later, we don't have to change the selection methodolgy inside the store.js file
export const selectAllPosts = (state) => state.posts;
export default postSlice.reducer;
export const { postCreated } = postSlice.actions;
