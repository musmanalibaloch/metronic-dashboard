import { Button, Col, Progress, Row, Typography } from "antd";

const { Text } = Typography;
const CacheStatistics = () => {
  return (
    <>
      <Row gutter={16} className="mt-5 border-b py-2">
        <Col span={9}>
          <Text className="font-semibold">Cache name</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="font-semibold">Cache hits</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="font-semibold">Cache Misses</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="font-semibold">Cache Gets</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="font-semibold">Cache Hit %</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="font-semibold">Cache Miss %</Text>
        </Col>
      </Row>
      <Row gutter={16} className="border-b py-2">
        <Col span={9}>
          <Text className="">usersByEmail</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">0</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">0</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">0</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">0</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">0</Text>
        </Col>
      </Row>
      <Row gutter={16} className="border-b py-2">
        <Col span={9}>
          <Text className="">com.mycompany.myapp.domain.User</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">8</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">0</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">8</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">100</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">0</Text>
        </Col>
      </Row>
      <Row gutter={16} className="border-b py-2">
        <Col span={9}>
          <Text className="">com.mycompany.myapp.domain.Org</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">2314</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">141</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">2455</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">94.26</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">5.74</Text>
        </Col>
      </Row>
      <Row gutter={16} className="border-b py-2">
        <Col span={9}>
          <Text className="">usersByEmail</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">0</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">0</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">0</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">0</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">0</Text>
        </Col>
      </Row>
      <Row gutter={16} className="border-b py-2">
        <Col span={9}>
          <Text className="">com.mycompany.myapp.domain.User</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">8</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">0</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">8</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">100</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">0</Text>
        </Col>
      </Row>
      <Row gutter={16} className="border-b py-2">
        <Col span={9}>
          <Text className="">com.mycompany.myapp.domain.Org</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">2314</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">141</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">2455</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">94.26</Text>
        </Col>
        <Col span={3} className="text-center">
          <Text className="">5.74</Text>
        </Col>
      </Row>
    </>
  );
};

export default CacheStatistics;
