import PropTypes from 'prop-types';
import React from 'react';

const Buttons = (props) => <menu data-ts="Buttons" {...props} />;

Buttons.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	className: PropTypes.string,
};

Buttons.defaultProps = {
	children: null,
	className: undefined,
};

export default Buttons;
