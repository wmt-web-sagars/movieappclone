import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { signin } from "../../constants";

const SignUp = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <Row className="signup_page">
        <Col span={24}>
          <Form
            name=""
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            className="signup_form"
          >
            <h1>Sign Up</h1>
            <Form.Item
              name="Username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                className="input-text"

              />
            </Form.Item>
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
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Confirm password"
                className="input-text"

              />
            </Form.Item>

            {/* <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>I have read the agreement</Checkbox>
              </Form.Item>
            </Form.Item> */}

            <Button type="primary" htmlType="submit" className="signup_form">
              Sign Up
            </Button>

            <h3>
              Already have an account ?
              <Link to={signin}>
                <span> Signin </span>
              </Link>
            </h3>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default SignUp;
