import React, { useState } from "react";
import { Button, Col, Modal, Row, Table, Typography } from "antd";
import { BsEyeFill } from "react-icons/bs";
import { formatBytes } from "../../heplers/ApplicantHelper";

const { Text } = Typography;

const HealthTable = ({ data, onUpdate, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const columns = [
    {
      title: "Servie name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "data",
      key: "data",
      render: (obj, record) => {
        return obj?.status === "UP" ? (
          <Button className="bg-green-500 opacity-80 text-white">UP</Button>
        ) : (
          <Button className="bg-red-500 text-white opacity-80">DOWN</Button>
        );
      },
    },
    {
      title: "Details",
      dataIndex: "data",
      key: "data",
      render: (obj, record, i) => {
        return (
          obj?.details && (
            <BsEyeFill
              onClick={() => {
                const dataArray = Object.keys(obj?.details).map((key) => {
                  return {
                    name: key,
                    value: obj?.details[key],
                  };
                });
                setSelectedRecord({ name: data[i]?.name, details: dataArray });
                setOpen(true);
              }}
              className="cursor-pointer"
            />
          )
        );
      },
    },
  ];

  return (
    <>
      <Table pagination={false} columns={columns} dataSource={data} />

      <Modal
        title={selectedRecord?.name}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        // width={1000}
        footer={false}
      >
        <Row className="mt-5">
          <Col span={12} className="p-3 border rounded-tl-lg">
            <Text className="font-bold">Name</Text>
          </Col>
          <Col span={12} className="p-3 border rounded-tr-lg">
            <Text className="font-bold">Value</Text>
          </Col>
        </Row>
        {selectedRecord?.details?.map((item, i) => {
          return (
            <Row key={i} className="">
              <Col
                span={12}
                className={
                  i === selectedRecord?.details?.length - 1
                    ? "p-3 border rounded-bl-lg"
                    : "p-3 border"
                }
              >
                <Text>{item?.name}</Text>
              </Col>
              <Col
                span={12}
                className={
                  i === selectedRecord?.details?.length - 1
                    ? "p-3 border rounded-br-lg"
                    : "p-3 border"
                }
              >
                <Text>
                  {formatBytes(
                    typeof item?.value === "number" ? item?.value : 0
                  )}
                </Text>
              </Col>
            </Row>
          );
        })}
      </Modal>
    </>
  );
};

export default HealthTable;
