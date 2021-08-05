import React from 'react';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import { screen, waitFor } from '@testing-library/dom';
import { renderWithRouterAndStore as render, mockFetch } from '../helpers';
import { FoodDetails } from '../pages';
import { beefAndOysterPie } from '../helpers/mocks';

const recipe = beefAndOysterPie.meals[0];

describe('A pagina de detalhes de comida', () => {
  beforeEach(async () => {
    jest.spyOn(global, 'fetch');
    global.fetch = mockFetch;

    const path = '/comidas/:id';
    const history = createMemoryHistory({ initialEntries: ['/comidas/52878'] });
    await act(async () => {
      render(<FoodDetails />, { history, path });
    });
  });

  afterEach(() => {
    localStorage.clear();
  })

  it('Faz uma requisição à api com o parâmetro correto', () => {
    expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52878');
  });

  describe('Mostra todas as informações na tela', () => {
    it('Nome', () => {
      expect(screen.getByText(recipe.strMeal)).toBeInTheDocument();
    });
    it('Foto', () => {
      expect(screen.getByAltText(recipe.strMeal)).toBeInTheDocument();
    });
    it('Ingredientes', () => {
      const keys = Object.keys(recipe).filter((key) => /ingredient/i.test(key));
      keys.forEach((key) => {
        if (recipe[key]) {
          expect(screen.getAllByText(recipe[key])[0]).toBeInTheDocument();
        }
      });
    });
    it('Instruções', () => {
      expect(screen.getByTestId('instructions')).toBeInTheDocument();
    });
    it('Video', () => {
      expect(screen.getByTestId('video')).toBeInTheDocument();
    });
    it('Botão de iniciar receita', () => {
      expect(screen.getByText('Iniciar receita')).toBeInTheDocument();
    });
    it('Botão de compartilhar', () => {
      expect(screen.getByTitle('share the recipe')).toBeInTheDocument();
    });
    it('Botão de favoritar', () => {
      expect(screen.getByTitle('favorite the recipe')).toBeInTheDocument();
    });
  });

  describe('Procura recomendações', () => {
    it('chamando a API correta', () => {
      expect(global.fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    });

    it('e mostra 6 resultados', () => {
      const allDrinkCards = screen.getAllByTestId('recomendation-card', { exact: false });
      expect(allDrinkCards.length).toBe(6);
    });
  });
});


describe('Caso a receita já tenha sido feita', () => {
  beforeEach(async () => {
    jest.spyOn(global, 'fetch');
    global.fetch = mockFetch;

    const doneRecipes = [{
      "id": "52878",
      "type": "comida",
      "area": "Italian",
      "category": "Vegetarian",
      "alcoholicOrNot": "",
      "name": "Spicy Arrabiata Penne",
      "image": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      "doneDate": "22/6/2020",
      "tags": ["Pasta", "Curry"]
    }];
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));

    const path = '/comidas/:id';
    const history = createMemoryHistory({ initialEntries: ['/comidas/52878'] });
    await act(async () => {
      render(<FoodDetails />, { history, path });
    });
  });

  it('o botão de Iniciar Receita não aparece', () => {
    expect(screen.queryByText('Iniciar receita')).not.toBeInTheDocument();
  })
});
