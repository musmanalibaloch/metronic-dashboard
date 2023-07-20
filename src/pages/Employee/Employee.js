import { useEffect, useState } from "react";
import AppLayout from "./../../Layout";
import { getEmployees } from "../../services/api";
import EmployeeTable from "../../components/tables/EmployeeTable";

const Employee = () => {
  const [tableData, setTableData] = useState([]);

  const getAllOrgs = async () => {
    try {
      const { data } = await getEmployees();
      console.log({ data });
      setTableData(data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getAllOrgs();
  }, []);

  return (
    <AppLayout>
      <div>
        <EmployeeTable data={tableData} />
      </div>
    </AppLayout>
  );
};

export default Employee;
