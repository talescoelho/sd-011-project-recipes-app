import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import fetchData from './mocks/fetch';

const mockFetch = () => {
  jest.spyOn(global, 'fetch')
    .mockImplementation((url) => fetchData(url));
};
