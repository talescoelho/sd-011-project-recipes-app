import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import profilePicture from '../images/profileIcon.svg';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLoading: false,
      inputTextValue: '',
      radioInputValue: '',
    };
    this.handleChangeRadioButtonValue = this.handleChangeRadioButtonValue.bind(this);
    const { inputTextValue, radioInputValue } = this.state;
    console.log(inputTextValue);
    console.log(radioInputValue);
  }

  handleChangeRadioButtonValue({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title } = this.props;
    const { inputLoading } = this.state;

    return (
      <div>
        <Link to="/perfil" className="profilePicture">
          <img data-testid="profile-top-btn" src={ profilePicture } alt="profileIcon" />
        </Link>
        <h1 data-testid="page-title">{ title }</h1>

        <button
          type="button"
          className="searchButton"
          onClick={ () => (!inputLoading ? (this.setState({ inputLoading: true }))
            : (
              this.setState({ inputLoading: false }))) }
        >
          <img data-testid="search-top-btn" src={ searchIcon } alt="searchIcon" />
        </button>
        { inputLoading && (
          <form onSubmit>
            <input
              data-testid="search-input"
              type="text"
              placeholder="Procure Aqui"
              name="inputTextValue"
              onChange={ (e) => this.handleChangeRadioButtonValue(e) }
            />
            <label htmlFor="ingredient-search-radio">
              Ingrediente
              <input
                type="radio"
                id="ingredient-search-radio"
                name="radioInputValue"
                data-testid="ingredient-search-radio"
                value="ingrediente"
                onChange={ (e) => this.handleChangeRadioButtonValue(e) }

              />
            </label>
            <label htmlFor="name-search-radio">
              Nome
              <input
                type="radio"
                id="name-search-radio"
                name="radioInputValue"
                data-testid="name-search-radio"
                value="nome"
                onChange={ (e) => this.handleChangeRadioButtonValue(e) }

              />
            </label>
            <label htmlFor="first-letter-search-radio">
              Primeira letra
              <input
                type="radio"
                id="first-letter-search-radio"
                name="radioInputValue"
                data-testid="first-letter-search-radio"
                value="primeira-letra"
                onChange={ (e) => this.handleChangeRadioButtonValue(e) }

              />
            </label>
            <button type="button" data-testid="exec-search-btn">Submit</button>
          </form>
        )}

      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
