import { useEffect, useState } from "react";
import AppLayout from "./../../Layout";
import { deleteEmployee, getUsers, updateEmployee } from "../../services/api";
import UserTable from "../../components/tables/UserTable";
import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import { HiOutlinePlusSm, HiOutlineRefresh } from "react-icons/hi";

const { Text } = Typography;

const User = () => {
  const [tableData, setTableData] = useState([]);

  const getAllUsers = async () => {
    try {
      const { data } = await getUsers();
      console.log({ data });
      setTableData(data);
    } catch (error) {
      console.log({ error });
    }
  };

  const updateRecord = async (id, values) => {
    try {
      const { data } = await updateEmployee(id, values);
      console.log({ data });
      getAllUsers();
    } catch (error) {}
  };

  const deleteRecord = async (id) => {
    try {
      const { data } = await deleteEmployee(id);
      console.log({ data });
      getAllUsers();
    } catch (error) {}
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
      <div>
        <div className="flex justify-between mb-4">
          <div>
            <Text className="text-xl font-semibold">Users List</Text>
          </div>
          <div className="flex items-center">
            <Button
              size="large"
              className="flex items-center border-none bg-gray-100 mr-2"
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
    </AppLayout>
  );
};

export default User;
