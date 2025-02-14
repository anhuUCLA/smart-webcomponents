import React from "react";
import ReactDOM from "react-dom";
import { PhoneInput } from 'smart-webcomponents-react/phoneinput';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.input = React.createRef();
	}

	init() {
		let input = this.input.current;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<PhoneInput ref={this.input} placeholder="Empty"></PhoneInput>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
