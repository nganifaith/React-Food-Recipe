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
      </Provider>
    )
    .toJSON();
  expect(home).toMatchSnapshot();
});
