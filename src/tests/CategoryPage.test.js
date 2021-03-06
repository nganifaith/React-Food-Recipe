import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';

import CategoryPage from '../pages/CategoryPage';

const store = createStore(rootReducer);

it('renders correctly', () => {
  const home = renderer
    .create(
      <Provider store={store}>
        <CategoryPage />
      </Provider>,
    )
    .toJSON();
  expect(home).toMatchSnapshot();
});

it('renders banner', () => {
  render(
    <Provider store={store}>
      <CategoryPage />
    </Provider>,
  );
  const mealTitle = screen.getByRole('heading');
  expect(mealTitle).toBeInTheDocument();
});
