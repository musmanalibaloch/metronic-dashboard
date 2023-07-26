import { useEffect, useState } from "react";
import AppLayout from "./../../Layout";
import {
  createUsers,
  deleteEmployee,
  deleteUser,
  getUsers,
  updateEmployee,
  updateUser,
} from "../../services/api";
import UserTable from "../../components/tables/UserTable";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Typography,
} from "antd";
import { HiOutlinePlusSm, HiOutlineRefresh } from "react-icons/hi";
import { DownOutlined, LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

const { Text } = Typography;

const User = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const getAllUsers = async () => {
    setLoading(true);
    try {
      const { data } = await getUsers();
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
      const { data } = await updateUser({ id, ...values });
      getAllUsers();
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  const deleteRecord = async (email) => {
    setLoading(true);
    try {
      const { data } = await deleteUser(email);
      getAllUsers();
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
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

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { data } = await createUsers(values);
      setOpen(false);
      getAllUsers();
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
              <Text className="text-xl font-semibold">Users List</Text>
            </div>
            <div className="flex items-center">
              <Button
                size="large"
                className="flex items-center border-none bg-gray-100 mr-2"
                onClick={getAllUsers}
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
                Create User
              </Button>
            </div>
          </div>
          <UserTable
            onUpdate={updateRecord}
            onDelete={deleteRecord}
            data={tableData}
          />
          <Modal
            title="Create User"
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
                label="Login"
                name="login"
                rules={[
                  { required: true, message: "Please input your login!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Activated"
                name="activated"
                rules={[
                  { required: true, message: "Please input your activated!" },
                ]}
              >
                <Checkbox />
              </Form.Item>

              <Form.Item
                label="Language"
                name="langKey"
                rules={[
                  { required: true, message: "Please input your language!" },
                ]}
              >
                <Select
                  defaultValue="English"
                  options={[{ value: "English", label: "English" }]}
                />
              </Form.Item>

              <Form.Item
                label="Profile"
                name="authorities"
                rules={[
                  { required: true, message: "Please input your profile!" },
                ]}
              >
                <Select
                  defaultValue="ROLE_USER"
                  options={[
                    { value: "ROLE_USER", label: "ROLE_USER" },
                    { value: "ROLE_ADMIN", label: "ROLE_ADMIN" },
                  ]}
                />
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

export default User;
