import React from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import { HeroHeader } from '../components/HeroHeader';
import { EventCard } from '../components/EventCard';
import { Link } from 'react-router-dom';
import './UserProfile.css';

export const UserProfile = () => (
  <div className="contentWrapper">
    <HeroHeader />
    <h1>USER PROFILE</h1>
    <Row type="flex" justify="space-around">
        <h2>MANAGED EVENTS:</h2>
    </Row>
    <Row type="flex" justify="space-around" align="middle">
      <EventCard />
      <EventCard />
    </Row>
    <Row type="flex" justify="space-around" align="middle">
        <Link to="/createEvent">hi
            <Button type="primary" icon="download" size="large" target="/createEvent">
            Create New Event
            </Button>
        </Link>
    </Row>
    <Row type="flex" justify="space-around" align="middle">
    <h2>ARCHIVED:</h2>
    </Row>
    <Row type="flex" justify="space-around" align="middle">
      <EventCard />
    </Row>
  </div>
);