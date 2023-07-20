import React from "react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { Link } from "react-router-dom";
import { getAccount, getSocketInfo, login } from "../../services/api";

const onFinish = async (values) => {
  try {
    const { data: id_token } = await login(values);
    localStorage.setItem("token", id_token.id_token);
    const { data } = await getAccount();
    console.log({ data });
    const res = await getSocketInfo();
    console.log({ res });
  } catch (error) {
    console.log(error);
  }
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="w-full flex justify-center items-center"
    >
      <div className="w-1/2">
        <Form
          className="w-full"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Row>
            <Col className="flex w-full justify-between">
              <Form.Item
                className="w-1/2 pl-10"
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <p>
                Dosen't have any account?{" "}
                <Link className="text-blue-400" to={"/signup"}>
                  Click here
                </Link>
              </p>
            </Col>
          </Row>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;