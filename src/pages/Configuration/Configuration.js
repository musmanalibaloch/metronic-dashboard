import AppLayout from "./../../Layout";
import { Link } from "react-router-dom";
import { Col, Form, Input, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import ConfigurationTable from "../../components/tables/ConfigurationTable";
import { getConfigProps, getManagementEnv } from "../../services/api";

const { Text } = Typography;

const Configuration = () => {
  const [propertySources, setPropertySources] = useState([]);
  const [tableData, setTableData] = useState([]);
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
    try {
      const { data } = await getConfigProps();
      const dataArray = Object.entries(
        data?.contexts?.testapp?.beans || {}
      ).map(([key, value]) => {
        return { key, ...value };
      });
      setTableData(dataArray);
    } catch (error) {
      console.log({ error });
    }
  };

  const getAllManagementEnv = async () => {
    try {
      const { data } = await getManagementEnv();
      setPropertySources(data?.propertySources);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getAllConfigProps();
    getAllManagementEnv();
  }, []);

  return (
    <AppLayout breadcrum={breadcrum}>
      <div>
        <div className="flex justify-between mb-4">
          <div>
            <Text className="text-xl font-semibold">Configuration</Text>
          </div>
        </div>
        <div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item label="Filter (by prefix)" name="search">
              <Input />
            </Form.Item>
          </Form>
        </div>
        <div className="mt-7 mb-3">
          <Text className="text-2xl font-semibold">Spring configuration</Text>
        </div>
        <ConfigurationTable data={tableData} />
        {propertySources?.map((property, i) => {
          const dataArray = Object.entries(property?.properties || {}).map(
            ([key, value]) => {
              return { key, ...value };
            }
          );
          return (
            <div key={i}>
              <div className="mt-7 mb-3">
                <Text className="text-2xl font-semibold">{property?.name}</Text>
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
    </AppLayout>
  );
};

export default Configuration;
