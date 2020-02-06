import { useState } from "react";

export const useCounter = initialCount => {
	const [count, setCount] = useState(
		initialCount,
	);
	const handleClick = (): void => {
		setCount(
			(count: number) =>
				count + 1,
		);
	};
	return { count, handleClick };
};
