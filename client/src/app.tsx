import { hot } from 'react-hot-loader/root';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { setConfig } from 'react-hot-loader';
import { store } from './store';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';

import 'antd/dist/antd.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </Router>
  </Provider>
);

setConfig({
  logLevel: 'log'
});

export default hot(App);
