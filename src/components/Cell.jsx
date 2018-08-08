import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ value, onClick }) => {
	return (
		<span role="button" onClick={onClick} className="cell">
			{value}
		</span>
	);
};

Cell.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.func
};

Cell.defaultProps = {
	value: '',
	onClick: () => {}
};

export default Cell;
