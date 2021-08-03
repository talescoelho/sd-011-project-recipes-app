import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import * as api from '../services/API';

class Comidas extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Comidas',
      meals: [],
      isFetchDone: false,
      lupa: 'ligada',
      modus: 'list',
      filter: false,
      selectedFilter: 'nenhum',
    };
    this.switchModus = this.switchModus.bind(this);
    this.filterByCategory = this.filterByCategory.bind(this);
    this.listAll = this.listAll.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const getAPI = await api.fetchAPIFoodList();
    this.setState({
      meals: getAPI,
      isFetchDone: true,
    });
  }

  switchModus() {
    const { modus } = this.state;
    if (modus === 'list') {
      this.setState({
        modus: 'search',
      });
    } else {
      this.setState({
        modus: 'list',
      });
    }
  }

  listAll() {
    this.fetchAPI();
    this.setState({
      filter: false,
      selectedFilter: 'nenhum',
    });
  }

  filterByCategory(event) {
    const { value } = event.target;
    this.fetchAPIByCategory(value);
  }

  async fetchAPIByCategory(category) {
    const { filter, selectedFilter } = this.state;
    const getAPI = await api.fetchAPIByFoodCategory(category);
    if (filter === false || selectedFilter !== category) {
      this.setState({
        meals: getAPI,
        filter: true,
        selectedFilter: category,
      });
    } else {
      this.listAll();
    }
  }

  render() {
    const { title, meals, isFetchDone, lupa, modus } = this.state;
    const elements = 12;
    return (
      <div>
        <Header
          title={ title }
          lupa={ lupa }
          switchModus={ this.switchModus }
          modus={ modus }
        />
        { isFetchDone === false ? <div>Carregando...</div> : (
          <div>
            { modus === 'search' ? <div>...</div> : (
              <div>
                <Categories
                  title={ title }
                  filterByCategory={ this.filterByCategory }
                  listAll={ this.listAll }
                />
                {meals.slice(0, elements).map((recipe, index) => (
                  <div key={ index } data-testid={ `${index}-recipe-card` }>
                    <Link to={ `/comidas/${recipe.idMeal}` }>
                      <img
                        className="photo"
                        src={ recipe.strMealThumb }
                        data-testid={ `${index}-card-img` }
                        alt="Imagem da receita"
                      />
                      <p data-testid={ `${index}-card-name` }>{recipe.strMeal}</p>
                    </Link>
                  </div>

                ))}
              </div>
            )}
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default Comidas;
