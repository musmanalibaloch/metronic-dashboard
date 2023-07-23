import { useEffect, useState } from "react";
import AppLayout from "./../../Layout";
import { deleteOrgs, getOrgs, updateOrgs } from "../../services/api";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Progress,
  Row,
  Typography,
} from "antd";
import { HiOutlineRefresh } from "react-icons/hi";
import JVMMetrics from "../../components/JVMMetrics/JVMMetrics";
import GarbageCollection from "../../components/GarbageCollection/GarbageCollection";
import HTTP from "../../components/HTTP/HTTP";
import Endpoints from "../../components/Endpoints/Endpoints";
import CacheStatistics from "../../components/CacheStatistics/CacheStatistics";
import DataSource from "../../components/DataSource/DataSource";

const { Text } = Typography;

const Logs = () => {
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

  return (
    <AppLayout breadcrum={breadcrum}>
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
      <Row>
        <Col span={17} className="border p-3 rounded-bl-lg">
          <Text>Root</Text>
        </Col>
        <Col span={7} className="border p-3 rounded-br-lg">
          <Row className="text-center">
            <Col span={8} className="py-2">
              Trace
            </Col>
            <Col span={8} className="rounded-lg bg-red-500 text-white py-2">
              Debug
            </Col>
            <Col span={8} className=" py-2">
              Info
            </Col>
          </Row>
          <Row className="text-center mt-3">
            <Col span={8} className=" py-2">
              Trace
            </Col>
            <Col span={8} className=" py-2">
              Debug
            </Col>
            <Col span={8} className=" py-2">
              Info
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={17} className="border p-3 rounded-bl-lg">
          <Text>org.hibernate.annotations.common.Version</Text>
        </Col>
        <Col span={7} className="border p-3 rounded-br-lg uppercase">
          <Row className="text-center">
            <Col span={8} className="py-2">
              Trace
            </Col>
            <Col span={8} className="py-2">
              Debug
            </Col>
            <Col span={8} className=" py-2">
              Info
            </Col>
          </Row>
          <Row className="text-center mt-3">
            <Col span={8} className="rounded-lg bg-yellow-500 text-white py-2">
              Warn
            </Col>
            <Col span={8} className=" py-2">
              Error
            </Col>
            <Col span={8} className=" py-2">
              OFF
            </Col>
          </Row>
        </Col>
      </Row>
    </AppLayout>
  );
};

export default Logs;
