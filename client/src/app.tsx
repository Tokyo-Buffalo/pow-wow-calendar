import { hot } from "react-hot-loader/root";
import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { setConfig } from "react-hot-loader";
import { store } from "./store";

import "antd/dist/antd.css";

import { Button } from "antd";

const App = () => (
  <Provider store={store}>
    <h1>Sign in</h1>
    <Button type="primary" href="/auth/google">
      Sign in with Google
    </Button>
  </Provider>
);

setConfig({
  logLevel: "log"
});

export default hot(App);
