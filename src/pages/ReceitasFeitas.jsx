import React, { Component } from 'react';
import Header from '../components/Header';

class ReceitasFeitas extends Component {
  constructor() {
    super();
    this.state = {
      doneList: [],
    };
    this.getListFromLS = this.getListFromLS.bind(this);
  }

  componentDidMount() {
    this.getListFromLS();
  }

  getListFromLS() {
    const list = JSON.parse(localStorage.getItem('doneRecipes'));
    if (list !== null) {
      this.setState({
        doneList: list,
      });
    }
  }

  render() {
    const title = 'Receitas Feitas';
    const lupa = 'desligada';
    const { doneList } = this.state;
    return (
      <div>
        <Header
          title={ title }
          lupa={ lupa }
        />
        <button
          type="button"
          value="all"
          data-testid="filter-by-all-btn"
        >
          all
        </button>
        <button
          type="button"
          value="comidas"
          data-testid="filter-by-food-btn"
        >
          Comidas
        </button>
        <button
          type="button"
          value="bebidas"
          data-testid="filter-by-drink-btn"
        >
          Bebidas
        </button>
        {doneList.map((obj, index) => (
          <div key={ index }>
            <span>{ obj.id }</span>
          </div>
        ))}
      </div>
    );
  }
}

export default ReceitasFeitas;
