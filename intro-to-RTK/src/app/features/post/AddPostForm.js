import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { postCreated } from "./postSlice";
// grap the select users to add them as an options button to select the author
import { selectUsers } from "../users/UserSlice";

const AddPostForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [authorId, setAuthorId] = useState("");

	const OnSaveButtonClicked = () => {
		if (authorId && title && content) {
			dispatch(postCreated(title, authorId, content));
			setTitle("");
			setContent("");
		}
	};

	// lets first select the authors
	const users = useSelector(selectUsers);

	// map all the users into the options button
	let authorOptions = users.map((user) => {
		return (
			<option key={user.id} value={user.id}>
				{user.name}
			</option>
		);
	});

	// if the form  is valid and inputs are all here
	var canSave = Boolean(title) && Boolean(content) && Boolean(authorId);

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
				<select
					id="PostAuthor"
					name="PostAuthor"
					value={authorId}
					onChange={(e) => setAuthorId(e.target.value)}
					className="border-2 m-1 p-1 font-bold text-gray-700"
				>
					<option value="">Select The Author </option>
					{authorOptions}
				</select>

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
					disabled={!canSave}
				>
					Save
				</button>
			</form>
		</div>
	);
};

export default AddPostForm;
