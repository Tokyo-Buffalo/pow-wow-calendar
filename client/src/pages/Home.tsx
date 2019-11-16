import React, { Fragment } from 'react';
import { Button } from 'antd';

export const Home = () => (
  <Fragment>
    <h1>Sign in</h1>
    <Button type="primary" href="/auth/google">
      Sign in with Google
    </Button>
  </Fragment>
);
