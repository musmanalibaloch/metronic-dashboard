import { useEffect, useState } from "react";
import AppLayout from "./../../Layout";
import {
  deleteEmployee,
  deleteUser,
  getUsers,
  updateEmployee,
  updateUser,
} from "../../services/api";
import UserTable from "../../components/tables/UserTable";
import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import { HiOutlinePlusSm, HiOutlineRefresh } from "react-icons/hi";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

const { Text } = Typography;

const User = () => {
  const [tableData, setTableData] = useState([]);
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

  const updateRecord = async (id, values) => {
    setLoading(true);
    try {
      const { data } = await updateUser({ id, ...values });
      getAllUsers();
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  const deleteRecord = async (email) => {
    setLoading(true);
    try {
      const { data } = await deleteUser(email);
      getAllUsers();
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const breadcrum = {
    pageTitle: "Users",
    data: [
      {
        title: <Link to="">Administration</Link>,
      },
      {
        title: "Users",
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
              <Text className="text-xl font-semibold">Users List</Text>
            </div>
            <div className="flex items-center">
              <Button
                size="large"
                className="flex items-center border-none bg-gray-100 mr-2"
                onClick={getAllUsers}
              >
                <HiOutlineRefresh className="mr-1" />
                Refresh List
              </Button>
              <Button
                size="large"
                className="flex items-center border-none bg-blue-500 text-white opacity-80"
              >
                <HiOutlinePlusSm className="mr-1" />
                Create User
              </Button>
            </div>
          </div>
          <UserTable
            onUpdate={updateRecord}
            onDelete={deleteRecord}
            data={tableData}
          />
        </div>
      )}
    </AppLayout>
  );
};

export default User;
