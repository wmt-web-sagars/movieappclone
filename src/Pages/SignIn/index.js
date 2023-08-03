import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { signin, signup } from "../../constants";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Row className="signin_page">
      <Col span={24}>
        <Form
          name=""
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          className="signin_form"
        >
          <h1>Sign In</h1>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              className="input-text"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
              className="input-text"
            />
          </Form.Item>

          {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>I have read the agreement</Checkbox>
          </Form.Item>
        </Form.Item> */}

          <Button type="primary" htmlType="submit" className="signup_form">
            Sign In
          </Button>

          <h3>
            New to Netflix?
            <Link to={signup}>
              <span> SignUp </span>
            </Link>
          </h3>
        </Form>
      </Col>
    </Row>
  );
};

export default SignIn;
