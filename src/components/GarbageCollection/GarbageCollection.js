import { Button, Col, Progress, Row, Typography } from "antd";
import { formatBytes } from "../../heplers/ApplicantHelper";

const { Text } = Typography;
const GarbageCollection = ({ garbage }) => {
  return (
    <>
      <Row gutter={16} className="mt-5">
        <Col span={8}>
          <div className="w-full px-3 flex flex-col">
            <Text className="w-full flex justify-between">
              GC Live Data Size/GC Max Data Size:{" "}
              <span>{`${formatBytes(
                garbage?.["jvm.gc.live.data.size"]
              )}/${formatBytes(garbage?.["jvm.gc.max.data.size"])}`}</span>
            </Text>
            <Progress
              percent={(
                (garbage?.["jvm.gc.live.data.size"] /
                  garbage?.["jvm.gc.max.data.size"]) *
                100
              ).toFixed()}
              status="active"
              strokeColor={"#87d068"}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="w-full px-3 flex flex-col">
            <Text className="w-full flex justify-between">
              GC Memory Promoted/GC Memory Allocated:{" "}
              <span>{`${formatBytes(
                garbage?.["jvm.gc.memory.promoted"]
              )}/${formatBytes(garbage?.["jvm.gc.memory.allocated"])}`}</span>
            </Text>
            <Progress
              percent={(
                garbage?.["jvm.gc.memory.promoted"] /
                garbage?.["jvm.gc.memory.allocated"]
              ).toFixed()}
              status="active"
              strokeColor={"#87d068"}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="w-full px-3 flex flex-col">
            <Text className="w-full flex justify-between">
              Classes loaded: <span>{garbage?.classesLoaded}</span>
            </Text>
            <Text className="w-full flex justify-between">
              Classes unloaded: <span>{garbage?.classesUnloaded}</span>
            </Text>
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
          <Text className="">{garbage?.["jvm.gc.pause"]?.count}</Text>
        </Col>
        <Col span={2}>
          <Text className="">{garbage?.["jvm.gc.pause"]?.mean}</Text>
        </Col>
        <Col span={2}>
          <Text className="">{garbage?.["jvm.gc.pause"]?.["0.0"]}</Text>
        </Col>
        <Col span={2}>
          <Text className="">{garbage?.["jvm.gc.pause"]?.["0.5"]}</Text>
        </Col>
        <Col span={2}>
          <Text className="">{garbage?.["jvm.gc.pause"]?.["0.75"]}</Text>
        </Col>
        <Col span={2}>
          <Text className="">{garbage?.["jvm.gc.pause"]?.["0.95"]}</Text>
        </Col>
        <Col span={2}>
          <Text className="">{garbage?.["jvm.gc.pause"]?.["0.99"]}</Text>
        </Col>
        <Col span={2}>
          <Text className="">{garbage?.["jvm.gc.pause"]?.max}</Text>
        </Col>
      </Row>
    </>
  );
};

export default GarbageCollection;
