import { useEffect, useState } from "react";
import AppLayout from "./../../Layout";
import {
  deleteEmployee,
  getEmployees,
  updateEmployee,
} from "../../services/api";
import EmployeeTable from "../../components/tables/EmployeeTable";

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

  return (
    <AppLayout>
      <div>
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
