import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Cells = () => {
	return (
		<span className="cells">
			<Cell />
			<Cell />
		</span>
	);
};

Cells.propTypes = {};

export default Cells;
