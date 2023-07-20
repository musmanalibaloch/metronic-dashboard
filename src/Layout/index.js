import React, { useState } from "react";
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Divider } from "antd";
import logo from "./../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { GoOrganization } from "react-icons/go";
import { LiaUsersCogSolid } from "react-icons/lia";

const { Header, Sider, Content } = Layout;

export default function AppLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="fixed z-50">
          <div className="demo-logo-vertical" />
          <div className="py-4">
            <img src={logo} alt="" />
          </div>
          <Divider className="bg-gray-500 -mt-1 mb-5" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "3",
                icon: <DashboardOutlined />,
                label: "Dashboard",
              },
              {
                key: "1",
                icon: <GoOrganization />,
                label: "Organizations",
                onClick: () => navigate("/org"),
              },
              {
                key: "2",
                icon: <LiaUsersCogSolid />,
                label: "Employees",
                onClick: () => navigate("/org"),
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
