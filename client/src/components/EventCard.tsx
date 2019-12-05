import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import './EventCard.css';

const { Meta } = Card;

export const EventCard = () => (
    <Card
    style={{ width: 400 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <Icon type="setting" key="setting" />,
      <Link to="/editEvent"><Icon type="edit" key="edit" /></Link>,
      <Link to="/singleEvent"><Icon type="ellipsis" key="ellipsis" /></Link>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Pow-Wow Event"
      description="This is the description"
    />
  </Card>
);
