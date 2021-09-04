import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';

import Home from '../pages/Home';

const store = createStore(rootReducer);

it('renders correctly', () => {
  const home = renderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>,
    )
    .toJSON();
  expect(home).toMatchSnapshot();
});

it('renders banner', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const searchIcon = screen.getByRole('img');
  expect(searchIcon).toBeInTheDocument();
});

it('renders banner', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const searchBar = screen.getByRole('textbox');
  expect(searchBar).toBeInTheDocument();
});

it('renders banner', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const mealSection = screen.getByRole('heading');
  expect(mealSection).toBeInTheDocument();
});
