import React from "react";
import {
	render,
	fireEvent,
} from "@testing-library/react";
import Counter from "../Components/Counter/Counter";

describe("<Counter />", () => {
	// To suppress console warning - start
	const originalError = console.error;

	beforeAll(() => {
		console.error = (
			...args: Array<any>
		) => {
			if (
				/Warning.*not wrapped in act/.test(
					args[0],
				)
			)
				return;
			originalError.call(
				console,
				...args,
			);
		};
	});

	afterAll(() => {
		console.error = originalError;
	});
	// To suppress console warning - end

	test("should be rendered", async () => {
		const { findByTestId } = render(
			<Counter>Click</Counter>,
		);
		const count = await findByTestId(
			"count",
		);
		const button = await findByTestId(
			"count-button",
		);
		expect(
			button.innerHTML,
		).toEqual("Click");
		expect(count.innerHTML).toBe(
			"0",
		);
	});

	test("should render respective count on click event", async () => {
		const { findByTestId } = render(
			<Counter>Click</Counter>,
		);
		const count = await findByTestId(
			"count",
		);
		const button = await findByTestId(
			"count-button",
		);
		expect(count.innerHTML).toBe(
			"0",
		);
		fireEvent.click(button);
		expect(count.innerHTML).toBe(
			"1",
		);
	});
});
