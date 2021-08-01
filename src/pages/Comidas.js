import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Comidas extends Component {
  constructor() {
    super();
    this.state = {
      meals: [],
      title: 'Comidas',
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
    const { meals, title } = this.state;
    console.log(meals);
    return (
      <main>
        <Header title={ title } />
        <Footer />
      </main>
    );
  }
}

export default Comidas;
