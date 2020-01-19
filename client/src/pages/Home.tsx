import React, { Fragment } from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { IState } from "../store";

export const Home = () => {
  const { hasLoaded, isLoggedIn } = useSelector((state: IState) => state.user);

  return (
    <Fragment>
      {hasLoaded && !isLoggedIn && (
        <Fragment>
          <h1>Sign in</h1>
          <Button type="primary" href="/auth/google">
            Sign in with Google
          </Button>
        </Fragment>
      )}
    </Fragment>
  );
};
