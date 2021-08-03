import mock from './cocktailsSuccess';
// const mock = require('./cocktailsSuccess');

const fetch = Promise.resolve({
  json: () => Promise.resolve(mock.gin),
});

export default fetch;
