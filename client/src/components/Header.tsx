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
      <Menu.ItemGroup>
        <Menu.Item key="userProfile">
          User Profile
        </Menu.Item>
        <Menu.Item key="manageEvents">
          Manage Events
        </Menu.Item>
        <Menu.Item key="createEvent">
          Create Event
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  </Header>
);
