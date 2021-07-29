import React, { Component } from 'react';
import rockGlass from '../images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  render() {
    return (
      <div className="meals">
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
      </div>
    );
  }
}

export default Home;
