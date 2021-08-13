import React, { Component } from 'react';
import Header from '../components/Header';

class ReceitasFavoritas extends Component {
  constructor() {
    super();
    this.state = {
      favList: [],
    };
    this.getListFromLS = this.getListFromLS.bind(this);
  }

  componentDidMount() {
    this.getListFromLS();
  }

  getListFromLS() {
    const list = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (list !== null) {
      this.setState({
        favList: list,
      });
    }
  }

  render() {
    const { favList } = this.state;
    const title = 'Receitas Favoritas';
    const lupa = 'desligada';
    return (
      <div>
        <Header
          title={ title }
          lupa={ lupa }
        />
        {favList.map((obj, index) => (
          <div key={ index }>
            <span>{ obj.id }</span>
          </div>
        ))}
      </div>
    );
  }
}

export default ReceitasFavoritas;
