import { render, screen } from "@testing-library/react";
import Home from "./Home";
import store, { persistor } from "../../apps/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { MemoryRouter } from "react-router-dom";
const Wrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MemoryRouter initialEntries={["/home"]}>
          <Home />
        </MemoryRouter>
      </PersistGate>
    </Provider>
  );
};
test("component have Image avatar", () => {
  render(<Wrapper />);

  const img = screen.getByAltText(/avatar/);

  expect(img).toBeInTheDocument();
});
test("component have text incroduction line 1", () => {
  const { getByText } = render(<Wrapper />);

  const text = getByText(/Hi, My name is/);

  expect(text).toBeInTheDocument();
});
test("component have text incroduction line 2", () => {
  const { getByText } = render(<Wrapper />);

  const txt = getByText(/Anne Sullivan/);

  expect(txt).toBeInTheDocument();
});
test("component have text incroduction line 3", () => {
  const { getByText } = render(<Wrapper />);

  const txt = getByText(/I build things for the web/);

  expect(txt).toBeInTheDocument();
});
test("component have click button", () => {
  const { getByTestId } = render(<Wrapper />);

  const button = getByTestId("button");
  button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
});

test("component have button", () => {
  const { getByTestId } = render(<Wrapper />);

  const button = getByTestId("button");
  expect(button).toBeInTheDocument("Get In Touch");
});
