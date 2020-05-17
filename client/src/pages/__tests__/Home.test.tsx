import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { Home } from "../Home";
import configureStore from "redux-mock-store";
import { ExceptionMap } from "antd/lib/result";

const mockStore = configureStore([]);

function renderComponent(state = {}) {
  const intialState = {
    user: {
      state,
    },
  };

  const store = mockStore(intialState);

  return render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

test("Should not render component", () => {
  const { queryByTestId } = renderComponent({
    hasLoaded: false,
  });

  expect(queryByTestId(/login-button/i)).toBeNull();
});

test("Should render login button", () => {
  renderComponent({
    hasLoaded: true,
    isLoggedIn: true,
  });

  const button = screen.getByText("login-button");
  fireEvent.click(button);

  expect(button).toEqual("Sign in with Google");
});
