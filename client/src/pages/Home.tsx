import React, { Fragment } from 'react';
import { Button } from 'antd';
import { HeroHeader } from '../components/HeroHeader';
import { EventCard } from '../components/EventCard';
import './Home.css';
export const Home = () => (
  <div className="homeContentWrapper">
    <p>zaza</p>
    <HeroHeader />
    <div className="eventListing">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
    <Fragment>
      <h1>Sign in</h1>
      <Button type="primary" href="/auth/google">
        Sign in with Google
      </Button>
    </Fragment>
  </div>
);
