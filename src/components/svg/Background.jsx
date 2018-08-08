import React from 'react';

const Background = () => {
	return (
		<svg
			className="background"
			stroke="rgba(0,0,0,0.1)"
			style={{ width: 216, opacity: 1 }}
		>
			<path d="M108,83L6,83" />
			<path d="M108,153L6,153" />
			<path d="M108,83L210,83" />
			<path d="M108,153L210,153" />
			<path d="M73,118L73,16" />
			<path d="M143,118L143,16" />
			<path d="M73,118L73,220" />
			<path d="M143,118L143,220" />
		</svg>
	);
};

export default Background;
