import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import classNames from 'classnames';

const noop = () => {};

class Modal extends Component {
	constructor(props) {
		super(props);
		this.onRef = this.onRef.bind(this);
		this.onOpen = this.onOpen.bind(this);
		this.onClose = this.onClose.bind(this);
	}

	componentDidUpdate() {
		this.onRef(this.modalRef);
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
		if (!this.modalRef) {
			this.modalRef = ref;
		}

		window.ts.ui.get(ref, (spirit) => {
			spirit.onclose = this.onClose;
			spirit.onclosed = this.props.onClosed;
			spirit.onopen = this.onOpen;
			spirit.onopened = this.props.onOpened;
			if (this.props.buttons) {
				spirit.buttons(this.props.buttons);
			}
		});
	}

	render() {
		const modalProps = {
			'data-ts.title': this.props.title,
			'data-ts.open': this.props.isOpen,
		};
		const dialogClass = classNames({
			'ts-micro-modal': this.props.isMicroSize,
		});
		return (
			<Portal>
				<dialog
					data-ts="Modal"
					{...modalProps}
					ref={this.onRef}
					className={dialogClass}
				>
					<div data-ts="Panel">{this.props.children}</div>
				</dialog>
			</Portal>
		);
	}
}

Modal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
	onClosed: PropTypes.func,
	onOpen: PropTypes.func,
	onOpened: PropTypes.func,
	title: PropTypes.string,
	buttons: PropTypes.arrayOf(PropTypes.object),
	isMicroSize: PropTypes.bool,
};

Modal.defaultProps = {
	children: null,
	isOpen: undefined,
	onClose: noop,
	onClosed: noop,
	onOpen: noop,
	onOpened: noop,
	title: 'Modal',
	buttons: undefined,
	isMicroSize: false,
};

export default Modal;
