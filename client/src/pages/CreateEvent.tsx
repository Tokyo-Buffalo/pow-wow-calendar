import React from 'react';
import { Form, Row, Col, Input, Button, Icon, DatePicker } from 'antd';

const { RangePicker } = DatePicker;
const InputGroup = Input.Group;
const { TextArea } = Input;


export const CreateEvent = () => (
  <div className="contentWrapper">
    <h1>CREATE NEW EVENT</h1>
    <Form layout="vertical">
      <Form.Item label="Name of Event:" >
        <Input placeholder="Name of Event" />
      </Form.Item>
      <Form.Item label="Date:" >
        <RangePicker />
      </Form.Item>
      <Form.Item label="Contact Name" >
        <Input placeholder="Contact Name" />
      </Form.Item>
      <Form.Item label="Contact Email" >
        <Input placeholder="Contact Email" />
      </Form.Item>
      <Form.Item label="Contact Phone" >
        <InputGroup compact>
          <Input style={{ width: '20%' }} defaultValue="0571" />
          <Input style={{ width: '30%' }} defaultValue="26888888" />
        </InputGroup>
      </Form.Item>
      <Form.Item label="Website" >
        <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
      </Form.Item>
      <Form.Item label="Address" >
        <Input placeholder="Address" />
      </Form.Item>
      <div>Map Image Here</div>
      <Form.Item label="Flier" >
        <div>
          <p>Flier Image Here</p>
          <a href="#">Change Image...</a>
        </div>
      </Form.Item>
      <Form.Item label="Description" >
        <TextArea rows={4} />
      </Form.Item>
    </Form>
  </div>
);
