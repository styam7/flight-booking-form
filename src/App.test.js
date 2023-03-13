import { render as rtlRender, screen } from '@testing-library/react';
import SearchBar from './components/SearchBar';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const render = component => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>
)

test("button should be rendered", () => {
  render(<SearchBar />);
  const buttonEl = screen.getByTestId("search-button");
  expect(buttonEl).toBeInTheDocument();
});
