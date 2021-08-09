import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { executeFoodSearch, updateQuery, executeDrinkSearch, updateSelectedFilter } from '../redux/actions/searchBarActions';
import { foodListSuccess } from '../redux/actions/foodActions';
import { drinkListSuccess } from '../redux/actions/drinkActions';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      food: false,
    }
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.checkResults = this.checkResults.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    this.setState({
      food: history.location.pathname.includes('comidas')
    });
  }

  checkResults() {
    const { searchResults, history, saveFoodList, saveDrinkList } = this.props;
    const { food } = this.state;
    if(searchResults === null){
      console.log(searchResults);
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      return;
    } else if (searchResults.length === 1) {
      (food)? history.push(`/comidas/${searchResults[0].idMeal}`) 
      : history.push(`/bebidas/${searchResults[0].idDrink}`);
      return;
    }
    (food) ? saveFoodList(searchResults)
    : saveDrinkList(searchResults);
  }
  

  async handleSearchClick() { 
    const { query, selectedFilter, executeSearchFoodAction, executeSearchDrinkAction } = this.props;
    const { food } = this.state;
    if(selectedFilter === 'firstLetter' && query.length !== 1){
      alert('Sua busca deve conter somente 1 (um) caracter');
      return;
    }
    (food) ? await executeSearchFoodAction(query, selectedFilter)
    : await executeSearchDrinkAction(query, selectedFilter);
    this.checkResults();
  }

  render() {
    const { queryAction, selectedFilterAction, query, history } = this.props;
    console.log(history.location.pathname.includes('comidas'));
    return (
      <div>
        <input
          type="text"
          data-testid="search-input"
          placeholder="Faça sua pequisa"
          value={ query }
          onChange={({target})=> queryAction(target.value) }
        />
        <label htmlFor="search-ingredient">
          Ingrediente:
          <input
            name="filter"
            id="search-ingredient"
            value="ingredient"
            type="radio"
            data-testid="ingredient-search-radio"
            onChange={()=> selectedFilterAction("ingredient")}
          />
        </label>
        <label htmlFor="search-nome">
          Nome:
          <input
            name="filter"
            id="search-nome"
            value="name"
            type="radio"
            data-testid="name-search-radio"
            onChange={()=> selectedFilterAction("name")}
          />
        </label>
        <label htmlFor="search-first-letter">
          Primeira Letra:
          <input
            name="filter"
            id="search-first-letter"
            value="firstLetter"
            type="radio"
            data-testid="first-letter-search-radio"
            onChange={()=> selectedFilterAction("firstLetter")}
          />
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => this.handleSearchClick() }
        >
          Buscar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  query: state.searchBarReducer.query,
  selectedFilter: state.searchBarReducer.selectedFilter,
  searchResults: state.searchBarReducer.searchResults,
});

const mapDispatchToProps = (dispatch) => ({
  queryAction: (query) => dispatch(updateQuery(query)),
  selectedFilterAction: (filter) => dispatch(updateSelectedFilter(filter)),
  executeSearchFoodAction: (query, filter) => dispatch(executeFoodSearch(query, filter)),
  executeSearchDrinkAction: (query, filter) => dispatch(executeDrinkSearch(query, filter)),
  saveFoodList: (results) => dispatch(foodListSuccess(results)),
  saveDrinkList: (results) => dispatch(drinkListSuccess(results)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar));
