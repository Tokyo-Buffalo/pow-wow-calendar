import { hot } from "react-hot-loader/root";
import { setConfig } from 'react-hot-loader';
import React from "react";

const App = () => (
  <h1>Test world!</h1>
);

setConfig({
  logLevel: "log"
});

export default hot(App);