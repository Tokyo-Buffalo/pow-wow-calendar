import React, { Fragment, FormEvent } from "react";
import { Layout, Input, Form, DatePicker, Row, Col, PageHeader } from "antd";
import { useInput } from "../hooks/useInput";

interface Props {}

const { Content } = Layout;

export function EventsForm(props: Props) {
  const { value, bind, reset } = useInput("");
  const dateFormat = "MM/DD/YYYY";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    reset();
  };

  return (
    <Fragment>
      <PageHeader
        title="New Event"
        subTitle="Fill out the form below to add a new event to the calendar:"
      >
        <Content>
          <Row>
            <Col span={12}>
              <Form onFinish={handleSubmit}>
                <Form.Item label="Event Name:">
                  <Input type="text" {...bind} />
                </Form.Item>
                <Form.Item label="Start Date:">
                  <DatePicker format={dateFormat} />
                </Form.Item>
                <Input type="submit" value="Submit" />
              </Form>
            </Col>
          </Row>
        </Content>
      </PageHeader>
    </Fragment>
  );
}
