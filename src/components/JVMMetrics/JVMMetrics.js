import {
  Badge,
  Button,
  Col,
  Collapse,
  Divider,
  Input,
  Modal,
  Progress,
  Row,
  Typography,
} from "antd";
import { formatBytes } from "../../heplers/ApplicantHelper";
import { useState } from "react";

const { Text } = Typography;
const JVMMetrics = ({ jvm, threads }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lockNameFilter, setLockNameFilter] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (val) => {
    setLockNameFilter(val);
  };

  const filteredData = threads.filter((item) => {
    if (lockNameFilter.trim() === "") {
      return true; // No filter applied, show all data
    }

    // Modify this condition to match your desired filtering criteria.
    return item.lockName && item.lockName.includes(lockNameFilter);
  });

  return (
    <>
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
            <Button
              onClick={showModal}
              className="bg-blue-600 opacity-75 text-white w-20"
            >
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
      <Modal
        title="Threads dump"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        footer={false}
      >
        <Divider />
        <div className="flex justify-around">
          <Button className="border-none bg-blue-500 text-white">
            All
            <Badge
              className="ml-2 site-badge-count-109"
              count={109}
              style={{ backgroundColor: "gray" }}
            />
          </Button>
          <Button className="border-none bg-green-500 text-white">
            Runnable
            <Badge
              className="ml-2 site-badge-count-109"
              count={109}
              style={{ backgroundColor: "gray" }}
            />
          </Button>
          <Button className="border-none bg-teal-500 text-white">
            Waiting
            <Badge
              className="ml-2 site-badge-count-109"
              count={109}
              style={{ backgroundColor: "gray" }}
            />
          </Button>
          <Button className="border-none bg-yellow-500 text-white">
            Timed Waiting
            <Badge
              className="ml-2 site-badge-count-109"
              count={109}
              style={{ backgroundColor: "gray" }}
            />
          </Button>
          <Button className="border-none bg-red-500 text-white">
            Blocked
            <Badge
              className="ml-2 site-badge-count-109"
              count={109}
              style={{ backgroundColor: "gray" }}
            />
          </Button>
        </div>
        <Input
          onChange={(e) => handleSearch(e.target.value)}
          className="mt-5"
          placeholder="Filter by lock name..."
        />
        {filteredData?.map((item, i) => {
          return (
            <div key={i} className="">
              <div className="text-center mt-3">
                <Text className="text-xl font-semibold">
                  {item?.threadName} (ID {item?.threadId})
                </Text>
              </div>

              <Collapse
                ghost
                items={[
                  {
                    key: "1",
                    label: <Button type="link">Show StackTrace</Button>,
                    showArrow: false,
                    children: (
                      <div className="border rounded-lg p-5">
                        {item?.stackTrace?.map((trace, j) => {
                          return (
                            <div key={j}>
                              <samp>
                                {trace?.className}.{trace?.methodName}
                                <span className="text-fuchsia-500">
                                  ({trace?.fileName}:{trace?.lineNumber})
                                </span>
                              </samp>
                            </div>
                          );
                        })}
                      </div>
                    ),
                  },
                ]}
              />
              <Row className="flex justify-center text-center">
                <Col span={4} className="border-b py-3">
                  <Text className="font-semibold">Blocked Time</Text>
                </Col>
                <Col span={4} className="border-b py-3">
                  <Text className="font-semibold">Blocked Count</Text>
                </Col>
                <Col span={4} className="border-b py-3">
                  <Text className="font-semibold">Waited Time</Text>
                </Col>
                <Col span={4} className="border-b py-3">
                  <Text className="font-semibold">Waited Count</Text>
                </Col>
                <Col span={4} className="border-b py-3">
                  <Text className="font-semibold">Lock Name</Text>
                </Col>
              </Row>
              <Row className="flex justify-center text-center">
                <Col span={4} className="border-b py-3">
                  <Text className="font-semibold">{item?.blockedTime}</Text>
                </Col>
                <Col span={4} className="border-b py-3">
                  <Text className="font-semibold">{item?.blockedCount}</Text>
                </Col>
                <Col span={4} className="border-b py-3">
                  <Text className="font-semibold">{item?.waitedTime}</Text>
                </Col>
                <Col span={4} className="border-b py-3">
                  <Text className="font-semibold">{item?.waitedCount}</Text>
                </Col>
                <Col span={4} className="border-b py-3">
                  <Text className="font-semibold">{item?.lockName || ""}</Text>
                </Col>
              </Row>
            </div>
          );
        })}
      </Modal>
    </>
  );
};

export default JVMMetrics;
