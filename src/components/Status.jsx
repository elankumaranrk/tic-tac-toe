import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Status = ({ isXNext, mode, onModeChange, started, ended }) => {
	const indicatorClassX = classNames('indicator', { active: isXNext });
	const indicatorClassO = classNames('indicator', { active: !isXNext });
	const getCurrentStatus = () => {
		if (!started) return 'Start Game!';
		if (ended) return 'Game Over!';
		return `Next turn is:  ${isXNext ? 'X' : 'O'}`;
	};
	return (
		<div className="status">
			<span className="select">
				<select onChange={onModeChange} value={mode} name="mode" id="mode">
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Impossible</option>
					<option value="faf">Play against a Friend</option>
				</select>
			</span>
			<div className="indicators">
				<div className={indicatorClassX}>
					<span>X</span>
					<span>0</span>
				</div>
				<div className={indicatorClassO}>
					<span>O</span>
					<span>0</span>
				</div>
			</div>
			<p className="current-status">{getCurrentStatus()}</p>
		</div>
	);
};

Status.propTypes = {};

export default Status;
