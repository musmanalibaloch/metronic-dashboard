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
      key: "properties",
      render: (obj, record) => {
        const dataArray = Object.entries(obj || {}).map(([key, value]) => {
          return { key, value: JSON.stringify(value) };
        });
        return dataArray.map((item, i) => {
          return (
            <div key={i}>
              <Row>
                <Col span={6}>
                  <Text>{item.key}</Text>
                </Col>
                <Col span={18} className="text-right">
                  <Text>{item.value}</Text>
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
