import React, { Fragment } from "react";
import { Button, Layout } from "antd";
import { useSelector } from "react-redux";
import { IState } from "../store";

const { Content } = Layout;

export const Home = () => {
  const { hasLoaded, isLoggedIn } = useSelector((state: IState) => state.user);

  if (!hasLoaded) {
    return null;
  }

  return (
    <Fragment>
      {!isLoggedIn ? (
        <Fragment>
          <h1>Sign in</h1>
          <Button type="primary" href="/auth/google">
            Sign in with Google
          </Button>
        </Fragment>
      ) : (
        <Fragment>
          <h1>Welcome back!</h1>
        </Fragment>
      )}
    </Fragment>
  );
};
