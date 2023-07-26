import AppLayout from "./../../Layout";
import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import { HiOutlineRefresh } from "react-icons/hi";
import HealthTable from "../../components/tables/HealthTable";
import { useEffect, useState } from "react";
import { getHealth } from "../../services/api";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

const { Text } = Typography;

const Health = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const breadcrum = {
    pageTitle: "Health",
    data: [
      {
        title: <Link to="">Administration</Link>,
      },
      {
        title: "Health",
      },
    ],
  };

  const getAllHealths = async () => {
    setLoading(true);
    try {
      const { data } = await getHealth();
      const dataArray = Object.keys(data.components).map((key) => {
        return {
          name: key,
          data: data.components[key],
        };
      });
      setTableData(dataArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllHealths();
  }, []);

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
              <Text className="text-xl font-semibold">Health Checks</Text>
            </div>
            <div className="flex items-center">
              <Button
                size="large"
                className="flex items-center border-none bg-gray-100 mr-2"
                onClick={getAllHealths}
              >
                <HiOutlineRefresh className="mr-1" />
                Refresh List
              </Button>
            </div>
          </div>
          <HealthTable data={tableData} />
        </div>
      )}
    </AppLayout>
  );
};

export default Health;
