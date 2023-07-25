import { Button, Col, Progress, Row, Typography } from "antd";

const { Text } = Typography;
const DataSource = ({ databasesData }) => {
  const dataArray = Object.entries(databasesData || {}).map(([key, value]) => {
    return { key, ...value };
  });
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
      {dataArray?.map((item, i) => {
        return (
          <Row className="py-3 border-b">
            <Col span={12}>{item?.key}</Col>
            <Col span={2}>
              <Text>{item?.count?.toFixed(2) || 0}</Text>
            </Col>
            <Col span={2}>
              <Text>{item?.mean?.toFixed(2) || 0}</Text>
            </Col>
            <Col span={2}>
              <Text>{item?.min?.toFixed(2) || 0}</Text>
            </Col>
            <Col span={2}>
              <Text>{item?.["0.5"] || 0}</Text>
            </Col>
            <Col span={1}>
              <Text>{item?.["0.75"] || 0}</Text>
            </Col>
            <Col span={1}>
              <Text>{item?.["0.95"] || 0}</Text>
            </Col>
            <Col span={1}>
              <Text>{item?.["0.99"] || 0}</Text>
            </Col>
            <Col span={1}>
              <Text>{item?.max?.toFixed(2) || 0}</Text>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default DataSource;
