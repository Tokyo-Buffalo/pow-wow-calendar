import React from 'react';
import { Card, Icon, Avatar, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import './EventCard.css';

const { Meta } = Card;

export const EventCard = () => (
  <Card
    hoverable = {true}
    style= {{ width: '80%', marginTop: '1rem'}}

  >
    <Row>
      <Col span={8}>
      <Link to="/singleEvent" ><img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        /></Link>
      </Col>
      <Col span={16} className="eventCardMeta">
      
        <p className="eventCardMeta_date">08/25/2019 - 08/27/2019</p>
        <h3>Little Shell - Elders and Veterans Traditional Pow Wow</h3>
        <p>Elm Springs, Montana</p>

      </Col>
    </Row>
   
    
  </Card>
);
