import { Button, Col, Progress, Row, Typography } from "antd";

const { Text } = Typography;
const DataSource = () => {
  return (
    <>
      <Row className="mt-5 py-3 border-b">
        <Col span={12} className="font-bold">
          Connection Pool Usage (active: 0, min: 10, max: 10, idle: 10)
        </Col>
        <Col span={2}>
          <Text className="font-bold">Count</Text>
        </Col>
        <Col span={2}>
          <Text className="font-bold">Mean</Text>
        </Col>
        <Col span={2}>
          <Text className="font-bold">Min</Text>
        </Col>
        <Col span={2}>
          <Text className="font-bold">p50</Text>
        </Col>
        <Col span={1}>
          <Text className="font-bold">p75</Text>
        </Col>
        <Col span={1}>
          <Text className="font-bold">p95</Text>
        </Col>
        <Col span={1}>
          <Text className="font-bold">p99</Text>
        </Col>
        <Col span={1}>
          <Text className="font-bold">Max</Text>
        </Col>
      </Row>
      <Row className="py-3 border-b">
        <Col span={12}>Acquire</Col>
        <Col span={2}>
          <Text>629</Text>
        </Col>
        <Col span={2}>
          <Text>0.01</Text>
        </Col>
        <Col span={2}>
          <Text>0</Text>
        </Col>
        <Col span={2}>
          <Text>0</Text>
        </Col>
        <Col span={1}>
          <Text>0</Text>
        </Col>
        <Col span={1}>
          <Text>0</Text>
        </Col>
        <Col span={1}>
          <Text>0</Text>
        </Col>
        <Col span={1}>
          <Text>0</Text>
        </Col>
      </Row>
      <Row className="py-3 border-b">
        <Col span={12}>Creation</Col>
        <Col span={2}>
          <Text>2152</Text>
        </Col>
        <Col span={2}>
          <Text>0.01</Text>
        </Col>
        <Col span={2}>
          <Text>0</Text>
        </Col>
        <Col span={2}>
          <Text>0</Text>
        </Col>
        <Col span={1}>
          <Text>0</Text>
        </Col>
        <Col span={1}>
          <Text>0</Text>
        </Col>
        <Col span={1}>
          <Text>0</Text>
        </Col>
        <Col span={1}>
          <Text>0</Text>
        </Col>
      </Row>
      <Row className="py-3 border-b">
        <Col span={12}>Usage</Col>
        <Col span={2}>
          <Text>629</Text>
        </Col>
        <Col span={2}>
          <Text>4.88</Text>
        </Col>
        <Col span={2}>
          <Text>0</Text>
        </Col>
        <Col span={2}>
          <Text>0</Text>
        </Col>
        <Col span={1}>
          <Text>0</Text>
        </Col>
        <Col span={1}>
          <Text>0</Text>
        </Col>
        <Col span={1}>
          <Text>0</Text>
        </Col>
        <Col span={1}>
          <Text>0</Text>
        </Col>
      </Row>
    </>
  );
};

export default DataSource;
