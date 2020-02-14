import React, {
	ReactElement, lazy,
} from "react";

const HelloFunctionComponent = lazy( () => import("../Hello/Hello") );
const Counter = lazy( () => import("../Counter/Counter"));
const TimeCounter = lazy(() => import("../TimeCounter/TimeCounter"));

const App = (): ReactElement => (
	<div className="App">
		<h1> Hello React Application </h1>
		<HelloFunctionComponent />
		<Counter>Click Me!</Counter>
		<TimeCounter />
	</div>
);

export default App;
