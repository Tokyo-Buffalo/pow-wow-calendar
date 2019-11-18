import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { setConfig } from 'react-hot-loader';
import { store } from './store';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

import { AppLayout } from './components/Layout';

import 'antd/dist/antd.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <AppLayout />
      </Switch>
    </Router>
  </Provider>
);

setConfig({
  logLevel: 'log'
});

export default hot(App);
