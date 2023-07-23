import { Button, Col, Progress, Row, Typography } from "antd";

const { Text } = Typography;
const JVMMetrics = () => {
  return (
    <Row gutter={16} className="mt-5">
      <Col span={8}>
        <div className="w-full px-3 flex flex-col">
          <Text className="text-lg font-semibold">Memory</Text>
          <Text className="">CodeCache: </Text>
          <Text className="">Committed: </Text>
          <Progress percent={99.9} status="active" strokeColor={"#87d068"} />
          <Text className="">G1 Old Gen: </Text>
          <Text className="">Committed: </Text>
          <Progress percent={99.9} status="active" strokeColor={"#87d068"} />
          <Text className="">G1 Survivor Space: </Text>
          <Text className="">Committed: </Text>
          <Text className="">Compressed Class Space: </Text>
          <Text className="">Committed: </Text>
          <Progress percent={99.9} status="active" strokeColor={"#87d068"} />
          <Text className="">Metaspace: </Text>
          <Text className="">Committed: </Text>
          <Text className="">G1 Eden Space: </Text>
          <Text className="">Committed: </Text>
        </div>
      </Col>
      <Col span={8}>
        <div className="w-full px-3 flex flex-col">
          <Text className="text-lg font-semibold">Threads</Text>
          <Text className="">Runnable: </Text>
          <Progress percent={99.9} status="active" strokeColor={"#87d068"} />
          <Text className="">Timed Waiting: </Text>
          <Progress percent={99.9} status="active" strokeColor={"#e6cc05"} />
          <Text className="">Waiting: </Text>
          <Progress percent={99.9} status="active" strokeColor={"#e6cc05"} />
          <Text className="">Blocked: </Text>
          <Progress percent={99.9} status="active" strokeColor={"#87d068"} />
          <Button className="bg-blue-600 opacity-75 text-white w-20">
            Expand
          </Button>
        </div>
      </Col>
      <Col span={8}>
        <div className="w-full px-3 flex flex-col">
          <Text className="text-lg font-semibold">System</Text>
          <Text className="">Uptime: </Text>
          <Text className="">Start time: </Text>
          <Text className="">Process CPU usage: </Text>
          <Progress percent={99.9} status="active" strokeColor={"#87d068"} />
          <Text className="">System CPU usage: </Text>
          <Progress percent={99.9} status="active" strokeColor={"#87d068"} />
          <Text className="">System CPU count: </Text>
          <Text className="">System 1m Load average: </Text>
          <Text className="">Process files max: </Text>
          <Text className="">Process files: </Text>
          <Text className="">open: </Text>
        </div>
      </Col>
    </Row>
  );
};

export default JVMMetrics;
