import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      search: false,
      title: '',
      showInput: false,
    };
    this.renderSearchBar = this.renderSearchBar.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    const exploreIngredients = () => {
      this.setState({
        search: false,
        title: 'Explorar Ingredientes',
      });
    };
    const pagesTitles = {
      '/perfil': () => this.setState({
        search: false,
        title: 'Perfil',
      }),
      '/comidas': () => this.setState({
        search: true,
        title: 'Comidas',
      }),

      '/bebidas': () => this.setState({
        search: true,
        title: 'Bebidas',
      }),
      '/explorar': () => this.setState({
        search: false,
        title: 'Explorar',
      }),
      '/explorar/comidas/ingredientes': () => exploreIngredients(),
      '/explorar/bebidas/ingredientes': () => exploreIngredients(),
      '/explorar/comidas/area': () => this.setState({
        search: true,
        title: 'Explorar Origem',
      }),
      '/receitas-feitas': () => this.setState({
        search: false,
        title: 'Receitas Feitas',
      }),
      '/receitas-favoritas': () => this.setState({
        search: false,
        title: 'Receitas Favoritas',
      }),
      '/explorar/comidas': () => this.setState({
        search: false,
        title: 'Explorar Comidas',
      }),
      '/explorar/bebidas': () => this.setState({
        search: false,
        title: 'Explorar Bebidas',
      }),
    };
    pagesTitles[location.pathname]();
  }

  renderSearchButton() {
    return (
      <button
        onClick={ this.renderSearchBar }
        type="button"
      >
        <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
      </button>
    );
  }

  renderSearchBar() {
    this.setState(({ showInput }) => ({
      showInput: !showInput,
    }));
  }

  render() {
    const { title, search, showInput } = this.state;
    return (
      <header>
        <Link to="/perfil">
          <button type="button">
            <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h1 data-testid="page-title">{ title }</h1>
        { search ? this.renderSearchButton() : '' }
        { showInput ? <SearchBar /> : '' }
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.Object,
}.isRequired;

export default withRouter(Header);
