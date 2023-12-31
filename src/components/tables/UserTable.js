import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Tag,
  message,
} from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import moment from "moment/moment";

const UserTable = ({ data, onUpdate, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [form] = Form.useForm();

  const handleMenuClick = (e, obj) => {
    setSelectedRecord(obj);
    if (e.key === "1") {
      form.setFieldsValue({
        firstname: obj.firstName,
        lastname: obj.lastName,
        login: obj.login,
        email: obj.email,
        activated: obj.activated,
        langKey: obj.langKey,
        authorities: obj.authorities,
      });
      setOpen(true);
    } else {
      setOpenDelete(true);
    }
  };

  const items = [
    {
      label: "Edit",
      key: "1",
      // icon: <UserOutlined />,
    },
    {
      label: "Delete",
      key: "2",
      // icon: <UserOutlined />,
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Login",
      dataIndex: "login",
      key: "login",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, { email, activated }) => (
        <div className="flex items-center justify-between">
          {email}
          {activated ? (
            <Button className="ml-2 bg-green-500 text-white">Activated</Button>
          ) : (
            <Button className="ml-2 bg-red-500 text-white">Deactivated</Button>
          )}
        </div>
      ),
    },
    {
      title: "Language",
      key: "langKey",
      dataIndex: "langKey",
    },
    {
      title: "Profiles",
      key: "profiles",
      dataIndex: "profiles",
      render: (_, { authorities }) => (
        <>
          {authorities.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Create data",
      dataIndex: "createdDate",
      key: "createdDate",
      render: (_, { createdDate }) => (
        <>
          {createdDate
            ? moment(createdDate).format("DD/MM/YYYY MM:HH A")
            : null}
        </>
      ),
    },
    {
      title: "Modified by",
      dataIndex: "lastModifiedBy",
      key: "lastModifiedBy",
    },
    {
      title: "Modified data",
      dataIndex: "lastModifiedDate",
      key: "lastModifiedDate",
      render: (_, { lastModifiedDate }) => (
        <>
          {lastModifiedDate
            ? moment(lastModifiedDate).format("DD/MM/YYYY MM:HH A")
            : null}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (obj, record) => (
        <Dropdown
          menu={{
            items,
            onClick: (e) => {
              handleMenuClick(e, obj);
            },
          }}
        >
          <Button className="border-none bg-gray-100 font-semibold text-gray-400">
            <Space>
              Actions
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      ),
    },
  ];

  const onFinish = async (values) => {
    onUpdate(selectedRecord?.id, values);
  };

  const deleteRecord = () => {
    onDelete(selectedRecord?.email);
    setSelectedRecord(null);
    setOpenDelete(false);
  };

  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Modal
        title="Edit the record"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={false}
      >
        <Form
          form={form}
          name="editRecord"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Login"
            name="login"
            rules={[{ required: true, message: "Please input your login!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Activated"
            name="activated"
            rules={[
              { required: true, message: "Please input your activated!" },
            ]}
          >
            <Checkbox />
          </Form.Item>

          <Form.Item
            label="Language"
            name="langKey"
            rules={[{ required: true, message: "Please input your language!" }]}
          >
            <Select
              defaultValue="en"
              options={[{ value: "en", label: "English" }]}
            />
          </Form.Item>

          <Form.Item
            label="Profile"
            name="authorities"
            rules={[{ required: true, message: "Please input your profile!" }]}
          >
            <Select
              defaultValue={selectedRecord?.authorities[0]}
              options={[
                { value: "ROLE_USER", label: "ROLE_USER" },
                { value: "ROLE_ADMIN", label: "ROLE_ADMIN" },
              ]}
            />
          </Form.Item>

          <div className="flex justify-end w-full pr-6">
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
      <Modal
        title="Delete"
        centered
        open={openDelete}
        onOk={() => setOpenDelete(false)}
        onCancel={() => setOpenDelete(false)}
        // width={1000}
        footer={false}
      >
        Are you sure you want to delete?
        <div className="flex justify-end w-full pr-6">
          <Button onClick={() => setOpenDelete(false)} htmlType="submit">
            Cancel
          </Button>
          <Button
            onClick={deleteRecord}
            className="ml-2 bg-red-400 text-white hover:text-white hover:border-red-400"
          >
            Delete
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default UserTable;
