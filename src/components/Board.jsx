import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cells from './Cells';
import Background from './svg/Background';

export default class Board extends Component {
	state = {
		cells: new Array(9).fill(''),
		isXNext: true
	};
	static propTypes = {};

	cellClickHandler = cellIndex => {
		const { cells, isXNext } = this.state;

		let newCells = cells.slice();
		newCells[cellIndex] = isXNext ? 'X' : 'O';

		this.setState({ cells: newCells, isXNext: !isXNext });
	};

	render() {
		const { cells } = this.state;
		return (
			<div className="board">
				<Background />
				<Cells cells={cells} cellClickHandler={this.cellClickHandler} />
			</div>
		);
	}
}
