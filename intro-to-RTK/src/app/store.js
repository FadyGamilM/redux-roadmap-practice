import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// => my reducers
import postsReducer from "./features/post/postSlice";
import usersReducer from "./features/users/UserSlice";
import counteSliceReducer from "./features/counter/counterSlice";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const rootReducer = combineReducers({
	counter: counteSliceReducer,
	posts: postsReducer,
	users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});
