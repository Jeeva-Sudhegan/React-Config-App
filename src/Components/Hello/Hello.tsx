import React, {
	FC,
	ReactElement,
} from "react";

export interface HelloProps {
	compiler?: string;
	framework?: string;
}

const defaultHelloProps: HelloProps = {
	compiler: "compiler",
	framework: "framework",
};

// SFC => Stateless Functional Component for setting default props
export const HelloFunctionComponent = ( props: HelloProps ): ReactElement => {
	const { compiler, framework } = props;
	return (
		<h1 data-testid = "hello">
			Hello from {compiler} and{" "}
			{framework} from Functional
			Component
		</h1>
	);
};

HelloFunctionComponent.defaultProps = defaultHelloProps;
