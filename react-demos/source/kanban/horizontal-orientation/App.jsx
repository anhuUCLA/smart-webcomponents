import React from "react";
import ReactDOM from "react-dom";
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

class App extends React.Component {
	dataSource = GetKanbanData();

	columns = [{
		label: 'To do',
		dataField: 'toDo'
	},
	{
		label: 'In progress',
		dataField: 'inProgress'
	},
	{
		label: 'Done',
		dataField: 'done',
		orientation: 'horizontal'
	}
	];

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Kanban id="kanban"
					collapsible
					dataSource={this.dataSource}
					columns={this.columns}></Kanban>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
