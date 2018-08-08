import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cells from './Cells';
import Background from './svg/Background';
import X from './svg/X';
import O from './svg/O';

export default class Board extends Component {
	static propTypes = {
		cells: PropTypes.arrayOf(PropTypes.string),
		cellClickHandler: PropTypes.func
	};

	getWinner = winner => {
		switch (winner) {
			case 'X':
				return <X />;
			case 'O':
				return <O />;
			case 'XO':
				return (
					<div className="draw">
						<X />
						<O />
					</div>
				);
		}
	};

	render() {
		const { cells, cellClickHandler, ended, winner } = this.props;
		if (ended) {
			return (
				<div className="board">
					<div className="winner">
						{this.getWinner(winner)}
						{winner === 'XO' ? 'Draw!' : 'Winner!'}
					</div>
				</div>
			);
		}
		return (
			<div className="board">
				<Background />
				<Cells cells={cells} cellClickHandler={cellClickHandler} />
			</div>
		);
	}
}
