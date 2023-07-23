import { Button, Col, Progress, Row, Typography } from "antd";

const { Text } = Typography;
const GarbageCollection = () => {
  return (
    <>
      <Row gutter={16} className="mt-5">
        <Col span={8}>
          <div className="w-full px-3 flex flex-col">
            <Text className="">GC Live Data Size/GC Max Data Size: </Text>
            <Progress percent={99.9} status="active" strokeColor={"#87d068"} />
          </div>
        </Col>
        <Col span={8}>
          <div className="w-full px-3 flex flex-col">
            <Text className="">GC Memory Promoted/GC Memory Allocated: </Text>
            <Progress
              percent={99.9}
              stTimed
              status="active"
              strokeColor={"#87d068"}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="w-full px-3 flex flex-col">
            <Text className="">Classes loaded: </Text>
            <Text className="">Classes unloaded: </Text>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 py-3 border-b">
        <Col span={8}></Col>
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
        <Col span={2}>
          <Text className="font-bold">p75</Text>
        </Col>
        <Col span={2}>
          <Text className="font-bold">p95</Text>
        </Col>
        <Col span={2}>
          <Text className="font-bold">p99</Text>
        </Col>
        <Col span={2}>
          <Text className="font-bold">Max</Text>
        </Col>
      </Row>
      <Row className="py-3">
        <Col span={8}>jvm.gc.pause</Col>
        <Col span={2}>
          <Text className="">0</Text>
        </Col>
        <Col span={2}>
          <Text className="">0</Text>
        </Col>
        <Col span={2}>
          <Text className="">0</Text>
        </Col>
        <Col span={2}>
          <Text className="">0</Text>
        </Col>
        <Col span={2}>
          <Text className="">0</Text>
        </Col>
        <Col span={2}>
          <Text className="">0</Text>
        </Col>
        <Col span={2}>
          <Text className="">0</Text>
        </Col>
        <Col span={2}>
          <Text className="">0</Text>
        </Col>
      </Row>
    </>
  );
};

export default GarbageCollection;
