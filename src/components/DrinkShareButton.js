import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

class ShareButton extends Component {
  constructor() {
    super();

    this.state = {
      clipboardMessage: false,
    };
  }

  clipBoard() {
    const { id } = this.props;
    copy(`http://localhost:3000/bebidas/${id}`);
    this.setState({
      clipboardMessage: true,
    });
  }

  render() {
    const { clipboardMessage } = this.state;
    return (
      <>
        <p>{ clipboardMessage ? 'Link copiado!' : '' }</p>
        <button
          type="button"
          data-testid="share-btn"
          onClick={ () => this.clipBoard() }
        >
          <img src={ shareIcon } alt="share icon" />
        </button>
      </>
    );
  }
}

ShareButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ShareButton;
