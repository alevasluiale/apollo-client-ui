import React, { useEffect, useMemo, useState } from "react";
import "./style/index.css";
import Register from "./components/authentication/components/Register";
import { Layout, Menu, message } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import * as routePaths from "./constants/routePaths";
import { items } from "./utils/menu-items";
import Login from "./components/authentication/components/Login";
import RestaurantList from "./components/restaurants/components/RestaurantList";
import { User } from "./utils/types";
import { useLocalStorage } from "usehooks-ts";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [user] = useLocalStorage("user", null as User);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <SideMenu />
      </Sider>

      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div style={{ paddingRight: "1rem" }}>{user?.email}</div>
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
            <Route
              path={routePaths.HOME}
              element={
                <div className="container -mt-10 mx-auto">
                  <img alt="" src="food.jpg"></img>
                </div>
              }
            />
            <Route
              path={routePaths.RESTAURANTS}
              element={<RestaurantList user={user} />}
            />
            <Route path={routePaths.SIGN_UP} element={<Register />} />
            <Route
              path={routePaths.SIGN_IN}
              element={
                Boolean(user) ? <Navigate to={"/"} replace /> : <Login />
              }
            />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

function SideMenu() {
  const [user, setUserData] = useLocalStorage("user", null as User);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const signOut = () => {
    setUserData(null);
    navigate("/");
    message.destroy();
    message.success("User signed out", 2);
  };
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={useMemo(() => items(user), [user])}
      onClick={({ key }) => {
        if (key === routePaths.SIGN_OUT) {
          signOut();
        } else navigate(key);
      }}
    />
  );
}

export default App;
