import React from "react";
import { render } from "@testing-library/react";

import HelloFunctionComponent, {
	HelloProps,
} from "../Components/Hello/Hello";

function renderHello(
	props: Partial<HelloProps> = {},
) {
	const defaultProps: HelloProps = {
		compiler: "Compiler",
		framework: "Framework",
	};
	return render(
		<HelloFunctionComponent
			{...defaultProps}
			{...props}
		/>,
	);
}

describe("<HelloFunctionComponent />", () => {
	// To suppress console warning - start
	const originalError = console.error;

	beforeAll(() => {
		console.error = (...args) => {
			if (
				/Warning.*not wrapped in act/.test(
					args[0],
				)
			) {
				return;
			}
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

	test("should display default props", async () => {
		const {
			findByTestId,
		} = renderHello();
		const Hello = await findByTestId(
			"hello",
		);
		expect(Hello).toBeTruthy();
		expect(
			Hello.innerHTML.indexOf(
				"Compiler",
			),
		).toBeGreaterThanOrEqual(0);
		expect(
			Hello.innerHTML.indexOf(
				"Framework",
			),
		).toBeGreaterThanOrEqual(0);
	});
	test("should display passed value of compiler along with default framework", async () => {
		const {
			findByTestId,
		} = renderHello({
			compiler: "TestingCompiler",
		});
		const Hello = await findByTestId(
			"hello",
		);
		expect(Hello).toBeTruthy();
		expect(
			Hello.innerHTML.indexOf(
				"TestingCompiler",
			),
		).toBeGreaterThanOrEqual(0);
		expect(
			Hello.innerHTML.indexOf(
				"Framework",
			),
		).toBeGreaterThanOrEqual(0);
	});
	test("should display passed framework along with default compiler", async () => {
		const {
			findByTestId,
		} = renderHello({
			framework:
				"TestingFramework",
		});
		const Hello = await findByTestId(
			"hello",
		);
		expect(Hello).toBeTruthy();
		expect(
			Hello.innerHTML.indexOf(
				"Compiler",
			),
		).toBeGreaterThanOrEqual(0);
		expect(
			Hello.innerHTML.indexOf(
				"TestingFramework",
			),
		).toBeGreaterThanOrEqual(0);
	});
	test("should display passed value of compiler and framework", async () => {
		const {
			findByTestId,
		} = renderHello({
			compiler: "TestingCompiler",
			framework:
				"TestingFramework",
		});
		const Hello = await findByTestId(
			"hello",
		);
		expect(Hello).toBeTruthy();
		expect(
			Hello.innerHTML.indexOf(
				"TestingCompiler",
			),
		).toBeGreaterThanOrEqual(0);
		expect(
			Hello.innerHTML.indexOf(
				"TestingFramework",
			),
		).toBeGreaterThanOrEqual(0);
	});
});
