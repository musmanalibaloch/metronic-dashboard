import { Button, Col, Progress, Row, Typography } from "antd";

const { Text } = Typography;
const Endpoints = ({ endPointsData }) => {
  const dataArray = Object.entries(endPointsData || {}).map(
    ([url, methods]) => {
      const methodStats = Object.entries(methods).map(([method, stats]) => {
        return { method, ...stats };
      });

      return { url, methodStats: methodStats };
    }
  );

  return (
    <>
      <Row gutter={16} className="mt-5 border-b py-2">
        <Col span={5}>
          <Text className="font-semibold">Method</Text>
        </Col>
        <Col span={9}>
          <Text className="font-semibold">Endpoint url</Text>
        </Col>
        <Col span={5} className="text-center">
          <Text className="font-semibold">Count</Text>
        </Col>
        <Col span={5} className="text-center">
          <Text className="font-semibold">Mean</Text>
        </Col>
      </Row>
      {dataArray?.map((item, i) => {
        return item?.methodStats?.map((method, j) => {
          return (
            <Row key={i} gutter={16} className="border-b py-2">
              <Col span={5}>
                <Text className="">{method?.method}</Text>
              </Col>
              <Col span={9}>{item?.url}</Col>
              <Col span={5} className="text-center">
                <Text className="">{method?.count}</Text>
              </Col>
              <Col span={5} className="text-center">
                <Text className="">{method?.mean.toFixed()}</Text>
              </Col>
            </Row>
          );
        });
      })}
    </>
  );
};

export default Endpoints;
