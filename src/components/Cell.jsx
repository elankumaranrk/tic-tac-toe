import React from 'react';
import PropTypes from 'prop-types';
import X from './svg/X';
import O from './svg/O';

const Cell = ({ value, onClick }) => {
	return (
		<span role="button" onClick={onClick} className="cell">
			{value === 'X' && <X />}
			{value === 'O' && <O />}
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
