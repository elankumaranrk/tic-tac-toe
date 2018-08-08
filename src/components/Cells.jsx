import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Cells = ({ cells = [], cellClickHandler }) => {
	return (
		<span className="cells">
			{cells.map((val, index) => (
				<Cell key={index} onClick={() => cellClickHandler(index)} value={val} />
			))}
		</span>
	);
};

Cells.propTypes = {
	cells: PropTypes.arrayOf(PropTypes.string),
	cellClickHandler: PropTypes.func
};
Cells.defaultProps = {
	cellClickHandler: () => {}
};
export default Cells;
