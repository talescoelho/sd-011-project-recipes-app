import React, { Component } from 'react';
import Header from '../components/Header';

class Comidas extends Component {
  constructor() {
    super();
    this.state = {
      meals: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    this.setState({
      meals: data,
    });
  }

  render() {
    const { meals } = this.state;
    console.log(meals);
    return (
      <main>
        Comidas
        <Header />
      </main>
    );
  }
}

export default Comidas;
