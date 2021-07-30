import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      searchBar: '',
    }
    this.centralHeader = this.centralHeader.bind(this);
    this.profileButton = this.profileButton.bind(this);
    this.searchButton = this.searchButton.bind(this);
    this.renderProfile = this.renderProfile.bind(this);
    this.showSearch = this.showSearch.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderProfile() {
    return (<Redirect to="/perfil" />);
  }

  showSearch() {
    const { disabled } = this.state;
    if (disabled = true) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  profileButton() {
    return (
      <button
      type="button"
      data-testid="profile-top-btn"
      onClick={ () => this.renderProfile() }
      >
      <img src="./images/profileIcon.svg" alt="profileIcon" />
      </button>
    );
  }

  searchButton() {
    return (
      <button
      type="button"
      data-testids="search-top-btn"
      onClick={ () => this.showSearch() }
      >
      <img src="./images/searchIcon.svg" alt="searchIcon" />
      </button>
    );
  }

  centralHeader() {
    const { disabled, searchBar } = this.state;
    return (
      <>
        <h1 data-testid="page-title" >Cuisine Disgrâce!</h1>
        <input type="text" value={ searchBar }  name="searchBar" disabled={ disabled } />
      </>
    );
  }

  render() {
  return (
    <header>
      { this.profileButton() }
      { this.centralHeader() }
      { this.searchButton() }
    </header>
  );
}
}

export default Header;
