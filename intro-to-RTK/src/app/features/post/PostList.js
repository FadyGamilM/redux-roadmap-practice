import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

const PostList = () => {
	// select the state
	let posts = useSelector(selectAllPosts);
	const renderPosts = posts.map((post) => {
		return (
			<article className="p-2 m-2 border-1 bg-slate-200" key={post.id}>
				<h1 className="text-4xl text-center font-bold text-blue-700">
					{post.title}
				</h1>
				<h1 className="p-3 font-bold">{post.content}</h1>
				<h1 className="text-sm text-gray-700 font-bold">
					writter by : {post.author}
				</h1>
			</article>
		);
	});
	return (
		<div className="border-2 m-2">
			<h1 className="font-bold text-2xl text-center">Post Component</h1>
			<div>{renderPosts}</div>
		</div>
	);
};

export default PostList;
