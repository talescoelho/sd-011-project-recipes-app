import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ value }) {
  return (
		<header>
			<button
				data-testid="profile-top-btn"
			>
				<img
					data-testid 
					src={ profileIcon } 
					alt="User" 
				/>
			</button>
			<h1 data-testid="page-title">{ value }</h1>
			<button
				data-testid="search-top-btn"
			><img src={ searchIcon } alt="buscar" /></button>
		</header>
  );
}

export default Header;