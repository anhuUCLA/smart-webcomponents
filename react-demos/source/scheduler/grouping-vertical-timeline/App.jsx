import React from "react";
import ReactDOM from "react-dom";
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(props) {
		super(props);

		const today = new Date(),
			year = today.getFullYear(),
			month = today.getMonth(),
			date = today.getDate();

		this.data = [{
			label: 'Website Re-Design Plan',
			dateStart: new Date(year, month, date, 9, 30),
			dateEnd: new Date(year, month, date, 11, 30)
		}, {
			label: 'Book Flights to San Fran for Sales Trip',
			priorityId: 1,
			dateStart: new Date(year, month, date + 3, 10, 0),
			dateEnd: new Date(year, month, date + 3, 12, 0),
		}, {
			label: 'Install New Router in Dev Room',
			priorityId: 1,
			dateStart: new Date(year, month, date, 13),
			dateEnd: new Date(year, month, date, 15, 30)
		}, {
			label: 'Approve Personal Computer Upgrade Plan',
			priorityId: 2,
			dateStart: new Date(year, month, date + 1, 10, 0),
			dateEnd: new Date(year, month, date + 1, 11, 0)
		}, {
			label: 'Final Budget Review',
			priorityId: 2,
			dateStart: new Date(year, month, date + 1, 12, 0),
			dateEnd: new Date(year, month, date + 1, 13, 35)
		}, {
			label: 'New Brochures',
			priorityId: 2,
			dateStart: new Date(year, month, date, 13, 0),
			dateEnd: new Date(year, month, date, 15, 15)
		}, {
			label: 'New Brochures',
			priorityId: 3,
			dateStart: new Date(year, month, date, 13, 0),
			dateEnd: new Date(year, month, date, 15, 15)
		}, {
			label: 'Install New Database',
			priorityId: 1,
			dateStart: new Date(year, month, date + 1, 9),
			dateEnd: new Date(year, month, date + 1, 12, 15)
		}, {
			label: 'Approve New Online Marketing Strategy',
			priorityId: 2,
			dateStart: new Date(year, month, date + 2, 12, 0),
			dateEnd: new Date(year, month, date + 2, 14, 0)
		}, {
			label: 'Upgrade Personal Computers',
			priorityId: 1,
			dateStart: new Date(year, month, date, 9),
			dateEnd: new Date(year, month, date, 11, 30)
		}, {
			label: 'Prepare year Marketing Plan',
			priorityId: 2,
			dateStart: new Date(year, month, date + 3, 11, 0),
			dateEnd: new Date(year, month, date + 3, 13, 30)
		}, {
			label: 'Prepare year Marketing Plan',
			priorityId: 3,
			dateStart: new Date(year, month, date + 3, 11, 0),
			dateEnd: new Date(year, month, date + 3, 13, 30)
		}, {
			label: 'Brochure Design Review',
			priorityId: 1,
			dateStart: new Date(year, month, date + 2, 11, 0),
			dateEnd: new Date(year, month, date + 2, 13, 30)
		}, {
			label: 'Create Icons for Website',
			priorityId: 2,
			dateStart: new Date(year, month, date + 4, 10, 0),
			dateEnd: new Date(year, month, date + 4, 11, 30)
		}, {
			label: 'Upgrade Server Hardware',
			priorityId: 1,
			dateStart: new Date(year, month, date + 4, 9, 0),
			dateEnd: new Date(year, month, date + 4, 15, 0)
		}, {
			label: 'Submit New Website Design',
			priorityId: 2,
			dateStart: new Date(year, month, date + 4, 16, 30),
			dateEnd: new Date(year, month, date + 4, 18, 0)
		}, {
			label: 'Launch New Website',
			priorityId: 2,
			dateStart: new Date(year, month, date + 4, 12, 20),
			dateEnd: new Date(year, month, date + 4, 14, 0)
		}, {
			label: 'Google AdWords Strategy',
			priorityId: 1,
			dateStart: new Date(year, month, date + 7, 9, 0, 0),
			dateEnd: new Date(year, month, date + 7, 12, 0, 0)
		}, {
			label: 'Rollout of New Website and Marketing Brochures',
			priorityId: 1,
			dateStart: new Date(year, month, date + 7, 13, 0, 0),
			dateEnd: new Date(year, month, date + 7, 15, 30, 0)
		}, {
			label: 'Non-Compete Agreements',
			priorityId: 2,
			dateStart: new Date(year, month, date + 8, 13, 0, 0),
			dateEnd: new Date(year, month, date + 8, 15, 45, 0)
		}, {
			label: 'Approve Hiring of John Jeffers',
			priorityId: 3,
			dateStart: new Date(year, month, date + 8, 9, 0, 0),
			dateEnd: new Date(year, month, date + 8, 12, 0, 0)
		}, {
			label: 'Update NDA Agreement',
			priorityId: 1,
			dateStart: new Date(year, month, date + 8, 11, 0, 0),
			dateEnd: new Date(year, month, date + 8, 14, 15, 0)
		}, {
			label: 'Update Employee Files with New NDA',
			priorityId: 1,
			dateStart: new Date(year, month - 2, 1, 9, 0, 0),
			dateEnd: new Date(year, month - 2, 1, 11, 45, 0)
		}, {
			label: 'Submit Questions Regarding New NDA',
			priorityId: 1,
			dateStart: new Date(year, month, date + 9, 10, 0, 0),
			dateEnd: new Date(year, month, date + 9, 11, 30, 0)
		}, {
			label: 'Submit Signed NDA',
			priorityId: 1,
			dateStart: new Date(year, month, date + 9, 13, 0, 0),
			dateEnd: new Date(year, month, date + 9, 15, 0, 0)
		}, {
			label: 'Review Revenue Projections',
			priorityId: 2,
			dateStart: new Date(year, month, date + 9, 11, 0, 0),
			dateEnd: new Date(year, month, date + 9, 14, 0, 0)
		}, {
			label: 'Comment on Revenue Projections',
			priorityId: 2,
			dateStart: new Date(year, month, date + 7, 10, 0, 0),
			dateEnd: new Date(year, month, date + 7, 13, 0, 0)
		}, {
			label: 'Comment on Revenue Projections',
			priorityId: 3,
			dateStart: new Date(year, month, date + 7, 10, 0, 0),
			dateEnd: new Date(year, month, date + 7, 13, 0, 0)
		}, {
			label: 'Provide New Health Insurance Docs',
			priorityId: 2,
			dateStart: new Date(year, month - 1, 1, 12, 0, 0),
			dateEnd: new Date(year, month - 1, 1, 15, 0, 0)
		}, {
			label: 'Review Changes to Health Insurance Coverage',
			priorityId: 2,
			dateStart: new Date(year, month, date + 10, 9, 0, 0),
			dateEnd: new Date(year, month, date + 10, 13, 0, 0)
		}, {
			label: 'Review Training Course for any Ommissions',
			priorityId: 1,
			dateStart: new Date(year, month, date + 10, 11, 0, 0),
			dateEnd: new Date(year, month, date + 10, 14, 0, 0)
		},
		{
			label: 'Review Training Course for any Ommissions',
			priorityId: 2,
			dateStart: new Date(year, month + 1, 2, 11, 0, 0),
			dateEnd: new Date(year, month + 1, 2, 14, 0, 0)
		},
		{
			label: 'Review Training Course for any Ommissions',
			priorityId: 3,
			dateStart: new Date(year, month + 1, 2, 11, 0, 0),
			dateEnd: new Date(year, month + 1, 2, 14, 0, 0)
		}
		];
	}

	view = 'timelineDay';

	hourStart = 6;

	hourEnd = 21;

	views = ['timelineDay', 'timelineWeek', 'timelineMonth'];

	firstDayOfWeek = 1;

	groupOrientation = 'vertical';

	groups = ['priorityId'];

	resources = [{
		label: 'Priority',
		value: 'priorityId',
		dataSource: [{
			label: 'Low Priority',
			id: 1,
			backgroundColor: '#FB8C00'
		}, {
			label: 'Medium Priority',
			id: 2,
			backgroundColor: '#00ACC1'
		},
		{
			label: 'High Priority',
			id: 3,
			backgroundColor: '#A1887F'
		}
		]
	}];

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Scheduler id="scheduler" dataSource={this.data} view={this.view}
					hourStart={this.hourStart}
					hourEnd={this.hourEnd}
					views={this.views}
					firstDayOfWeek={this.firstDayOfWeek}
					groupOrientation={this.groupOrientation}
					groups={this.groups}
					resources={this.resources}></Scheduler>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
