import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import * as api from '../services/API';

class Bebidas extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Bebidas',
      drinks: [],
      isFetchDone: false,
      lupa: 'ligada',
      modus: 'list',
    };
    this.switchModus = this.switchModus.bind(this);
    this.filterByCategory = this.filterByCategory.bind(this);
    this.listAll = this.listAll.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const getAPI = await api.fetchAPIDrinkList();
    this.setState({
      drinks: getAPI,
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
  }

  filterByCategory(event) {
    const { value } = event.target;
    this.fetchAPIByCategory(value);
  }

  async fetchAPIByCategory(category) {
    const getAPI = await api.fetchAPIByDrinkCategory(category);
    this.setState({
      drinks: getAPI,
    });
  }

  render() {
    const { title, drinks, isFetchDone, lupa, modus } = this.state;
    const elements = 12;
    return (
      <div>
        Bebidas
        <Header
          title={ title }
          lupa={ lupa }
          switchModus={ this.switchModus }
          modus={ modus }
        />
        <Categories
          title={ title }
          filterByCategory={ this.filterByCategory }
          listAll={ this.listAll }
        />
        { isFetchDone === false ? <div>Carregando...</div> : (
          <div>
            { modus === 'search' ? <div>...</div> : (
              <div>
                { drinks.slice(0, elements).map((recipe, index) => (
                  <div key={ index } data-testid={ `${index}-recipe-card` }>
                    <Link to={ `/bebidas/${recipe.idDrink}` }>
                      <img
                        className="photo"
                        src={ recipe.strDrinkThumb }
                        data-testid={ `${index}-card-img` }
                        alt="Imagem da receita"
                      />
                      <p data-testid={ `${index}-card-name` }>{recipe.strDrink}</p>
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

export default Bebidas;
