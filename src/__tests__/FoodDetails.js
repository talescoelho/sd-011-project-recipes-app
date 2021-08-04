import React from 'react';
import { createMemoryHistory } from 'history';
import { waitFor } from '@testing-library/dom';
import render from '../helpers/renderWithRouterAndStore';
import { FoodDetails } from '../pages';

describe('A pagina de detalhes de comida', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch');
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([{ strMeal: 'doideira' }]),
    });

    const path = '/comidas/:id';
    const history = createMemoryHistory({ initialEntries: ['/comidas/52873'] });
    render(<FoodDetails />, { history, path });
  });

  it('Faz uma requisição à api com o parâmetro correto', async () => {
    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52873'));
  });
});
