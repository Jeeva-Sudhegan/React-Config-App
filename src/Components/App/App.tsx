import React, {
	ReactElement, lazy, Suspense
} from "react";
import CSS from "csstype";

const loadingStyle : CSS.Properties = {
	fontWeight: "bold",
	fontSize: "20px"
}

const HelloFunctionComponent = lazy( () => import("../Hello/Hello") );
const Counter = lazy( () => import("../Counter/Counter") );
const TimeCounter = lazy(() => import("../TimeCounter/TimeCounter") );

const App = (): ReactElement => (
	<div className="App">
		<h1> Hello React Application </h1>
		<Suspense fallback = { <div style = { loadingStyle }>Loading...</div> }>
			<HelloFunctionComponent />
			<Counter>Click Me!</Counter>
			<TimeCounter />
		</Suspense>
	</div>
);

export default App;
