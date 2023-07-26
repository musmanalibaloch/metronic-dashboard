import { useEffect, useState } from "react";
import AppLayout from "./../../Layout";
import {
  deleteOrgs,
  getManagementLoggers,
  getOrgs,
  managementLoggersUpdate,
  updateOrgs,
} from "../../services/api";
import { Link } from "react-router-dom";
import { Button, Col, Divider, Form, Input, Row, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

const { Text } = Typography;

const Logs = () => {
  const [loggers, setLoggers] = useState([]);
  const [loading, setLoading] = useState(false);
  const breadcrum = {
    pageTitle: "Logs",
    data: [
      {
        title: <Link to="">Administration</Link>,
      },
      {
        title: "Logs",
      },
    ],
  };

  const getAllManagementLoggers = async () => {
    setLoading(false);
    try {
      const { data } = await getManagementLoggers();
      const dataArray = Object.entries(data?.loggers || {}).map(
        ([key, value]) => {
          return { key, ...value };
        }
      );
      setLoggers(dataArray);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  const updateManagementLoggers = async (name, method) => {
    setLoading(true);
    try {
      const res = await managementLoggersUpdate(name, method);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllManagementLoggers();
  }, []);

  const handleValueClick = (name, method) => {
    updateManagementLoggers(name, method);
    getAllManagementLoggers();
  };

  return (
    <AppLayout breadcrum={breadcrum}>
      {loading || loggers?.length ? (
        <div
          style={{
            height: "100vh",
            // backgroundColor: "rgba(0,0,0,0.5",
            // zIndex: 55,
          }}
          className="fixed top-0 left-0 flex justify-center items-center w-full"
        >
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <>
          <div>
            <div className="flex justify-between mb-4">
              <div>
                <Text className="text-xl font-semibold">Logs</Text>
              </div>
            </div>
            <Text>There are 1442 loggers.</Text>
            <div className="mt-3">
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item label="Filter (by prefix)" name="search">
                  <Input />
                </Form.Item>
              </Form>
            </div>
            <Divider />
          </div>
          <Row>
            <Col span={17} className="border p-3 rounded-tl-lg">
              <Text className="font-bold">Name</Text>
            </Col>
            <Col span={7} className="border p-3 rounded-tr-lg">
              <Text className="font-bold">Level</Text>
            </Col>
          </Row>
          {loggers?.map((item, i) => {
            return (
              <Row>
                <Col
                  span={17}
                  className={`border p-3 ${
                    i === loggers.length - 1 ? "rounded-bl-lg" : ""
                  } `}
                >
                  <Text>{item?.key}</Text>
                </Col>
                <Col
                  span={7}
                  className={`border p-3 ${
                    i === loggers.length - 1 ? "rounded-br-lg" : ""
                  } `}
                >
                  <Row className="text-center">
                    <Col span={8}>
                      <Button
                        onClick={() => handleValueClick(item?.key, "TRACE")}
                        className={`${
                          item?.effectiveLevel === "TRACE"
                            ? "rounded-lg bg-orange-500 text-white"
                            : "hover:bg-gray-400 rounded-lg cursor-pointer"
                        } py-2 border-none`}
                      >
                        TRACE
                      </Button>
                    </Col>
                    <Col span={8}>
                      <Button
                        onClick={() => handleValueClick(item?.key, "DEBUG")}
                        className={`${
                          item?.effectiveLevel === "DEBUG"
                            ? "rounded-lg bg-green-500 text-white"
                            : "hover:bg-gray-400 rounded-lg cursor-pointer"
                        } py-2 border-none`}
                      >
                        DEBUG
                      </Button>
                    </Col>
                    <Col span={8}>
                      <Button
                        onClick={() => handleValueClick(item?.key, "INFO")}
                        className={`${
                          item?.effectiveLevel === "INFO"
                            ? "rounded-lg bg-blue-500 text-white"
                            : "hover:bg-gray-400 rounded-lg cursor-pointer"
                        } py-2 border-none`}
                      >
                        INFO
                      </Button>
                    </Col>
                  </Row>
                  <Row className="text-center mt-3">
                    <Col span={8}>
                      <Button
                        onClick={() => handleValueClick(item?.key, "WARN")}
                        className={`${
                          item?.effectiveLevel === "WARN"
                            ? "rounded-lg bg-yellow-500 text-white"
                            : "hover:bg-gray-400 rounded-lg cursor-pointer"
                        } py-2 border-none`}
                      >
                        WARN
                      </Button>
                    </Col>
                    <Col span={8}>
                      <Button
                        onClick={() => handleValueClick(item?.key, "ERROR")}
                        className={`${
                          item?.effectiveLevel === "ERROR"
                            ? "rounded-lg bg-red-500 text-white"
                            : "hover:bg-gray-400 rounded-lg cursor-pointer"
                        } py-2 border-none`}
                      >
                        ERROR
                      </Button>
                    </Col>
                    <Col span={8}>
                      <Button
                        onClick={() => handleValueClick(item?.key, "OFF")}
                        className={`${
                          item?.effectiveLevel === "OFF"
                            ? "rounded-lg bg-gray-500 text-white"
                            : "hover:bg-gray-400 rounded-lg cursor-pointer"
                        } py-2 border-none`}
                      >
                        OFF
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            );
          })}
        </>
      )}
    </AppLayout>
  );
};

export default Logs;
