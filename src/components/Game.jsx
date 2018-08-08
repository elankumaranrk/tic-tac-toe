import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Status from './Status';
import Board from './Board';
import Controls from './Controls';

export default class Game extends Component {
	state = {
		cells: new Array(9).fill(''),
		isXNext: true,
		mode: 'easy'
	};
	onModeChange = ({ target }) => {
		const { value } = target;
		this.setState({ mode: value });
	};
	cellClickHandler = cellIndex => {
		const { cells, isXNext } = this.state;

		let newCells = cells.slice();
		newCells[cellIndex] = isXNext ? 'X' : 'O';

		this.setState({ cells: newCells, isXNext: !isXNext });
	};
	render() {
		const { cells, isXNext, mode } = this.state;
		return (
			<div>
				<Status
					isXNext={isXNext}
					mode={mode}
					onModeChange={this.onModeChange}
				/>
				<Board cells={cells} cellClickHandler={this.cellClickHandler} />
				<Controls />
			</div>
		);
	}
}
