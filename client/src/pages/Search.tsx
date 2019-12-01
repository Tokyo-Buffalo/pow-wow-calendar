import React from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import { HeroHeader } from '../components/HeroHeader';
import { EventCard } from '../components/EventCard';
import './Search.css';

export const Search = () => (
  <div className="searchContentWrapper">
    <HeroHeader />
    <Form className="ant-advanced-search-form">
        <Row gutter={24}>
            <Input placeholder="Month" />
            <Input placeholder="Year" />
            <Input placeholder="Zipcode" />
            <Input placeholder="Miles From" />
            <Input placeholder="Search String" />
        </Row>
        <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
                Search
            </Button>
            <Button style={{ marginLeft: 8 }}>
                Clear
            </Button>
            </Col>
        </Row>
    </Form>
    <div className="search-result-list">
        <h3>Search Result List:</h3>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />

    </div>
  </div>
);
