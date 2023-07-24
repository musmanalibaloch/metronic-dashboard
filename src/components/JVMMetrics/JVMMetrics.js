import { Button, Col, Progress, Row, Typography } from "antd";
import { formatBytes } from "../../heplers/ApplicantHelper";

const { Text } = Typography;
const JVMMetrics = ({ jvm, threads }) => {
  return (
    <Row gutter={16} className="mt-5">
      <Col span={8}>
        <div className="w-full px-3 flex flex-col">
          <Text className="text-lg font-semibold">Memory</Text>
          <Text className="w-full flex justify-between">
            CodeCache:{" "}
            <span>{`${formatBytes(jvm?.CodeCache?.used)} / ${formatBytes(
              jvm?.CodeCache?.max
            )}`}</span>
          </Text>
          <Text className="w-full flex justify-between">
            Committed: <span>{formatBytes(jvm?.CodeCache?.committed)}</span>
          </Text>
          <Progress
            percent={(
              (jvm?.CodeCache?.used / jvm?.CodeCache?.max) *
              100
            ).toFixed()}
            status="active"
            strokeColor={"#87d068"}
          />
          <Text className="w-full flex justify-between">
            G1 Old Gen:{" "}
            <span>{`${formatBytes(jvm?.["G1 Old Gen"]?.used)} / ${formatBytes(
              jvm?.["G1 Old Gen"]?.max
            )}`}</span>
          </Text>
          <Text className="w-full flex justify-between">
            Committed:{" "}
            <span>{formatBytes(jvm?.["G1 Old Gen"]?.committed)}</span>
          </Text>
          <Progress
            percent={(
              (jvm?.["G1 Old Gen"]?.used / jvm?.["G1 Old Gen"]?.max) *
              100
            ).toFixed()}
            status="active"
            strokeColor={"#87d068"}
          />
          <Text className="w-full flex justify-between">
            G1 Survivor Space:{" "}
            <span>{`${formatBytes(
              jvm?.["G1 Survivor Space"]?.used
            )} / ${formatBytes(jvm?.["G1 Survivor Space"]?.max)}`}</span>
          </Text>
          <Text className="w-full flex justify-between">
            Committed:{" "}
            <span>{formatBytes(jvm?.["G1 Survivor Space"]?.committed)}</span>
          </Text>
          <Text className="w-full flex justify-between">
            Compressed Class Space:{" "}
            <span>{`${formatBytes(
              jvm?.["Compressed Class Space"]?.used
            )} / ${formatBytes(jvm?.["Compressed Class Space"]?.max)}`}</span>
          </Text>
          <Text className="w-full flex justify-between">
            Committed:{" "}
            <span>
              {formatBytes(jvm?.["Compressed Class Space"]?.committed)}
            </span>
          </Text>
          <Progress
            percent={(
              (jvm?.["Compressed Class Space"]?.used /
                jvm?.["Compressed Class Space"]?.max) *
              100
            ).toFixed()}
            status="active"
            strokeColor={"#87d068"}
          />
          <Text className="w-full flex justify-between">
            Metaspace:{" "}
            <span>{`${formatBytes(jvm?.Metaspace?.used)}/${formatBytes(
              jvm?.Metaspace?.max
            )}`}</span>
          </Text>
          <Text className="w-full flex justify-between">
            Committed: <span>{formatBytes(jvm?.Metaspace?.committed)}</span>
          </Text>
          <Text className="w-full flex justify-between">
            G1 Eden Space:{" "}
            <span>{`${formatBytes(jvm?.["G1 Eden Space"]?.used)}/ ${
              jvm?.["G1 Eden Space"]?.max
            }`}</span>
          </Text>
          <Text className="w-full flex justify-between">
            Committed: <span>{jvm?.["G1 Eden Space"]?.committed}</span>
          </Text>
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
