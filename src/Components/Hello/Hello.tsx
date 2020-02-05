/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
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
export const HelloFunctionComponent: FC<HelloProps> = (
	props: HelloProps,
): ReactElement => {
	const {
		compiler,
		framework,
	} = props;
	return (
		<h1>
			Hello from {compiler} and{" "}
			{framework} from Functional
			Component
		</h1>
	);
};

HelloFunctionComponent.defaultProps = defaultHelloProps;

/* export class HelloClassComponent extends Component<
	HelloProps,
	{}
> {
	static defaultProps: HelloProps = defaultHelloProps;

	render(): ReactNode {
		return (
			<h1>
				Hello from{" "}
				{this.props.compiler}{" "}
				and{" "}
				{this.props.framework}{" "}
				from Class Component
			</h1>
		);
	}
} */

// ReactNode => JSX element type
