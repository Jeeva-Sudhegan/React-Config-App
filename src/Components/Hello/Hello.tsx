import React, {
	FC,
	memo,
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

const HelloFunctionComponent = ( props: HelloProps = defaultHelloProps ): ReactElement => {
	const { compiler, framework } = props;
	return (
		<h1 data-testid = "hello">
			Hello from {compiler} and{" "}
			{framework} from Functional
			Component
		</h1>
	);
};

export default memo(HelloFunctionComponent);