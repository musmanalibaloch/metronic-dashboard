import { Button, Col, Progress, Row, Typography } from "antd";

const { Text } = Typography;
const HTTP = () => {
  return (
    <>
      <div className="w-full flex flex-col mt-3">
        <Text className="">Total requests:</Text>
      </div>
      <Row gutter={16} className="mt-5 border-b py-2">
        <Col span={5}>
          <Text className="font-semibold">Code</Text>
        </Col>
        <Col span={9}>
          <Text className="font-semibold">Count</Text>
        </Col>
        <Col span={5} className="text-center">
          <Text className="font-semibold">Mean</Text>
        </Col>
        <Col span={5} className="text-center">
          <Text className="font-semibold">Max</Text>
        </Col>
      </Row>
      <Row gutter={16} className="border-b py-2">
        <Col span={5}>
          <Text className="">101</Text>
        </Col>
        <Col span={9}>
          <Progress
            className="w-11/12"
            percent={99.9}
            status="active"
            strokeColor={"#87d068"}
          />
        </Col>
        <Col span={5} className="text-center">
          <Text className="">3.9</Text>
        </Col>
        <Col span={5} className="text-center">
          <Text className="">0</Text>
        </Col>
      </Row>
      <Row gutter={16} className="border-b py-2">
        <Col span={5}>
          <Text className="">101</Text>
        </Col>
        <Col span={9}>
          <Progress
            className="w-11/12"
            percent={99.9}
            status="active"
            strokeColor={"#87d068"}
          />
        </Col>
        <Col span={5} className="text-center">
          <Text className="">3.9</Text>
        </Col>
        <Col span={5} className="text-center">
          <Text className="">0</Text>
        </Col>
      </Row>
      <Row gutter={16} className="border-b py-2">
        <Col span={5}>
          <Text className="">101</Text>
        </Col>
        <Col span={9}>
          <Progress
            className="w-11/12"
            percent={99.9}
            status="active"
            strokeColor={"#87d068"}
          />
        </Col>
        <Col span={5} className="text-center">
          <Text className="">3.9</Text>
        </Col>
        <Col span={5} className="text-center">
          <Text className="">0</Text>
        </Col>
      </Row>
      <Row gutter={16} className="border-b py-2">
        <Col span={5}>
          <Text className="">101</Text>
        </Col>
        <Col span={9}>
          <Progress
            className="w-11/12"
            percent={99.9}
            status="active"
            strokeColor={"#87d068"}
          />
        </Col>
        <Col span={5} className="text-center">
          <Text className="">3.9</Text>
        </Col>
        <Col span={5} className="text-center">
          <Text className="">0</Text>
        </Col>
      </Row>
      <Row gutter={16} className="border-b py-2">
        <Col span={5}>
          <Text className="">101</Text>
        </Col>
        <Col span={9}>
          <Progress
            className="w-11/12"
            percent={99.9}
            status="active"
            strokeColor={"#87d068"}
          />
        </Col>
        <Col span={5} className="text-center">
          <Text className="">3.9</Text>
        </Col>
        <Col span={5} className="text-center">
          <Text className="">0</Text>
        </Col>
      </Row>
      <Row gutter={16} className="border-b py-2">
        <Col span={5}>
          <Text className="">101</Text>
        </Col>
        <Col span={9}>
          <Progress
            className="w-11/12"
            percent={99.9}
            status="active"
            strokeColor={"#87d068"}
          />
        </Col>
        <Col span={5} className="text-center">
          <Text className="">3.9</Text>
        </Col>
        <Col span={5} className="text-center">
          <Text className="">0</Text>
        </Col>
      </Row>
    </>
  );
};

export default HTTP;
