import { sub } from "date-fns";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from "../users/UserSlice";
import PostReaction from "./PostReaction";
import { postReactionAdded, selectAllPosts } from "./postSlice";

let happyFace = "🙂 ";
let sadFace = "😠 ";

const emojis = {
	Like: happyFace,
	DisLike: sadFace,
};

const PostList = () => {
	const dispatch = useDispatch();

	// select the state
	let posts = useSelector(selectAllPosts);

	let authors = useSelector(selectUsers);

	const FilterAuthors = (authorId) => {
		let author = authors.find(
			(author) => Number(author.id) === Number(authorId)
		);
		if (author) return author.name;
		else return "UnKnown Author";
	};

	// const orderedPosts = posts
	// 	.slice()
	// 	.sort((a, b) => b.time.localeCompare(a.time));
	const renderPosts = posts.map((post) => {
		return (
			<article className="p-2 m-2 border-1 bg-slate-200" key={post.id}>
				<h1 className="text-4xl text-center font-bold text-blue-700">
					{post.title}
				</h1>
				<h1 className="p-3 font-bold">{post.content}</h1>
				<h1 className="text-sm text-gray-700 font-bold">
					writter by : {FilterAuthors(post.authorId)}
				</h1>
				{/* <PostReaction post={post} /> */}
				{Object.entries(emojis).map(([reactionName, reactionValue]) => {
					return (
						<button
							key={reactionName}
							onClick={() =>
								dispatch(
									postReactionAdded({
										postId: post.id,
										reactionType: reactionName,
									})
								)
							}
							className=" p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
						>
							{post.reactions[reactionName]}
							{reactionValue}
						</button>
					);
				})}
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
