import React, { useEffect, useState } from "react";
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
import { BsEyeFill } from "react-icons/bs";

const HealthTable = ({ data, onUpdate, onDelete }) => {
  const columns = [
    {
      title: "Servie name",
      dataIndex: "servieName",
      key: "servieName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (obj, record) => {
        return obj ? (
          <Button className="bg-red-500 text-white opacity-80">Up</Button>
        ) : (
          <Button className="bg-green-500 opacity-80 text-white">Down</Button>
        );
      },
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "details",
      render: (obj, record) => <BsEyeFill />,
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default HealthTable;
