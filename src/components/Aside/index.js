import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';

const noop = () => {};

class Aside extends Component {
	static wrapContent(nodes) {
		const children = React.Children.toArray(nodes);
		const isPanels = children.every(
			(node) => node.props['data-ts'] === 'Panel',
		);
		const isRootElements = children.find((node) => node.type === 'footer');

		if (isPanels) {
			if (children.length === 1) {
				return nodes;
			}
			return <div data-ts="Panels">{nodes}</div>;
		}
		// return unwrapped if any of the children will only work as roots:
		if (isRootElements) {
			return nodes;
		}
		return <div data-ts="Panel">{nodes}</div>;
	}

	constructor(props) {
		super(props);
		this.onRef = this.onRef.bind(this);
		this.onOpen = this.onOpen.bind(this);
		this.onClose = this.onClose.bind(this);
	}

	onClose(e) {
		this.props.onClose(e);
		return !this.props.isOpen;
	}

	onOpen(e) {
		this.props.onOpen(e);
		return this.props.isOpen;
	}

	onRef(ref) {
		if (!ref) {
			return;
		}

		window.ts.ui.get(ref, (spirit) => {
			spirit.onclose = this.onClose;
			spirit.onclosed = this.props.onClosed;
			spirit.onopen = this.onOpen;
			spirit.onopened = this.props.onOpened;
		});
	}

	render() {
		const { autofocus, isLoading, loadingMessage, title, isOpen, className } =
			this.props;
		const busyMessage = isLoading ? loadingMessage : '';
		const asideProps = {
			'data-ts.autofocus': autofocus,
			'data-ts.title': title,
			'data-ts.open': isOpen,
			'data-ts.busy': busyMessage,
		};

		if (className) {
			asideProps.className = className;
		}

		const content = Aside.wrapContent(this.props.children);
		return (
			<Portal>
				<aside data-ts="Aside" {...asideProps} ref={this.onRef}>
					{content}
				</aside>
			</Portal>
		);
	}
}

Aside.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	autofocus: PropTypes.bool,
	isLoading: PropTypes.bool,
	isOpen: PropTypes.bool,
	loadingMessage: PropTypes.string,
	onClose: PropTypes.func,
	onClosed: PropTypes.func,
	onOpen: PropTypes.func,
	onOpened: PropTypes.func,
	title: PropTypes.string,
	className: PropTypes.string,
};

Aside.defaultProps = {
	children: null,
	autofocus: true,
	isLoading: false,
	isOpen: undefined,
	loadingMessage: 'Loading...',
	onClose: noop,
	onClosed: noop,
	onOpen: noop,
	onOpened: noop,
	title: 'Aside',
	className: '',
};

export default Aside;
