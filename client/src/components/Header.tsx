import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Header.css';

import Logo from '../components/Logo';

const { Header } = Layout;

export const AppHeader = () => (
  <Header>
      <div className="logo">
          <Logo width="200px" />
      </div>
    <Menu theme="light" mode="horizontal" style={{ lineHeight: '64px' }}>
       
      <Menu.Item key="home">
        <Link to="/">
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
