import React from "react";
import { Button, Col, Row, Table, Typography } from "antd";
import { BsEyeFill } from "react-icons/bs";

const { Text } = Typography;

const ConfigurationTable = ({ data, onUpdate, onDelete }) => {
  const columns = [
    {
      title: "Prefix",
      dataIndex: "prefix",
      key: "prefix",
    },
    {
      title: "Properties",
      dataIndex: "properties",
      key: "status",
      render: (obj, record) => {
        return obj.map((item, i) => {
          return (
            <div key={i}>
              <Row>
                <Col span={6}>
                  <Text>{item.name}</Text>
                </Col>
                <Col span={18} className="text-right">
                  <Text>{item.data}</Text>
                </Col>
              </Row>
            </div>
          );
        });
      },
    },
  ];

  return (
    <>
      <Table pagination={false} columns={columns} dataSource={data} />
    </>
  );
};

export default ConfigurationTable;
