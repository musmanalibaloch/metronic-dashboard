import { useEffect, useState } from "react";
import OrgTable from "../../components/tables/OrgTable";
import AppLayout from "./../../Layout";
import { deleteOrgs, getOrgs, updateOrgs } from "../../services/api";
import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import { HiOutlinePlusSm, HiOutlineRefresh } from "react-icons/hi";

const { Text } = Typography;

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

  const breadcrum = {
    pageTitle: "Organization",
    data: [
      {
        title: <Link to="">Entities</Link>,
      },
      {
        title: "Organizations",
      },
    ],
  };

  return (
    <AppLayout breadcrum={breadcrum}>
      <div>
        <div className="flex justify-between mb-4">
          <div>
            <Text className="text-xl font-semibold">Organizations List</Text>
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
              Create Org
            </Button>
          </div>
        </div>
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
