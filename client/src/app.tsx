import { hot } from "react-hot-loader/root";
import { setConfig } from 'react-hot-loader';
import React, { Fragment } from "react";
import { Button } from "antd";

const App = () => (
  <Fragment>
    <h1>Sign in</h1>
    <Button type="primary" href="/auth/google">Sign in with Google</Button>
  </Fragment>
);

setConfig({
  logLevel: "log"
});

export default hot(App);