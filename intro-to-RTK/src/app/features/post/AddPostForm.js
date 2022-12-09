import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { postCreated } from "./postSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [author, setAuthor] = useState("");
	const OnSaveButtonClicked = () => {
		if (author && title && content) {
			dispatch(postCreated(title, author, content));
			setTitle("");
			setAuthor("");
			setContent("");
		}
	};
	return (
		<div className="border-5 text-center">
			<h1 className="text-1xl text-center font-bold text-gray700">
				Add New Post
			</h1>
			<form>
				<label htmlFor="PostTitle">Title</label>
				<input
					id="PostTitle"
					name="PostTitle"
					type={"text"}
					className="border-2 m-1 p-1 font-bold text-gray-700"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<br />
				<label htmlFor="PostAuthor">Author</label>
				<input
					className="border-2 m-1 p-1 font-bold text-gray-700"
					id="PostAuthor"
					name="PostAuthor"
					type={"text"}
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<br />
				<label htmlFor="PostContent">Content</label>
				<input
					className="border-2 m-1 p-1 font-bold text-gray-700"
					id="PostContent"
					name="PostContent"
					type={"text"}
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<br />
				<button
					type="button"
					onClick={OnSaveButtonClicked}
					className="bg-gray-700 text-white font-bold p-1 border-1"
				>
					Save
				</button>
			</form>
		</div>
	);
};

export default AddPostForm;
