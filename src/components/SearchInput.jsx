import React, { Component } from 'react';
import * as api from '../services/API';

class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      option: 'ingredient',
      API: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      option: value,
    });
  }

  handleInputChange({ target }) {
    const { value } = target;
    this.setState({
      searchInput: value,
    });
  }

  handleSearchClick() {
    const { searchInput, option } = this.state;
    this.fetchAPISearchBar(searchInput, option);
  }

  async fetchAPISearchBar(searchInput, option) {
    const { title } = this.props;
    let getAPI;
    if (title === 'Comidas') {
      getAPI = await api.fetchAPISearchBarComidas(searchInput, option);
    }
    if (title === 'Bebidas') {
      getAPI = await api.fetchAPISearchBarBebidas(searchInput, option);
    }
    this.setState({
      API: getAPI,
    });
    console.log(getAPI);
  }

  render() {
    return (
      <main>
        <input
          data-testid="search-input"
          name="search-input"
          type="text"
          placeholder="Digite um termo de busca..."
          onChange={ this.handleInputChange }
        />
        <label htmlFor="ingredient-search-radio">
          Ingrediente
          <input
            data-testid="ingredient-search-radio"
            type="radio"
            name="search-radio"
            id="ingredient-search-radio"
            value="ingredient"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="name-search-radio">
          Nome
          <input
            data-testid="name-search-radio"
            type="radio"
            name="search-radio"
            id="name-search-radio"
            value="name"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="first-letter-search-radio">
          Primeira letra
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            name="search-radio"
            id="first-letter-search-radio"
            value="firstLetter"
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="exec-search-btn"
          type="button"
          onClick={ () => this.handleSearchClick() }
        >
          Buscar
        </button>
      </main>
    );
  }
}

export default SearchInput;
