import React, { Fragment, FormEvent } from "react";
import { Input, Form, Row, Col, PageHeader } from "antd";
import { useInput } from "../hooks/useInput";

interface Props {}

export function EventsForm(props: Props) {
  const { value, bind, reset } = useInput("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    reset();
  };

  return (
    <Fragment>
      <PageHeader title="New Event" />
      <p>Fill out the form below to add a new event to the calendar:</p>
      <Row>
        <Col span={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Item label="Event Name:">
              <Input type="text" {...bind} />
            </Form.Item>
            <Form.Item label="Start Date:">
              <Input type="text" {...bind} />
            </Form.Item>
            <Input type="submit" value="Submit" />
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
}
