import React, { useEffect, useState } from "react";
import "./style/index.css";
import Register from "./authentication/components/Register";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  TrademarkOutlined,
  HomeOutlined,
  SnippetsOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Routes, Route, useNavigate } from "react-router-dom";
import * as routePaths from "./constants/routePaths";
import { items } from "./utils/menu-items";
import Login from "./authentication/components/Login";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <SideMenu />
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: window.innerHeight - 100,
          }}
        >
          <Routes>
            <Route path={routePaths.HOME} element={<div>HOME</div>} />
            <Route path={routePaths.SIGN_UP} element={<Register />} />
            <Route path={routePaths.SIGN_IN} element={<Login />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

function SideMenu() {
  const navigate = useNavigate();
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={items}
      onClick={({ key }) => {
        navigate(key);
      }}
    />
  );
}

export default App;
