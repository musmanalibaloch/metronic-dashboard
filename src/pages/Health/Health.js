import AppLayout from "./../../Layout";
import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import { HiOutlineRefresh } from "react-icons/hi";
import HealthTable from "../../components/tables/HealthTable";
import { useEffect, useState } from "react";
import { getHealth } from "../../services/api";

const { Text } = Typography;

const Health = () => {
  const [tableData, setTableData] = useState([]);
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
    try {
      const { data } = await getHealth();
      const dataArray = Object.keys(data.components).map((key) => {
        return {
          name: key,
          data: data.components[key],
        };
      });
      console.log({ dataArray });
      setTableData(dataArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllHealths();
  }, []);

  return (
    <AppLayout breadcrum={breadcrum}>
      <div>
        <div className="flex justify-between mb-4">
          <div>
            <Text className="text-xl font-semibold">Health Checks</Text>
          </div>
          <div className="flex items-center">
            <Button
              size="large"
              className="flex items-center border-none bg-gray-100 mr-2"
            >
              <HiOutlineRefresh className="mr-1" />
              Refresh List
            </Button>
          </div>
        </div>
        <HealthTable data={tableData} />
      </div>
    </AppLayout>
  );
};

export default Health;
