import {
  beefAndOysterPie,
  noFilter,
} from './mocks';

const MOCKS = {
  'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52878': beefAndOysterPie,
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=': noFilter,
};

const mockFetch = jest.fn((url) => Promise.resolve({
  json: jest.fn().mockResolvedValue(MOCKS[url]),
}));

export default mockFetch;
