import React, { Component, ReactNode } from 'react';
import { HelloClassComponent, HelloFunctionComponent } from "../Hello/Hello";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IState {
    checked: boolean
}
class App extends Component<{},IState> {
    state:IState = {
        checked: false
    }
    handleCheck(): void {
        this.setState({checked: !this.state.checked});
    }
    render(): ReactNode {
        // const iconChange = this.state.checked ? ["fas", "check-square"] : ["fas", "square"];
        // const style = {
        //     cursor: "pointer"
        // };
        return (
            <div className="App">
                {/* <FontAwesomeIcon className="home" icon="coffee" /> */}
                <h1>Hello React Application</h1>
                {/* <FontAwesomeIcon onClick = {this.handleCheck} style = {style} icon={iconChange} /> */}
                {/* <FontAwesomeIcon icon={['fab', 'apple']} />
                <FontAwesomeIcon icon={['fab', 'microsoft']} />
                <FontAwesomeIcon icon={['fab', 'google']} /> */}
                <HelloClassComponent compiler = "class" framework = "react" />
                <HelloFunctionComponent compiler = "function" framework = "react" />
                <HelloClassComponent />
                <HelloFunctionComponent />
            </div>
        );
    }
}

export default App;