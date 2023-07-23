import { useEffect, useState } from "react";
import AppLayout from "./../../Layout";
import { deleteUser, getUsers, updateUser } from "../../services/api";
import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import TrackerTable from "../../components/tables/TrackerTable";
import moment from "moment";

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

  const getAllUsers = async () => {
    try {
      const { data } = await getUsers();
      console.log({ data });
      setTableData(data);
    } catch (error) {
      console.log({ error });
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
      <div>
        <div className="flex justify-between mb-4">
          <div>
            <Text className="text-xl font-semibold">Tracker</Text>
          </div>
        </div>
        <TrackerTable data={tableData} />
      </div>
    </AppLayout>
  );
};

export default Tracker;
