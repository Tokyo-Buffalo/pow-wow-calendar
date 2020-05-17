import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { Home } from "../Home";
import configureStore from "redux-mock-store";
import { ExceptionMap } from "antd/lib/result";

function getIntialStore(state = {}) {
  return {
    user: {
      state,
    },
  };
}

const mockStore = configureStore([]);

test("Should not render component", () => {
  const state = getIntialStore({
    hasLoaded: false,
  });

  const store = mockStore(state);

  const { queryByTestId } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  expect(queryByTestId(/login-button/i)).toBeNull();
});

test("Should render login button", () => {
  const store = mockStore(
    getIntialStore({
      hasLoaded: true,
      isLoggedIn: true,
    })
  );

  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const button = screen.getByText("login-button");
  fireEvent.click(button);

  expect(button).toEqual("Sign in with Google");
});
