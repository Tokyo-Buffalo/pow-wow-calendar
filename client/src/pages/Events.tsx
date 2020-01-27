import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const Events = () => (
  <Fragment>
    <h1>Events</h1>
    <Button type="primary">
      <Link to="/events/add">Add Event</Link>
    </Button>
  </Fragment>
);
