import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import Logo from "../components/Logo";

const { Header } = Layout;

export const AppHeader = () => (
  <Header>
    <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
      <Menu.Item key="home">
        <Link to="/">
          <Logo width="100px" />
        </Link>
      </Menu.Item>
      <Menu.Item key="events">
        <Link to="/events">Events</Link>
      </Menu.Item>
      <Menu.Item key="calendar">
        <Link to="/calendar">Calendar</Link>
      </Menu.Item>
    </Menu>
  </Header>
);
