import React, { useState } from "react";
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Button,
  theme,
  Divider,
  Breadcrumb,
  Avatar,
  Dropdown,
  Typography,
} from "antd";
import logo from "./../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { GoOrganization } from "react-icons/go";
import { LiaUsersCogSolid } from "react-icons/lia";
import { PiGraphLight, PiUsersThree } from "react-icons/pi";
import { BsCardChecklist } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { CgTrack } from "react-icons/cg";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

export default function AppLayout({ children, breadcrum }) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer">
          Sign out
        </a>
      ),
    },
  ];

  const selectedKeys =
    window.location.pathname === "/org"
      ? ["2", "3"]
      : window.location.pathname === "/employee"
      ? ["2", "4"]
      : window.location.pathname === "/user"
      ? ["5", "6"]
      : window.location.pathname === "/tracker"
      ? ["5", "7"]
      : window.location.pathname === "/metrics"
      ? ["5", "8"]
      : window.location.pathname === "/health"
      ? ["5", "9"]
      : null;

  return (
    <Layout>
      <Sider
        style={{
          minHeight: "100vh",
          position: "fixed",
          zIndex: 51,
          top: 64,
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="">
          <div className="demo-logo-vertical" />

          {/* <Divider className="bg-gray-500 -mt-1 mb-5" /> */}
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["2", "5"]}
            selectedKeys={selectedKeys}
            items={[
              {
                key: "1",
                icon: <DashboardOutlined />,
                label: "Dashboard",
              },
              {
                key: "2",
                icon: <BsCardChecklist />,
                label: "Entities",
                children: [
                  {
                    key: "3",
                    icon: <GoOrganization />,
                    label: "Organizations",
                    onClick: () => navigate("/org"),
                  },
                  {
                    key: "4",
                    icon: <LiaUsersCogSolid />,
                    label: "Employees",
                    onClick: () => navigate("/employee"),
                  },
                ],
              },
              {
                key: "5",
                icon: <RiUserSettingsLine />,
                label: "Administration",
                children: [
                  {
                    key: "6",
                    icon: <PiUsersThree />,
                    label: "Users",
                    onClick: () => navigate("/user"),
                  },
                  {
                    key: "7",
                    icon: <CgTrack />,
                    label: "Tracker",
                    onClick: () => navigate("/tracker"),
                  },
                  {
                    key: "8",
                    icon: <PiGraphLight />,
                    label: "Metrics",
                    onClick: () => navigate("/metrics"),
                  },
                  {
                    key: "9",
                    icon: <MdOutlineHealthAndSafety />,
                    label: "Health",
                    onClick: () => navigate("/health"),
                  },
                ],
              },
            ]}
          />
        </div>
      </Sider>

      <Layout>
        <Header
          className="fixed w-full z-50"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <div className="flex items-center w-full">
            <div
              style={{ width: "200px", backgroundColor: "#171a21" }}
              className="py-4"
            >
              <img style={{ height: 35 }} src={logo} alt="" />
            </div>
            <Button
              className="mr-2"
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <div className="flex justify-between items-center w-9/12">
              <div className="flex flex-col">
                <Text className="font-bold text-md -mt-1">
                  {breadcrum.pageTitle}
                </Text>
                <Breadcrumb items={breadcrum.data} />
              </div>
              <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                <Avatar
                  shape="square"
                  size="large"
                  className="flex justify-center items-center"
                  icon={<UserOutlined />}
                />
              </Dropdown>
            </div>
          </div>
        </Header>
        <div className="flex">
          <div
            style={{
              minWidth: `${collapsed ? "80px" : "200px"}`,
              maxWidth: `${collapsed ? "80px" : "200px"}`,
              width: `${collapsed ? "80px" : "200px"}`,
              transition: "0.3s",
            }}
          ></div>
          <Content
            style={{
              margin: "82px 16px",
              borderRadius: 9,
              padding: 24,
              background: colorBgContainer,
              minHeight: "74.8vh",
            }}
          >
            {children}
          </Content>
        </div>
      </Layout>
    </Layout>
  );
}
