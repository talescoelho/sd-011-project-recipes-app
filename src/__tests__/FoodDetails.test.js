import React from 'react';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import { screen, fireEvent } from '@testing-library/dom';
import { renderWithRouterAndStore as render, mockFetch } from '../helpers';
import { FoodDetails } from '../pages';
import { beefAndOysterPie } from '../helpers/mocks';

const recipe = beefAndOysterPie.meals[0];

afterEach(() => {
  localStorage.clear();
});

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
    it('Botão de iniciar Receita', () => {
      expect(screen.getByText('Iniciar Receita')).toBeInTheDocument();
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

  // describe('Ao clicar no botão de compartilhar', () => {
    // it('o link é copiado para o clipboard', async () => {
    //   await act(async () => {
    //     fireEvent.click(screen.getByTitle('share the recipe'));
    //   });
    //   const clipBoardContent = await navigator.clipboard.readText();
    //   console.log(clipBoardContent);
    //   expect(clipBoardContent).toBe('https://localhost.3000/comidas/52878');
    // });

  //   it('uma mensagem de confirmação aparece na tela', async () => {
  //     await act(async () => {
  //       fireEvent.click(screen.getByTitle('share the recipe'));
  //     });

  //     expect(screen.findByText('Link copiado!')).toBeInTheDocument();
  //   })
  // });
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
    expect(screen.queryByText('Iniciar Receita')).not.toBeInTheDocument();
  })
});

describe('Caso a receita esteja em progresso', () => {
  beforeEach(async () => {
    jest.spyOn(global, 'fetch');
    global.fetch = mockFetch;

    const inProgressRecipes = {
      meals: {
        52878: [],
      },
    };

    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));

    const path = '/comidas/:id';
    const history = createMemoryHistory({ initialEntries: ['/comidas/52878'] });
    await act(async () => {
      render(<FoodDetails />, { history, path });
    });
  });

  it('o botão de Iniciar Receita se torna Continuar Receita', async () => {
    expect(screen.queryByText('Iniciar Receita')).not.toBeInTheDocument();
    expect(screen.queryByText('Continuar Receita')).toBeInTheDocument();
  })
});

describe('O icone de coração', () => {
  it('não vem preenchido caso a receita não seja favorita', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch = mockFetch;


    const path = '/comidas/:id';
    const history = createMemoryHistory({ initialEntries: ['/comidas/52878'] });
    await act(async () => {
      render(<FoodDetails />, { history, path });
    });

    const heartIcon = screen.getByAltText('icon representing favorite');
    expect(heartIcon.src).toMatch(/whiteheart/i);
  });

  it('vem preenchido caso a receita seja favorita', async () => {
    const favoriteRecipes = [{
      "id": "52878",
      "type": "comida",
      "area": "Brittish",
      "category": "Beef",
      "alcoholicOrNot": "",
      "name": "Beef and Oyster pie",
      "image": "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
    }];
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));

    jest.spyOn(global, 'fetch');
    global.fetch = mockFetch;

    const path = '/comidas/:id';
    const history = createMemoryHistory({ initialEntries: ['/comidas/52878'] });
    await act(async () => {
      render(<FoodDetails />, { history, path });
    });

    const heartIcon = screen.getByAltText('icon representing favorite');
    expect(heartIcon.src).toMatch(/blackheart/i);
  });

  it('favorita a receita caso ela ainda não seja favorita', async () => {
    const favoriteRecipe = {
      "id": "52878",
      "type": "comida",
      "area": "British",
      "category": "Beef",
      "alcoholicOrNot": "",
      "name": "Beef and Oyster pie",
      "image": "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
    };

    jest.spyOn(global, 'fetch');
    global.fetch = mockFetch;

    const path = '/comidas/:id';
    const history = createMemoryHistory({ initialEntries: ['/comidas/52878'] });
    await act(async () => {
      render(<FoodDetails />, { history, path });
    });

    const favoriteButton = screen.getByTitle('favorite the recipe');
    await act(async () => {
      fireEvent.click(favoriteButton);
    });

    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const foundRecipe = favoriteRecipes.find(({ id }) => id === favoriteRecipe.id);

    expect(foundRecipe).toEqual(favoriteRecipe);
  });
})
