import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchHeaderSearch } from '../actions';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true,
      searchInput: '',
      radioValue: '',
    };

    this.withSearch = this.withSearch.bind(this);
    this.withoutSearch = this.withoutSearch.bind(this);
  }

  componentDidUpdate() {
    const { radioValue, searchInput } = this.state;
    console.log('Estado de "Ingrediente radio Button" em Header:');
    console.log(radioValue);
    console.log('Estado de "Ingrediente searchInput" em Header:');
    console.log(searchInput);
  }

  withSearch() {
    const { pageTitle, history } = this.props;
    const { hidden, searchInput } = this.state;

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
                value={searchInput}
                type="text"
                placeholder="Buscar Receita"
                onChange={ ({ target: { value }}) => this.setState({ searchInput: value }) }
              />
                &nbsp;  &nbsp;
              <label htmlFor="ingredient">
                <input
                  data-testid="ingredient-search-radio"
                  value="ingrediente"
                  type="radio"
                  id="ingredient"
                  name="filter"
                  onChange={ ({ target: { value }}) => this.setState({ radioValue: value }) }
                />
                &nbsp;
                Ingrediente
              </label>
            &nbsp;
              <label htmlFor="name">
                <input
                  data-testid="name-search-radio"
                  value="nome"
                  type="radio"
                  id="name"
                  name="filter"
                  onClick={ ({ target: { value }}) => this.setState({ radioValue: value }) }

                />
                &nbsp;
                Nome
              </label>
            &nbsp;
              <label htmlFor="first-letter">
                <input
                  data-testid="first-letter-search-radio"
                  value="primeira-letra"
                  type="radio"
                  id="first-letter"
                  name="filter"
                  onClick={ ({ target: { value }}) => this.setState({ radioValue: value }) }
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

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchHeaderSearch: (type, filter) => dispatch(fetchHeaderSearch(type, filter))
});


Header.propTypes = {
  withSearch: PropTypes.bool,
  pageTitle: PropTypes.string,
  dispatchFetchHeaderSearch: PropTypes.func,
}.isRequired;

const headerWithRouter = withRouter(Header);
export default connect(null, mapDispatchToProps)(headerWithRouter);
// export default connect(null, mapDispatchToProps)(Header);
