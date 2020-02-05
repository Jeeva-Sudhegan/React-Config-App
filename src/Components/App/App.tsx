/* eslint-disable no-unused-vars */
import React, {
	Component,
	ReactNode,
} from "react";
import { hot } from "../../../node_modules/react-hot-loader/root";
import { HelloFunctionComponent } from "../Hello/Hello";
import { Counter } from "../Counter/Counter";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IState {
	checked: boolean;
}
class App extends Component<
	{},
	IState
> {
	constructor(props) {
		super(props);
		this.state = {
			checked: false,
		};
	}

	handleCheck = () => {
		this.setState(prevState => ({
			checked: !prevState.checked,
		}));
	};

	render(): ReactNode {
		// const iconChange = this.state.checked ? ["fas", "check-square"] : ["fas", "square"];
		// const style = {
		//     cursor: "pointer"
		// };
		return (
			<div className="App">
				{/* <FontAwesomeIcon className="home" icon="coffee" /> */}
				<h1>
					Hello React
					Application
				</h1>
				{/* <FontAwesomeIcon onClick = {this.handleCheck} style = {style} icon={iconChange} /> */}
				{/* <FontAwesomeIcon icon={['fab', 'apple']} />
                <FontAwesomeIcon icon={['fab', 'microsoft']} />
                <FontAwesomeIcon icon={['fab', 'google']} /> */}
				{/* <HelloClassComponent
					compiler="class"
					framework="react"
				/>
				<HelloFunctionComponent
					compiler="function"
					framework="react"
				/>
				<HelloClassComponent /> */}
				<HelloFunctionComponent />
				<Counter>
					Click Me!
				</Counter>
			</div>
		);
	}
}

export default hot(App);
