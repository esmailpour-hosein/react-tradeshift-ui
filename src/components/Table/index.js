/* eslint-disable react/no-unused-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Table = (props) => {
	const renderTable = (renderProps) => {
		const { id, cols, rows, onbutton, linkable, pager, explode, selectable } =
			renderProps;
		window.ts.ui.get(`#${id}`, (table) => {
			if (explode) {
				table.explode();
			}
			if (selectable) {
				table.selectable();
			}
			table.cols(cols);
			table.rows(rows);
			if (pager.pages > 1) {
				table.pager(pager);
			}
			table.onbutton = onbutton;
			table.linkable(linkable);
		});
	};

	useEffect(() => {
		if (_.isNil(props.cols) || _.isNil(props.rows)) {
			return;
		}
		renderTable(props);
	});

	return <div data-ts="Table" id={props.id} className={props.className} />;
};

Table.defaultProps = {
	onbutton: () => {},
	linkable: () => {},
	pager: { pages: 0, page: 0, onselect: () => {} },
	className: '',
	selectable: false,
	explode: false,
};
Table.propTypes = {
	id: PropTypes.string.isRequired,
	cols: PropTypes.array.isRequired,
	rows: PropTypes.array.isRequired,
	onbutton: PropTypes.func,
	linkable: PropTypes.func,
	pager: PropTypes.object,
	className: PropTypes.string,
	selectable: PropTypes.bool,
	explode: PropTypes.bool,
};
export default Table;
