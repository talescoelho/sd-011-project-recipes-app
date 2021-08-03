import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import searchIcon from '../images/searchIcon.svg';
import profilePicture from '../images/profileIcon.svg';
import fetchReceiveDrink from '../Actions/drink';

class HeaderDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLoading: false,
      inputTextValue: '',
      radioInputValue: '',
    };
    this.handleChangeRadioButtonValue = this.handleChangeRadioButtonValue.bind(this);
    this.submitRequest = this.submitRequest.bind(this);
  }

  handleChangeRadioButtonValue({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  submitRequest(e) {
    const { inputTextValue, radioInputValue } = this.state;
    const { fetchRecipes } = this.props;
    e.preventDefault();
    fetchRecipes(inputTextValue, radioInputValue);
  }

  render() {
    const { title, onClick } = this.props;
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
          <form
            onSubmit={ this.submitRequest }
          >
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
            <button
              type="submit"
              data-testid="exec-search-btn"
              onClick={ () => onClick(false) }
            >
              Submit
            </button>
          </form>
        )}

      </div>
    );
  }
}

HeaderDrink.propTypes = {
  title: PropTypes.string.isRequired,
  fetchRecipes: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: (input, radio) => dispatch(fetchReceiveDrink(input, radio)),
});

export default connect(null, mapDispatchToProps)(HeaderDrink);
