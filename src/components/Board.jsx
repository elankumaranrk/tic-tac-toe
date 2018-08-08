import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cells from './Cells';

export default class Board extends Component {
	static propTypes = {};

	render() {
		return (
			<div className="board">
				<Cells />
			</div>
		);
	}
}
