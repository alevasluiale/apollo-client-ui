import React, { useEffect, useState } from "react";
import "./style/index.css";
import Register from "./authentication/components/Register";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Routes, Route, useNavigate } from "react-router-dom";
import * as routePaths from "./constants/routePaths";
import { items } from "./utils/menu-items";
import Login from "./authentication/components/Login";
import { useTypedSelector } from "./redux/useTypedSelector";
import { setUser } from "./authentication/reducers/authentication";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const user = useTypedSelector((store) => store.authentication.user);
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={items(Boolean(user))}
      onClick={({ key }) => {
        if (key === routePaths.SIGN_OUT) {
          dispatch(setUser(null));
          navigate("/");
        } else navigate(key);
      }}
    />
  );
}

export default App;
