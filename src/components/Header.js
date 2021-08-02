import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      search: false,
      title: '',
    }
  }
componentDidMount() {
  const { location } = this.props;
  const pagesTitles  = {
    '/perfil': () => this.setState({
      search: false,
      title: 'Perfil'
    }),
    '/comidas': () => this.setState({
      search: true,
      title: 'Comidas'
    }),
    
    '/bebidas': () => this.setState({
      search: true,
      title: 'Bebidas',
    }),
    '/explorar': () => this.setState({
      search: false,
      title: 'Explorar',
    }),
    '/explorar/comidas/ingredientes': () => this.setState({
      search: false,
      title: 'Explorar Ingredientes',
    }),
    '/explorar/bebidas/ingredientes': () => this.setState({
      search: false,
      title: 'Explorar Ingredientes',
    }),
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
  }
  pagesTitles[location.pathname]();
}
  render() {
    // const { match } = this.props;
    
    return (
      <header>
        <Link to="/perfil">
          <button type="button">
            <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h1 data-testid="page-title">{ this.state.title }</h1>
        { this.state.search 
        ? <button
          onClick={ () => <SearchBar /> }
          type="button"
        >
          <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
        </button> : ''}
      </header>
    );
  }
}

export default withRouter(Header);
