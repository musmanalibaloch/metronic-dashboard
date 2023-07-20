import { useEffect, useState } from "react";
import OrgTable from "../../components/tables/OrgTable";
import AppLayout from "./../../Layout";
import { getOrgs } from "../../services/api";

const Org = () => {
  const [tableData, setTableData] = useState([]);

  const getAllOrgs = async () => {
    try {
      const { data } = await getOrgs();
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
        <OrgTable data={tableData} />
      </div>
    </AppLayout>
  );
};

export default Org;
