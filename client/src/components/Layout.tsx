import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { routes } from '../routes';
import { getUserLoggedInStatus } from '../store/user';
import { AppHeader } from '../components/Header';

const { Content } = Layout;

export const AppLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserLoggedInStatus());
  });

  return (
    <Layout>
      <AppHeader />
      <Content>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Content>
    </Layout>
  );
};
