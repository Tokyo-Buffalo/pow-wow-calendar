import React, { Fragment, FormEvent } from "react";
import { Input, Form } from "antd";
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
      <Form onSubmit={handleSubmit}>
        <Form.Item label="Name:">
          <Input type="text" {...bind} />
        </Form.Item>
        <Input type="submit" value="Submit" />
      </Form>
    </Fragment>
  );
}
