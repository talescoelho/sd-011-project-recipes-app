import React, { useState } from 'react';
import '../styles/SearchBar.css';

export default function SearchBar() {
	const [searchQuery, setSearchQuery] = useState('');
	const [radioValue, setRadioValue] = useState('Ingrediente');

	return (
		<div className="searchBar-container">
			<input
				type="text"
				data-testid="search-input"
				placeholder="Buscar Receita"
				value={searchQuery}
				onChange={({ target }) => setSearchQuery(target.value)}
			/>
			<div className="searchBar-radios">
				<label htmlFor="">
					<input
						type="radio"
						name="search-option"
						data-testid="ingredient-search-radio"
						value="Ingrediente"
						onChange={({ target }) => setRadioValue(target.value)}
					/>
					Ingrediente
				</label>
				<label htmlFor="">
					<input
						type="radio"
						name="search-option"
						data-testid="name-search-radio"
						value="Nome"
						onChange={({ target }) => setRadioValue(target.value)}
					/>
					Nome
				</label>
				<label htmlFor="">
					<input
						type="radio"
						name="search-option"
						data-testid="first-letter-search-radio"
						value="Primeira Letra"
						onChange={({ target }) => setRadioValue(target.value)}
					/>
					Primeira Letra
				</label>
			</div>
			<button type="text" data-testid="exec-search-btn" className="searchBar-btn">
				Buscar
			</button>
		</div>
	)
}
