import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { setConfig } from 'react-hot-loader';
import { store } from './store';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Layout>
          <Header>
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
              <Menu.Item key="home">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="events">
                <Link to="/events">Events</Link>
              </Menu.Item>
              <Menu.Item key="calendar">
                <Link to="/calendar">Calendar</Link>
              </Menu.Item>
            </Menu>
          </Header>
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
