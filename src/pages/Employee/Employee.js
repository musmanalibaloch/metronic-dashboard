import { useEffect, useState } from "react";
import AppLayout from "./../../Layout";
import {
  createEmployees,
  deleteEmployee,
  getEmployees,
  updateEmployee,
} from "../../services/api";
import EmployeeTable from "../../components/tables/EmployeeTable";
import { Link } from "react-router-dom";
import { Button, Form, Input, InputNumber, Modal, Typography } from "antd";
import { HiOutlinePlusSm, HiOutlineRefresh } from "react-icons/hi";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

const { Text } = Typography;

const Employee = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const getAllEmployees = async () => {
    setLoading(true);
    try {
      const { data } = await getEmployees();
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
      const { data } = await updateEmployee(id, values);
      console.log({ data });
      getAllEmployees();
    } catch (error) {
      console.olog({ error });
      setLoading(false);
    }
  };

  const deleteRecord = async (id) => {
    setLoading(true);
    try {
      const { data } = await deleteEmployee(id);
      console.log({ data });
      getAllEmployees();
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
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

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { data } = await createEmployees(values);
      setOpen(false);
      getAllEmployees();
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  const validateAge = (_, value) => {
    if (value && value <= 17) {
      return Promise.reject("Age must be at least 18!");
    }
    return Promise.resolve();
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
                onClick={() => setOpen(true)}
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

          <Modal
            title="Create Employee"
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
                label="First Name"
                name="firstname"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastname"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Age"
                name="age"
                rules={[
                  { required: true, message: "Please input your age!" },
                  { validator: validateAge },
                ]}
              >
                <InputNumber className="w-full" />
              </Form.Item>
              <Form.Item
                label="Skills"
                name="skills"
                rules={[
                  { required: true, message: "Please input your skills!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Title"
                name="title"
                rules={[
                  { required: true, message: "Please input your title!" },
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

export default Employee;
