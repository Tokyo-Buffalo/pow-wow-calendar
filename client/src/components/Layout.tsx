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
const layoutStyle= {'background-color':'#fff'}
  return (
    <Layout className="layout">
      <AppHeader />
      <Content  style={{ padding: '0 50px' }}>
        
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Content>
      <AppFooter />
    </Layout>
  );
};
