import React, { useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { routes } from '../routes';
import { getUserLoggedInStatus } from '../store/user';
import { AppHeader } from '../components/Header';
import { AppFooter } from '../components/Footer';

const { Content } = Layout;

export const AppLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserLoggedInStatus());
  });

  return (
    <Layout className="layout">
      <AppHeader />
      <Content  style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
};
