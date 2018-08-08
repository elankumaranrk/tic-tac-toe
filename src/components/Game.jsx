import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Status from './Status';
import Board from './Board';
import Controls from './Controls';
import BoardLogic from '../lib/Board';
import TicTacToe from '../lib/TicTacToe';

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
	aiGamePlay = () => {
		const { mode, cells } = this.state;
		switch (mode) {
			case 'easy': {
				return new TicTacToe().getNextEasyMove(cells);
			}
			case 'medium': {
				return new TicTacToe().getNextMediumMove(cells);
			}
			case 'hard': {
				return new TicTacToe().getNextBestMove(cells);
			}
		}
	};
	cellClickHandler = cellIndex => {
		const { cells, isXNext, mode } = this.state;

		let newCells = cells.slice();
		newCells[cellIndex] = isXNext ? 'X' : 'O';

		this.setState({ cells: newCells, isXNext: !isXNext }, () => {
			this.checkWinner();
			if (mode !== 'faf') {
				setTimeout(() => {
					const newAiMove = this.aiGamePlay();
					let aiCells = newCells.slice();
					aiCells[newAiMove] = 'O';
					this.setState({ cells: aiCells, isXNext: true });
				}, 400);
			}
			this.checkWinner();
		});
	};

	checkWinner() {
		const { cells } = this.state;
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
