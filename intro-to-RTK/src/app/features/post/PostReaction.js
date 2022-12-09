import React from "react";
import { useDispatch } from "react-redux";
import { postReactionAdded } from "./postSlice";
let happyFace = "🙂 ";
let sadFace = "😠 ";

const emojis = {
	Like: happyFace,
	DisLike: sadFace,
};

const PostReaction = ({ post }) => {
	const dispatch = useDispatch();
	const reactionButtons = Object.entries(emojis).map(([name, emoji]) => {
		console.log(emoji);
		return (
			<button
				type="button"
				classname="p-2"
				onClick={() =>
					dispatch(
						postReactionAdded({
							postId: post.id,
							reactionType: name,
						})
					)
				}
			>
				{emoji} {post.reactions[name]}
			</button>
		);
	});

	return <div>{reactionButtons}</div>;
};

export default PostReaction;
