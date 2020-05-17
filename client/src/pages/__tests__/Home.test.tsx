import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Home } from "../Home";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

function getState(state = {}) {
  return mockStore({
    user: {
      ...state,
    },
  });
}

test("Should not render component", () => {
  const intialState = {
    user: {
      hasLoaded: false,
    },
  };

  const store = mockStore(intialState);

  const { queryByTestId } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  expect(queryByTestId(/login-button/i)).toBeNull();
});

test("Should render login button", () => {
  const store = getState({
    hasLoaded: true,
    isLoggedIn: false,
  });

  const { getByTestId } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const button = getByTestId("login-button");

  expect(button.innerHTML).toEqual("<span>Sign in with Google</span>");
});
