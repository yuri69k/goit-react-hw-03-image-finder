import React, { Component } from "react";
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, ModalWindow, ModalImage, Description } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');


class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscClose);
  }

  handleEscClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImage, tags } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleBackdropClose}>
        <ModalWindow>
          <ModalImage src={largeImage} alt="" />
          <Description>description: {tags}</Description>
        </ModalWindow>
      </Backdrop>,
      modalRoot);
  }
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;