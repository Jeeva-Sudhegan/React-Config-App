import React, {
	ReactElement, lazy, Suspense, useState
} from "react";
import CSS from "csstype";

const loadingStyle : CSS.Properties = {
	fontWeight: "bold",
	fontSize: "20px"
}

const HelloFunctionComponent = lazy( () => import("../Hello/Hello") );
const Counter = lazy( () => import("../Counter/Counter") );
const TimeCounter = lazy(() => import("../TimeCounter/TimeCounter") );

const App = (): ReactElement => {
	const [ checked, setChecked ] = useState( false );
	const handleCheck = () => {
		setChecked( prevChecked => !prevChecked );
	}
	return (
	<div className="App">
		<h1> Hello React Application </h1>
		<Suspense fallback = { <div style = { loadingStyle }>Loading...</div> }>
			<HelloFunctionComponent />
			<Counter>Click Me!</Counter>
			<button onClick = { handleCheck } >Display</button>
			{ checked && <TimeCounter /> }
		</Suspense>
	</div>
)};

export default App;
