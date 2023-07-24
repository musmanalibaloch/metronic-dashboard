import { Col, Row, Typography } from "antd";

const { Text } = Typography;
const CacheStatistics = ({ cacheData }) => {
  const dataArray = Object.entries(cacheData || {}).map(([key, value]) => {
    return { key, ...value };
  });

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
      {dataArray?.map((item, i) => {
        return (
          <Row gutter={16} className="border-b py-2">
            <Col span={9}>
              <Text className="">{item?.key}</Text>
            </Col>
            <Col span={3} className="text-center">
              <Text className="">{item?.["cache.gets.hit"]}</Text>
            </Col>
            <Col span={3} className="text-center">
              <Text className="">{item?.["cache.gets.miss"]}</Text>
            </Col>
            <Col span={3} className="text-center">
              <Text className="">
                {item?.["cache.gets.hit"] + item?.["cache.gets.miss"]}
              </Text>
            </Col>
            <Col span={3} className="text-center">
              <Text className="">
                {(
                  (item?.["cache.gets.hit"] /
                    (item?.["cache.gets.hit"] + item?.["cache.gets.miss"])) *
                  100
                ).toFixed(2) || 0}
              </Text>
            </Col>
            <Col span={3} className="text-center">
              <Text className="">
                {(
                  (item?.["cache.gets.miss"] /
                    (item?.["cache.gets.hit"] + item?.["cache.gets.miss"])) *
                  100
                ).toFixed(2) || 0}
              </Text>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default CacheStatistics;
