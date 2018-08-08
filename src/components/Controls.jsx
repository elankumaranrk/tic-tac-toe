import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onClick }) => {
	return (
		<div role="button" onClick={onClick} className="controls">
			Restart Game
		</div>
	);
};

Controls.propTypes = {};

export default Controls;
