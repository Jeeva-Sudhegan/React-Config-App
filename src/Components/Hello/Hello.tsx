import React, {
	Component,
	ReactNode,
	ReactElement,
	FunctionComponent,
	FC,
} from 'react';

export interface HelloProps {
	compiler?: string;
	framework?: string;
}

const defaultHelloProps: HelloProps = {
	compiler: 'compiler',
	framework: 'framework',
};

// SFC => Stateless Functional Component for setting default props
export const HelloFunctionComponent: FC<HelloProps> = (
	props: HelloProps,
): ReactElement => (
	<h1>
		Hello from {props.compiler} and{' '}
		{props.framework} from
		Functional Component
	</h1>
);

HelloFunctionComponent.defaultProps = defaultHelloProps;

export class HelloClassComponent extends Component<
	HelloProps,
	{}
> {
	static defaultProps: HelloProps = defaultHelloProps;
	render(): ReactNode {
		return (
			<h1>
				Hello from{' '}
				{this.props.compiler}{' '}
				and{' '}
				{this.props.framework}{' '}
				from Class Component
			</h1>
		);
	}
}

// ReactNode => JSX element type
