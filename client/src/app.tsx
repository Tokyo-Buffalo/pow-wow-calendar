import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { setConfig } from 'react-hot-loader';
import { store } from './store';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';
import { Layout } from 'antd';
import { AppHeader } from './components/Header';

import 'antd/dist/antd.css';

const { Content } = Layout;

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Layout>
          <AppHeader />
          <Content>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Content>
        </Layout>
      </Switch>
    </Router>
  </Provider>
);

setConfig({
  logLevel: 'log'
});

export default hot(App);
