import { useEffect, useState } from "react";
import AppLayout from "./../../Layout";
import { deleteEmployee, getUsers, updateEmployee } from "../../services/api";
import UserTable from "../../components/tables/UserTable";

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

  return (
    <AppLayout>
      <div>
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
