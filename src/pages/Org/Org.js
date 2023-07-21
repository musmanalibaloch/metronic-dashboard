import { useEffect, useState } from "react";
import OrgTable from "../../components/tables/OrgTable";
import AppLayout from "./../../Layout";
import { deleteOrgs, getOrgs, updateOrgs } from "../../services/api";
import { Link } from "react-router-dom";

const Org = () => {
  const [tableData, setTableData] = useState([]);

  const getAllOrgs = async () => {
    try {
      const { data } = await getOrgs();
      setTableData(data);
    } catch (error) {
      console.log({ error });
    }
  };

  const updateRecord = async (id, values) => {
    try {
      const { data } = await updateOrgs(id, values);
      console.log({ data });
      getAllOrgs();
    } catch (error) {}
  };

  const deleteRecord = async (id) => {
    try {
      const { data } = await deleteOrgs(id);
      console.log({ data });
      getAllOrgs();
    } catch (error) {}
  };

  useEffect(() => {
    getAllOrgs();
  }, []);

  return (
    <AppLayout
      breadcrum={[
        {
          title: <Link to="">Entities</Link>,
        },
        {
          title: "Org",
        },
      ]}
    >
      <div>
        <OrgTable
          onDelete={deleteRecord}
          onUpdate={updateRecord}
          data={tableData}
        />
      </div>
    </AppLayout>
  );
};

export default Org;
