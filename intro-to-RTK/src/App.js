import Counter from "./app/features/counter/Counter";
import AddPostForm from "./app/features/post/AddPostForm";
import PostList from "./app/features/post/PostList";
function App() {
	return (
		<div className="App">
			<Counter />
			<PostList />
			<AddPostForm />
		</div>
	);
}

export default App;
