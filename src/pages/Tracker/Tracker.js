import { useEffect, useState } from "react";
import AppLayout from "./../../Layout";
import { deleteUser, getUsers, updateUser } from "../../services/api";
import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import TrackerTable from "../../components/tables/TrackerTable";
import moment from "moment";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

const { Text } = Typography;

const Tracker = () => {
  const [tableData, setTableData] = useState([
    {
      user: "Admin",
      ipaddress: "/202.163.64.186:6209",
      currentPage: "/tracker",
      time: moment().format("DD/MM/YYYY HH:MM A"),
    },
  ]);
  const [loading, setLoading] = useState(false);

  const getAllUsers = async () => {
    setLoading(true);
    try {
      const { data } = await getUsers();
      console.log({ data });
      setTableData(data);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  useEffect(() => {
    // getAllUsers();
  }, []);

  const breadcrum = {
    pageTitle: "Tracker",
    data: [
      {
        title: <Link to="">Administration</Link>,
      },
      {
        title: "Tracker",
      },
    ],
  };

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
              <Text className="text-xl font-semibold">Tracker</Text>
            </div>
          </div>
          <TrackerTable data={tableData} />
        </div>
      )}
    </AppLayout>
  );
};

export default Tracker;
