import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cells from './Cells';
import Background from './svg/Background';

export default class Board extends Component {
	static propTypes = {
		cells: PropTypes.arrayOf(PropTypes.string),
		cellClickHandler: PropTypes.func
	};

	render() {
		const { cells, cellClickHandler } = this.props;
		return (
			<div className="board">
				<Background />
				<Cells cells={cells} cellClickHandler={cellClickHandler} />
			</div>
		);
	}
}
