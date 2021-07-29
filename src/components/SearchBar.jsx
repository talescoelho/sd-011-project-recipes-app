import React from 'react';
import '../styles/SearchBar.css';

export default function SearchBar() {
	return (
		<div className="searchBar-container">
			<input type="text" data-testid="search-input" />
			<div className="searchBar-radios">
				<label htmlFor="">
					<input type="radio" name="search-option" data-testid="ingredient-search-radio" />
					Ingrediente
				</label>
				<label htmlFor="">
					<input type="radio" name="search-option" data-testid="name-search-radio" />
					Nome
				</label>
				<label htmlFor="">
					<input type="radio" name="search-option" data-testid="first-letter-search-radio" />
					Primeira Letra
				</label>
			</div>
			<button type="text" data-testid="exec-search-btn" className="searchBar-btn">
				Buscar
			</button>
		</div>
	)
}
