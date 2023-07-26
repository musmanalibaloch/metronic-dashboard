import AppLayout from "./../../Layout";
import { Link } from "react-router-dom";
import { Col, Form, Input, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import ConfigurationTable from "../../components/tables/ConfigurationTable";
import { getConfigProps, getManagementEnv } from "../../services/api";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

const { Text } = Typography;

const Configuration = () => {
  const [propertySources, setPropertySources] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prefixFilter, setPrefixFilter] = useState("");

  const breadcrum = {
    pageTitle: "Configuration",
    data: [
      {
        title: <Link to="">Administration</Link>,
      },
      {
        title: "Configuration",
      },
    ],
  };

  const getAllConfigProps = async () => {
    setLoading(true);
    try {
      const { data } = await getConfigProps();
      const dataArray = Object.entries(
        data?.contexts?.testapp?.beans || {}
      ).map(([key, value]) => {
        return { key, ...value };
      });
      setTableData(dataArray);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  const getAllManagementEnv = async () => {
    setLoading(true);
    try {
      const { data } = await getManagementEnv();
      setPropertySources(data?.propertySources);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  const refresh = () => {
    getAllConfigProps();
    getAllManagementEnv();
  };

  useEffect(() => {
    refresh();
  }, []);

  const handleSearch = (val) => {
    setPrefixFilter(val);
  };

  const [searchTerm, setSearchTerm] = useState("");

  // Filter the JSON data based on the search term and prefix name
  const filteredData = tableData.filter((item) => {
    const normalizedPrefix = item.prefix.toLowerCase();
    const normalizedSearchTerm = searchTerm.toLowerCase();
    return normalizedPrefix.includes(normalizedSearchTerm);
  });

  return (
    <AppLayout breadcrum={breadcrum}>
      {loading ? (
        <div
          style={{
            height: "100vh",
            // backgroundColor: "rgba(0,0,0,0.5",
            // zIndex: 55,
          }}
          className="fixed top-0 left-0 flex justify-center items-center w-full"
        >
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <div>
          <div className="flex justify-between mb-4">
            <div>
              <Text className="text-xl font-semibold">Configuration</Text>
            </div>
          </div>
          <div>
            <Form.Item label="Filter (by prefix)" name="search">
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Item>
          </div>
          <div className="mt-7 mb-3">
            <Text className="text-2xl font-semibold">Spring configuration</Text>
          </div>
          <ConfigurationTable data={filteredData} />
          {propertySources?.map((property, i) => {
            const dataArray = Object.entries(property?.properties || {}).map(
              ([key, value]) => {
                return { key, ...value };
              }
            );
            return (
              <div key={i}>
                <div className="mt-7 mb-3">
                  <Text className="text-2xl font-semibold">
                    {property?.name}
                  </Text>
                </div>
                <Row>
                  <Col span={16} className="border p-3 rounded-tl-lg">
                    <Text className="font-bold">Property</Text>
                  </Col>
                  <Col span={8} className="border p-3 rounded-tr-lg">
                    <Text className="font-bold">Value</Text>
                  </Col>
                </Row>
                {dataArray?.map((item, j) => {
                  return (
                    <Row key={j}>
                      <Col
                        span={16}
                        className={`border p-3 ${
                          j === dataArray.length - 1 ? "rounded-bl-lg" : ""
                        } `}
                      >
                        <Text>{item?.key}</Text>
                      </Col>
                      <Col
                        span={8}
                        className={`border p-3 ${
                          j === dataArray.length - 1 ? "rounded-br-lg" : ""
                        }`}
                      >
                        <Text>{item?.value}</Text>
                      </Col>
                    </Row>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </AppLayout>
  );
};

export default Configuration;
