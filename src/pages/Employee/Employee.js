import { useEffect, useState } from "react";
import AppLayout from "./../../Layout";
import {
  deleteEmployee,
  getEmployees,
  updateEmployee,
} from "../../services/api";
import EmployeeTable from "../../components/tables/EmployeeTable";
import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import { HiOutlinePlusSm, HiOutlineRefresh } from "react-icons/hi";

const { Text } = Typography;

const Employee = () => {
  const [tableData, setTableData] = useState([]);

  const getAllEmployees = async () => {
    try {
      const { data } = await getEmployees();
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
      getAllEmployees();
    } catch (error) {}
  };

  const deleteRecord = async (id) => {
    try {
      const { data } = await deleteEmployee(id);
      console.log({ data });
      getAllEmployees();
    } catch (error) {}
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  const breadcrum = {
    pageTitle: "Employees",
    data: [
      {
        title: <Link to="">Entities</Link>,
      },
      {
        title: "Employees",
      },
    ],
  };

  return (
    <AppLayout breadcrum={breadcrum}>
      <div>
        <div className="flex justify-between mb-4">
          <div>
            <Text className="text-xl font-semibold">Employees List</Text>
          </div>
          <div className="flex items-center">
            <Button
              size="large"
              className="flex items-center border-none bg-gray-100 mr-2"
              onClick={getAllEmployees}
            >
              <HiOutlineRefresh className="mr-1" />
              Refresh List
            </Button>
            <Button
              size="large"
              className="flex items-center border-none bg-blue-500 text-white opacity-80"
            >
              <HiOutlinePlusSm className="mr-1" />
              Create Employee
            </Button>
          </div>
        </div>
        <EmployeeTable
          onUpdate={updateRecord}
          onDelete={deleteRecord}
          data={tableData}
        />
      </div>
    </AppLayout>
  );
};

export default Employee;
