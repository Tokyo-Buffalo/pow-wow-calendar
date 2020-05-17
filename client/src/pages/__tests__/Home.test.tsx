import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Home } from "../Home";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

function renderComponent(state = {}) {
  const store = mockStore({
    user: {
      ...state,
    },
  });

  return render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

test("Should not render component", () => {
  const { queryByTestId } = renderComponent({
    hasLoaded: true
  });

  expect(queryByTestId(/login-button/i)).toBeNull();
});

test("Should render login button", () => {
  const { getByTestId } = renderComponent({
    hasLoaded: true,
    isLoggedIn: false,
  });

  const button = getByTestId("login-button");

  expect(button.innerHTML).toEqual("<span>Sign in with Google</span>");
});
