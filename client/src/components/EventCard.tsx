import React from 'react';
import { Card, Icon, Avatar } from 'antd';
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
      <Icon type="edit" key="edit" />,
      <Icon type="ellipsis" key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Pow-Wow Event"
      description="This is the description"
    />
  </Card>
);
