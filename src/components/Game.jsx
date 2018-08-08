import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Status from './Status';
import Board from './Board';
import Controls from './Controls';
import BoardLogic from '../lib/Board';

export default class Game extends Component {
	state = {
		cells: new Array(9).fill(''),
		isXNext: true,
		mode: 'easy',
		ended: false,
		winner: ''
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
		this.checkWinner(newCells);
	};

	checkWinner(cells) {
		return new Promise(resolve => setTimeout(resolve, 200)).then(() => {
			const board = new BoardLogic(cells);
			const winner = board.isTerminal();
			if (winner) {
				this.setState({ ended: true, winner });
			} else if (board.isFull()) {
				this.setState({ ended: true, winner: 'XO' });
			}
		});
	}
	render() {
		const { cells, isXNext, mode, ended, winner } = this.state;
		return (
			<div>
				<Status
					isXNext={isXNext}
					mode={mode}
					onModeChange={this.onModeChange}
				/>
				<Board
					ended={ended}
					winner={winner}
					cells={cells}
					cellClickHandler={this.cellClickHandler}
				/>
				<Controls />
			</div>
		);
	}
}
