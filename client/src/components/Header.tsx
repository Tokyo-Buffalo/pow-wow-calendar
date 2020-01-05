import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Header.css';

import Logo from '../components/Logo';

const { Header } = Layout;

export const AppHeader = () => (
  <Header className="header_bg">
    <div className="logo">
        <Link to="/"><Logo width="150px" /></Link>
    </div>
    <div>
      <Link to="/userProfile">PROFILE</Link>
    </div>
  </Header>
);
