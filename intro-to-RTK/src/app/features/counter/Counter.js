import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import the actions we had defined
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
	const [IncrementAmount, setIncrementAmount] = useState(0);
	// we will recieve input text, so to make sure lets create a short circuit checker for our local state
	let amount = Number(IncrementAmount) || 0;

	// when we reset the counter we need to reset both the amount of the local state and the redux state also
	const resetAll = () => {
		setIncrementAmount(0);
		dispatch(reset());
	};

	// define the dispatch to dispatch the required actions
	const dispatch = useDispatch();

	// access the state
	const count = useSelector((state) => state.counter.count);

	return (
		<div className="border-2 m-2">
			<h1 className="font-bold text-2xl text-center">Counter Component</h1>
			<section className="m-2">
				<p className="font-bold">{count}</p>
				{/* buttons */}
				<div className="space-x-2 grid">
					<button
						onClick={() => dispatch(increment())}
						className="text-2xl font-bold text-green-500"
					>
						+
					</button>
					<button
						onClick={() => dispatch(decrement())}
						className="text-2xl font-bold text-red-500"
					>
						-
					</button>
					<button
						onClick={() => resetAll()}
						className="text-2xl font-bold text-fuchsia-600"
					>
						Reset
					</button>
					<div className="space-x-2 m-2">
						<input
							className="border-2 p-2 font-bold"
							type={"text"}
							value={IncrementAmount}
							onChange={(e) => setIncrementAmount(e.target.value)}
						/>
						<button
							onClick={() => dispatch(incrementByAmount(amount))}
							className="text-2xl font-bold text-blue-600"
						>
							Increment By Amount
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Counter;
