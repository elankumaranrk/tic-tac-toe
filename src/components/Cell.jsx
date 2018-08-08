import React from 'react';
import PropTypes from 'prop-types';
import X from './svg/X';
import O from './svg/O';
import classNames from 'classnames';

const Cell = ({ value, onClick }) => {
	const cellClass = classNames('cell', { clickable: value === '' });
	const enhancedClickHandler = () => (value === '' ? onClick() : {});
	return (
		<span role="button" onClick={enhancedClickHandler} className={cellClass}>
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
