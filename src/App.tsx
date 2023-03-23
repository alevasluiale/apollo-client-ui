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
import { Route, Switch, Link, useHistory } from "react-router-dom";
import * as routePaths from "./constants/routePaths";

const { Header, Sider, Content } = Layout;

function App() {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);

  const goToPage = (path: String) => {
    history.push(path);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="home"
            // icon={<HomeOutlined />}
            // onClick={() => goToPage(routePaths.HOME)}
          >
            <Link to={routePaths.HOME}>
              <span>Home</span>
              <HomeOutlined />
            </Link>
          </Menu.Item>
          <Menu.Item
            key="signup"
            // icon={<VideoCameraOutlined />}
            // onClick={() => goToPage(routePaths.SIGN_UP)}
          >
            <Link to={routePaths.SIGN_UP}>
              <span>Sign Up</span>
              <HomeOutlined />
            </Link>
          </Menu.Item>
        </Menu>
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
          <Switch>
            <Route
              exact
              path={routePaths.HOME}
              render={() => <div>HOME</div>}
            />
            <Route exact path={routePaths.SIGN_UP} component={Register} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
