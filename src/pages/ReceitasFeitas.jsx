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
    this.setState({
      doneList: list,
    });
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
