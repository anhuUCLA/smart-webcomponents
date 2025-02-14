import React from "react";
import ReactDOM from "react-dom";
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	sampleData = [{
		Period: 'January 2019',
		'Marvel Comics': 39.24,
		DC: 29.7,
		'Image Comics': 7.56,
		'Dark Horse Comics': 3.95,
		'IDW Publishing': 3.65,
		'BOOM! Studios': 2.32
	}];

	caption = 'January 2021 Comic Book Market Share';
	description = '';
	showLegend = true;
	padding = {
		left: 15,
		top: 15,
		right: 15,
		bottom: 15
	};
	titlePadding = {
		left: 90,
		top: 0,
		right: 0,
		bottom: 10
	};
	dataSource = this.sampleData;
	xAxis = {
		dataField: 'Period',
		visible: false
	};
	valueAxis = {
		visible: false
	};
	colorScheme = 'scheme29';
	seriesGroups = [
		{
			type: 'stackedcolumn',
			columnsGapPercent: 50,
			seriesGapPercent: 0,
			columnsTopWidthPercent: 0,
			columnsBottomWidthPercent: 100,
			columnsMinWidth: 600,
			formatSettings: { sufix: '%' },
			toolTipFormatFunction: function (value, index, series) {
				return series.dataField + ': ' + value + '%';
			},
			series: [
				{ dataField: 'Marvel Comics', labels: { visible: true, offset: { x: 270 } } },
				{ dataField: 'DC', labels: { visible: true, offset: { x: 150 } } },
				{ dataField: 'Image Comics', labels: { visible: true, offset: { x: 85 } } },
				{ dataField: 'Dark Horse Comics', labels: { visible: true, offset: { x: 60 } } },
				{ dataField: 'IDW Publishing', labels: { visible: true, offset: { x: 45 } } },
				{ dataField: 'BOOM! Studios', labels: { visible: true, offset: { x: 35 } } }
			]
		}
	];

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Chart id="chart"
					caption={this.caption}
					description={this.description}
					showLegend={this.showLegend}
					padding={this.padding}
					titlePadding={this.titlePadding}
					dataSource={this.dataSource}
					xAxis={this.xAxis}
					valueAxis={this.valueAxis}
					seriesGroups={this.seriesGroups}></Chart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
