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

test("round trip radio button should be rendered", () => {
  render(<SearchBar />);
  const radiobutton1 = screen.getByTestId("round-trip");
  expect(radiobutton1).toBeInTheDocument();
});

test("one-way trip radio button should be rendered", () => {
  render(<SearchBar />);
  const radiobutton2 = screen.getByTestId("one-way");
  expect(radiobutton2).toBeInTheDocument();
});

test("add passenger button should be rendered", () => {
  render(<SearchBar />);
  const addPassenger = screen.getByTestId("add-passenger");
  expect(addPassenger).toBeInTheDocument();
});

test("class section dropdown should be rendered", () => {
  render(<SearchBar />);
  const classDropdown = screen.getByTestId("class-dropdown");
  expect(classDropdown).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<SearchBar />);
  const buttonEl = screen.getByTestId("search-button");
  expect(buttonEl).toBeInTheDocument();
});

