import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Login from './pages/Login';
import userEvent from '@testing-library/user-event';
import App from './App';
const fetchMock = require('../cypress/mocks/fetch');
const oneMeal = require('../cypress/mocks/oneMeal');
const oneDrink = require('../cypress/mocks/oneDrink');

afterEach(() => jest.clearAllMocks());

describe('Testando o footer', () => {
  it('Verifica se o footer está na página de comidas', () => {
    const { history, getByTestId } = renderWithRouter(<App />);
    history.push('/comidas');
    const footer = getByTestId('footer');
    expect(footer).toBeInTheDocument();
  })
  it('Verifica se os links do footer funcionam', () => {
    const { history, getByTestId } = renderWithRouter(<App />);
    history.push('/comidas');
    const drinkBtn = getByTestId('drinks-bottom-btn');
    expect(drinkBtn).toBeInTheDocument();
    fireEvent.click(drinkBtn)
    const drinkPathname = history.location.pathname;
    expect(drinkPathname).toBe('/bebidas');
    const footer = getByTestId('footer');
    expect(footer).toBeInTheDocument();
    const exploreBtn = getByTestId('explore-bottom-btn');
    expect(exploreBtn).toBeInTheDocument();
    fireEvent.click(exploreBtn)
    const explorePathname = history.location.pathname;
    expect(explorePathname).toBe('/explorar');
    const foodBtn = getByTestId('food-bottom-btn');
    expect(foodBtn).toBeInTheDocument();
    fireEvent.click(foodBtn)
    const foodPathname = history.location.pathname;
    expect(foodPathname).toBe('/comidas');
  })
})
/* test('Farewell, front-end', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TRYBE/i);
  expect(linkElement).toBeInTheDocument();
}); */

/* Sobre o getByPlaceholderText: https://testing-library.com/docs/queries/byplaceholdertext/ 
e toHaveValue: https://github.com/testing-library/jest-dom#tohavevalue
e toBeDisabled: https://github.com/testing-library/jest-dom#tobedisabled
*/

describe('Teste para verificar a tela de Login', () => {
  it('Verifica se existe um input de email', () => {
    const { getByPlaceholderText } = renderWithRouter(<Login />);
    const inputEmail = getByPlaceholderText(/email/i);
    expect(inputEmail).toBeInTheDocument();
  });

  it('Verifica se existe um input de senha', () => {
    const { getByPlaceholderText } = renderWithRouter(<Login />);
    const inputPassword = getByPlaceholderText(/senha/i);
    expect(inputPassword).toBeInTheDocument();
  });

  it('Verifica se existe um botão "Entrar"', () => {
    const { getByRole } = renderWithRouter(<Login />);
    const buttonLogin = getByRole('button', { name: /entrar/i });
    expect(buttonLogin).toBeInTheDocument();
  });

  it('Verifica se o botão permanece desativado com solicitação inválida', () => {
    const { getByPlaceholderText, getByRole } = renderWithRouter(<Login />);
    const inputEmail = getByPlaceholderText(/email/i);
    userEvent.type(inputEmail, 'alguem');
    expect(inputEmail).toHaveValue('alguem');

    const inputPassword = getByPlaceholderText(/senha/i);
    userEvent.type(inputPassword, '123456');
    expect(inputPassword).toHaveValue('123456');

    const buttonLogin = getByRole('button', { name: /entrar/i });
    expect(buttonLogin).toBeDisabled();
  });

  it('Verifica se o botão é ativado após validação de email e password', () => {
    const { getByPlaceholderText, getByRole } = renderWithRouter(<Login />);
    const inputEmail = getByPlaceholderText(/email/i);
    userEvent.type(inputEmail, 'alguem@email.com');
    expect(inputEmail).toHaveValue('alguem@email.com');

    const inputPassword = getByPlaceholderText(/senha/i);
    userEvent.type(inputPassword, '1234567');
    expect(inputPassword).toHaveValue('1234567');

    const buttonLogin = getByRole('button', { name: /entrar/i });
    expect(buttonLogin).not.toBeDisabled();

    fireEvent.click(buttonLogin);
    const user = JSON.parse(localStorage.getItem('user'));
    const mockUser = {
      email: 'alguem@email.com',
    }
    expect(user).toEqual(mockUser);
    const cocktailsToken = JSON.parse(localStorage.getItem('cocktailsToken'))
    expect(cocktailsToken).toBe(1);
    const mealsToken = JSON.parse(localStorage.getItem('cocktailsToken'))
    expect(mealsToken).toBe(1);
  });
});

describe('Testando o SearchBar', () => {
  it('Verifica se o SearchBar está na página de comidas após ser acionado pelo Header', () => {
    const { history, getByTestId } = renderWithRouter(<App />);
    history.push('/comidas');
    const btnHeader = getByTestId('search-top-btn');
    expect(btnHeader).toBeInTheDocument();
    userEvent.click(btnHeader);
    const inputFood = getByTestId('search-input');
    expect(inputFood).toBeInTheDocument();
    const ingredientRadio = getByTestId('ingredient-search-radio');
    expect(ingredientRadio).toBeInTheDocument();
    const firstletterRadio = getByTestId('first-letter-search-radio');
    expect(firstletterRadio).toBeInTheDocument();
  })
  it('Verifica se o botão de busca do SearchBar funciona', () => {
    const { history, getByTestId } = renderWithRouter(<App />);
    history.push('/comidas');
    const btnHeader = getByTestId('search-top-btn');
    expect(btnHeader).toBeInTheDocument();
    userEvent.click(btnHeader);
    const buttonSearch = getByTestId('exec-search-btn');
    expect(buttonSearch).toBeInTheDocument();
    userEvent.click(buttonSearch);
  })
})

describe('Testando o Header', () => {
  it('Verifica se existe um botão no componente Header', () => {
    const { history, getByTestId } = renderWithRouter(<App />);
    history.push('/comidas');
    const button = getByTestId('search-top-btn');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    fireEvent.click(button);
    expect(searchInput).not.toBeInTheDocument();
  });

  it('Verifica se o Header aparece na página de comidas', () => {
    const { history, getByTestId } = renderWithRouter(<App />);
    history.push('/comidas');
    const profileImg = getByTestId('profile-top-btn');
    expect(profileImg).toBeInTheDocument();

    const searchBtn = getByTestId('search-top-btn');
    expect(searchBtn).toBeInTheDocument();
  })

  it('Verifica se o Header aparece na página de bebidas', () => {
    const { history, getByTestId } = renderWithRouter(<App />);
    history.push('/bebidas');
    const profileImg = getByTestId('profile-top-btn');
    expect(profileImg).toBeInTheDocument();

    const searchBtn = getByTestId('search-top-btn');
    expect(searchBtn).toBeInTheDocument();
  })

  it('Redireciona o usuário para a tela de perfil ao clicar no botão de perfil', () => {
    const { history, getByTestId } = renderWithRouter(<App />);
    history.push('/perfil');
    const btnProfile = getByTestId('page-title')
    expect(btnProfile).toBeInTheDocument()
    fireEvent.click(btnProfile);
  })
});

describe('Testando tela principal de receitas', () => {
  it('Verifica se aparecem 12 cards na página de comidas', async () => {
    const { history, findByTestId } = renderWithRouter(<App />);
    history.push('/comidas');
    let numberOfCards = 0;
    for (let index = 0; index < 12; index += 1) {
      const card = await findByTestId(`${index}-recipe-card`);
      expect(card).toBeInTheDocument();
      numberOfCards += 1;
    }
    expect(numberOfCards).toBe(12);
  });

  it('Verifica se aparecem 12 cards na página de comidas', async () => {
    const { history, findByTestId } = renderWithRouter(<App />);
    history.push('/bebidas');
    let numberOfCards = 0;
    for (let index = 0; index < 12; index += 1) {
      const card = await findByTestId(`${index}-recipe-card`);
      expect(card).toBeInTheDocument();
      numberOfCards += 1;
    }
    expect(numberOfCards).toBe(12);
  });
});

describe('Testando o CategoryBtn', () => {
  it('Verifica se o CategoryBtn está na página de comidas', () => {
    const { history, getByText } = renderWithRouter(<App />);
    history.push('/comidas');
    const btnAllFood = getByText(/All/i);
    expect(btnAllFood).toBeInTheDocument();

    // const btnBeef = getByText(/Beef/i);
    // expect(btnBeef).toBeInTheDocument();

    // const btnBreak = getByText(/Breakfast/i);
    // expect(btnBreak).toBeInTheDocument();

    // const btnChicken = getByText(/Chicken/i);
    // expect(btnChicken).toBeInTheDocument();

    // const btnDessert = getByText(/Dessert/i);
    // expect(btnDessert).toBeInTheDocument();

    // const btnGoat = getByText(/Goat/i);
    // expect(btnGoat).toBeInTheDocument();
  })

  it('Verifica se o CategoryBtn está na página de bebidas', () => {
    const { history, getByText } = renderWithRouter(<App />);
    history.push('/bebidas');
    const btnAll = getByText(/All/i);
    expect(btnAll).toBeInTheDocument();

    // const btnOrdDrink = getByText(/Ordinary Drink/i);
    // expect(btnOrdDrink).toBeInTheDocument();

    // const btnCocktail = getByText(/Cocktail/i);
    // expect(btnCocktail).toBeInTheDocument();

    // const btnMilk = getByText(/Milk/i / /Float/i / /Shake/i);
    // expect(btnMilk).toBeInTheDocument();

    // const btnOther = getByText(/Other/i / /Unknown/i);
    // expect(btnOther).toBeInTheDocument();

    // const btnCocoa = getByText(/Cocoa/i);
    // expect(btnCocoa).toBeInTheDocument();
  })
})

describe('Testando a página de detalhes de comida', () => {
  it('Verifica se a página de detalhes renderiza o título corretamente', async () => {
    const { history, findByText } = renderWithRouter(<App />);
    history.push('/comidas/52771');
    const title = oneMeal.meals[0].strMeal;
    const titleElement = await findByText(title);
    expect(titleElement).toBeInTheDocument();
  });
  it('Verifica se a página de detalhes renderiza a categoria corretamente', async () => {
    const { history, findByText } = renderWithRouter(<App />);
    history.push('/comidas/52771');
    const category = oneMeal.meals[0].strCategory;
    const categoryElement = await findByText(category);
    expect(categoryElement).toBeInTheDocument();
  });
  it('Verifica se a página de detalhes renderiza um ingrediente corretamente', async () => {
    const { history, findByText } = renderWithRouter(<App />);
    history.push('/comidas/52771');
    const ingredient = `${oneMeal.meals[0].strIngredient1} - ${oneMeal.meals[0].strMeasure1}`;
    const ingredientElement = await findByText(ingredient);
    expect(ingredientElement).toBeInTheDocument();
  });
  it('Verifica se a página de detalhes renderiza a imagem corretamente', async () => {
    const { history, findByAltText } = renderWithRouter(<App />);
    history.push('/comidas/52771');
    const image = oneMeal.meals[0].strMealThumb;
    const imageElement = await findByAltText('meal');
    expect(imageElement.src).toBe(image);
  });
  it('Verifica se a página de detalhes renderiza o botão de compartilhar', async () => {
    const { history, findByTestId } = renderWithRouter(<App />);
    history.push('/comidas/52771');
    const shareBtn = await findByTestId('share-btn');
    expect(shareBtn).toBeInTheDocument();
  });
  it('Verifica se a página de detalhes renderiza o botão de favoritar e ele funciona', async () => {
    const { history, findByTestId } = renderWithRouter(<App />);
    history.push('/comidas/52771');
    const favoriteBtn = await findByTestId('favorite-btn');
    expect(favoriteBtn).toBeInTheDocument();
    expect(favoriteBtn.src).toBe('http://localhost/whiteHeartIcon.svg');
    fireEvent.click(favoriteBtn);
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const expectedFavoriteRecipes = [
      {
        id: '52771',
        type: 'comida',
        area: 'Italian',
        category: 'Vegetarian',
        alcoholicOrNot: '',
        name: 'Spicy Arrabiata Penne',
        image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      },
    ];
    expect(favoriteRecipes).toEqual(expectedFavoriteRecipes);
    // fireEvent.click(favoriteBtn);
    // const favoriteRecipesAfter = JSON.parse(localStorage.getItem('favoriteRecipes'));
    // expect(favoriteRecipesAfter).toEqual([]);
  });
})

describe('Testando a página de detalhes de bebida', () => {
  it('Verifica se a página de detalhes renderiza o título corretamente', async () => {
    const { history, findByText } = renderWithRouter(<App />);
    history.push('/bebidas/178319');
    const title = oneDrink.drinks[0].strDrink;
    const titleElement = await findByText(title);
    expect(titleElement).toBeInTheDocument();
  });
  it('Verifica se a página de detalhes renderiza se é alcoólico ou não corretamente', async () => {
    const { history, findByText } = renderWithRouter(<App />);
    history.push('/bebidas/178319');
    const alcoholic = oneDrink.drinks[0].strAlcoholic;
    const alcoholicElement = await findByText(alcoholic);
    expect(alcoholicElement).toBeInTheDocument();
  });
  it('Verifica se a página de detalhes renderiza um ingrediente corretamente', async () => {
    const { history, findByText } = renderWithRouter(<App />);
    history.push('/bebidas/178319');
    const ingredient = `${oneDrink.drinks[0].strIngredient1} - ${oneDrink.drinks[0].strMeasure1}`;
    const ingredientElement = await findByText(ingredient);
    expect(ingredientElement).toBeInTheDocument();
  });
  it('Verifica se a página de detalhes renderiza a imagem corretamente', async () => {
    const { history, findByAltText } = renderWithRouter(<App />);
    history.push('/bebidas/178319');
    const image = oneDrink.drinks[0].strDrinkThumb;
    const imageElement = await findByAltText('drink');
    expect(imageElement.src).toBe(image);
  });
  it('Verifica se a página de detalhes renderiza o botão de compartilhar', async () => {
    const { history, findByTestId } = renderWithRouter(<App />);
    history.push('/bebidas/178319');
    const shareBtn = await findByTestId('share-btn');
    expect(shareBtn).toBeInTheDocument();
  });
  it('Verifica se a página de detalhes renderiza o botão de favoritar e ele funciona', async () => {
    const clearStorage = [];
    localStorage.setItem('favoriteRecipes', JSON.stringify(clearStorage));
    const { history, findByTestId } = renderWithRouter(<App />);
    history.push('/bebidas/178319');
    const favoriteBtn = await findByTestId('favorite-btn');
    expect(favoriteBtn).toBeInTheDocument();
    expect(favoriteBtn.src).toBe('http://localhost/whiteHeartIcon.svg');
    fireEvent.click(favoriteBtn);
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const expectedFavoriteRecipes = [
      {
        id: '178319',
        type: 'bebida',
        area: '',
        category: 'Cocktail',
        alcoholicOrNot:  'Alcoholic',
        name: 'Aquamarine',
        image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      },
    ];
    expect(favoriteRecipes).toEqual(expectedFavoriteRecipes);
    // fireEvent.click(favoriteBtn);
    // const favoriteRecipesAfter = JSON.parse(localStorage.getItem('favoriteRecipes'));
    // expect(favoriteRecipesAfter).toEqual([]);
  });
})

describe('Testando a página de receitas favoritas', () => {
  it('Renderiza os elementos da página corretamente', () => {
    const { history, getByText } = renderWithRouter(<App />);
    history.push('/receitas-favoritas');
    const title = getByText('Receitas Favoritas');
    expect(title).toBeInTheDocument();
    const allBtn = getByText('All')
    expect(allBtn).toBeInTheDocument();
    const foodBtn = getByText('Food')
    expect(foodBtn).toBeInTheDocument();
    const drinkBtn = getByText('Drink')
    expect(drinkBtn).toBeInTheDocument();
  });
})

describe('Testando a página de receitas feitas', () => {
  it('Renderiza os elementos da página corretamente', () => {
    const { history, getByText } = renderWithRouter(<App />);
    history.push('/receitas-feitas');
    const title = getByText('Receitas Feitas');
    expect(title).toBeInTheDocument();
    const allBtn = getByText('All')
    expect(allBtn).toBeInTheDocument();
    const foodBtn = getByText('Food')
    expect(foodBtn).toBeInTheDocument();
    const drinkBtn = getByText('Drink')
    expect(drinkBtn).toBeInTheDocument();
  });
})