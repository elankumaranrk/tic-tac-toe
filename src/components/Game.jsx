import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Status from './Status';
import Board from './Board';
import Controls from './Controls';

export default class Game extends Component {
	render() {
		return (
			<div>
				<Status />
				<Board />
				<Controls />
			</div>
		);
	}
}
