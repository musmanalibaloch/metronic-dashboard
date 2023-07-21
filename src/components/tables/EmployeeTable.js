import React, { useState } from "react";
import {
  Button,
  Dropdown,
  Form,
  Input,
  Modal,
  Space,
  Table,
  Tag,
  message,
} from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const EmployeeTable = ({ data, onUpdate, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [form] = Form.useForm();

  const handleMenuClick = (e, obj) => {
    setSelectedRecord(obj);
    if (e.key === "1") {
      form.setFieldsValue({
        firstname: obj.firstname,
        lastname: obj.lastname,
        age: obj.age,
        skills: obj.skills,
        title: obj.title,
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
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Age",
      key: "age",
      dataIndex: "age",
      // render: (_, { tags }) => (
      //   <>
      //     {tags.map((tag) => {
      //       let color = tag.length > 5 ? "geekblue" : "green";
      //       if (tag === "loser") {
      //         color = "volcano";
      //       }
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </>
      // ),
    },
    {
      title: "Skills",
      dataIndex: "skills",
      key: "skills",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
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
    onDelete(selectedRecord?.id);
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
            label="First Name"
            name="firstname"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: "Please input your age!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Skills"
            name="skills"
            rules={[{ required: true, message: "Please input your skills!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input />
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

export default EmployeeTable;
