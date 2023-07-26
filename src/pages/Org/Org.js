import { useEffect, useState } from "react";
import OrgTable from "../../components/tables/OrgTable";
import AppLayout from "./../../Layout";
import { createOrg, deleteOrgs, getOrgs, updateOrgs } from "../../services/api";
import { Link } from "react-router-dom";
import { Button, Form, Input, Modal, Typography } from "antd";
import { HiOutlinePlusSm, HiOutlineRefresh } from "react-icons/hi";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import TextArea from "antd/es/input/TextArea";

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

const { Text } = Typography;

const Org = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const getAllOrgs = async () => {
    setLoading(true);
    try {
      const { data } = await getOrgs();
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
      const { data } = await updateOrgs(id, values);
      console.log({ data });
      getAllOrgs();
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  };

  const deleteRecord = async (id) => {
    setLoading(true);
    try {
      const { data } = await deleteOrgs(id);
      console.log({ data });
      getAllOrgs();
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
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

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { data } = await createOrg(values);
      getAllOrgs();
      setOpen(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
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
              <Text className="text-xl font-semibold">Organizations List</Text>
            </div>
            <div className="flex items-center">
              <Button
                size="large"
                className="flex items-center border-none bg-gray-100 mr-2"
                onClick={getAllOrgs}
              >
                <HiOutlineRefresh className="mr-1" />
                Refresh List
              </Button>
              <Button
                size="large"
                className="flex items-center border-none bg-blue-500 text-white opacity-80"
                onClick={() => setOpen(true)}
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
          <Modal
            title="Create Organization"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
            footer={false}
          >
            <Form
              name="createRecord"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: "Please input your city!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Description"
                name="description"
                rules={[
                  { required: true, message: "Please input your description!" },
                ]}
              >
                <TextArea />
              </Form.Item>

              <Form.Item
                label="Vertical"
                name="vertical"
                rules={[
                  { required: true, message: "Please input your vertical!" },
                ]}
              >
                <Input />
              </Form.Item>
              <div className="flex justify-end w-full pr-6">
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button htmlType="submit">Submit</Button>
                </Form.Item>
              </div>
            </Form>
          </Modal>
        </div>
      )}
    </AppLayout>
  );
};

export default Org;
