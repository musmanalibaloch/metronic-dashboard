import { Button, Col, Progress, Row, Typography } from "antd";

const { Text } = Typography;
const HTTP = ({ httpData }) => {
  const dataArray = Object.entries(httpData?.percode || {}).map(
    ([status, stats]) => {
      return { status: parseInt(status), ...stats };
    }
  );
  return (
    <>
      <div className="w-full flex flex-col mt-3">
        <Text className="">
          Total requests: <span className="ml-3">{httpData?.all?.count}</span>
        </Text>
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
      {dataArray?.map((item, i) => {
        return (
          <Row key={i} gutter={16} className="border-b py-2">
            <Col span={5}>
              <Text className="">{item?.status}</Text>
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
              <Text className="">{item?.mean.toFixed(2)}</Text>
            </Col>
            <Col span={5} className="text-center">
              <Text className="">{item?.max.toFixed(2)}</Text>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default HTTP;
