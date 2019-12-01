import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Header.css';

import Logo from '../components/Logo';

const { Header } = Layout;

export const AppHeader = () => (
  <Header>
      <div className="logo">
          <Link to="/"><Logo width="150px" /></Link>
      </div>
    <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
       
      <Menu.Item key="events">
        <Link to="/events">Events</Link>
      </Menu.Item>
      <Menu.Item key="calendar">
        <Link to="/calendar">Calendar</Link>
      </Menu.Item>
      <Menu.Item key="search">
        <Link to="/search">Search</Link>
      </Menu.Item>
      <Menu.Item key="userProfile">
        <Link to="/userProfile">User Profile</Link>
      </Menu.Item>
      <Menu.Item key="manageEvents">
        <Link to="/manageEvents">Manage Events</Link>
      </Menu.Item>
      <Menu.Item key="createEvent">
        <Link to="/createEvent">Create Event</Link>
      </Menu.Item>
    </Menu>
  </Header>
);
