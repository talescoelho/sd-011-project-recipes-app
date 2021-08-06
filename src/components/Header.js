import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true,
    };

    this.withSearch = this.withSearch.bind(this);
    this.withoutSearch = this.withoutSearch.bind(this);
  }

  withSearch() {
    const { pageTitle, history } = this.props;
    const { hidden } = this.state;

    return (
      <header>
        <h1 data-testid="page-title">{pageTitle}</h1>
        <button
          type="button"
          onClick={ () => history.push('/perfil') }
        >
          <img
            type="image"
            data-testid="profile-top-btn"
            src={ profile }
            alt=" Profile Icon"
          />
        </button>
        &nbsp;  &nbsp;  &nbsp;
        <button
          type="button"
          onClick={ () => (hidden
            ? this.setState({ hidden: false })
            : this.setState({ hidden: true })) }
        >
          <img
            type="image"
            data-testid="search-top-btn"
            src={ search }
            alt=" Search Icon"
          />
        </button>
       &nbsp;  &nbsp;  &nbsp;
        {
          !hidden
        && (
          <form>
            <fieldset>
              <legend>Filtro de busca</legend>
              <br />
              <input
                data-testid="search-input"
                type="text"
                placeholder="Buscar Receita"
              />
                &nbsp;  &nbsp;
              <label htmlFor="ingredient">
                <input
                  data-testid="ingredient-search-radio"
                  type="radio"
                  id="ingredient"
                  name="filter"
                />
                &nbsp;
                Ingredientes
              </label>
            &nbsp;
              <label htmlFor="name">
                <input
                  data-testid="name-search-radio"
                  type="radio"
                  id="name"
                  name="filter"
                />
                &nbsp;
                Nome
              </label>
            &nbsp;
              <label htmlFor="first-letter">
                <input
                  data-testid="first-letter-search-radio"
                  type="radio"
                  id="first-letter"
                  name="filter"
                />
                &nbsp;
                Primeira letra
              </label>
            &nbsp; &nbsp;
              <button
                data-testid="exec-search-btn"
                type="button"
              >
                Buscar
              </button>
              <br />
              <br />
            </fieldset>
          </form>)
        }
        <br />
      </header>
    );
  }

  withoutSearch() {
    const { pageTitle } = this.props;
    return (
      <header>
        <h1 data-testid="page-title">{ pageTitle }</h1>
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profile }
          alt=" Profile Icon"
        />
      </header>
    );
  }

  render() {
    const { withSearch } = this.props;
    return (
      <div>
        {withSearch ? this.withSearch() : this.withoutSearch() }
      </div>
    );
  }
}

Header.propTypes = {
  withSearch: PropTypes.bool,
  pageTitle: PropTypes.string,
}.isRequired;

export default withRouter(Header);
