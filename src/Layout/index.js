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
} from "antd";
import logo from "./../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { GoOrganization } from "react-icons/go";
import { LiaUsersCogSolid } from "react-icons/lia";
import { PiUsersThree } from "react-icons/pi";
import { BsCardChecklist } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";

const { Header, Sider, Content } = Layout;

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
      : null;
  return (
    <Layout>
      <Sider
        style={{
          minHeight: "100vh",
          position: "fixed",
          zIndex: 51,
          top: 0,
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="">
          <div className="demo-logo-vertical" />
          <div className="py-4">
            <img src={logo} alt="" />
          </div>
          <Divider className="bg-gray-500 -mt-1 mb-5" />
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
                // onClick: () => navigate("/org"),
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
                onClick: () => navigate("/user"),
                children: [
                  {
                    key: "5",
                    icon: <PiUsersThree />,
                    label: "Users",
                    onClick: () => navigate("/user"),
                  },
                ],
              },
            ]}
          />
        </div>
      </Sider>
      <div
        style={{
          minWidth: `${collapsed ? "80px" : "200px"}`,
          maxWidth: `${collapsed ? "80px" : "200px"}`,
          width: `${collapsed ? "80px" : "200px"}`,
          transition: "0.3s",
        }}
      ></div>
      <Layout>
        <Header
          className="fixed w-full z-50"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <div className="flex items-center">
            <Button
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
              <Breadcrumb items={breadcrum} />
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
        <Content
          style={{
            margin: "82px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
