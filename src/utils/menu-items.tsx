import { MenuProps } from "antd";
import React from "react";
import { HomeOutlined, VideoCameraOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const items = function (userLoggedIn: boolean): MenuItem[] {
  return [
    getItem("Home", "/", <HomeOutlined />),
    ...(userLoggedIn
      ? [getItem("Sign out", "/sign-out", <VideoCameraOutlined />)]
      : [
          getItem("Sign up", "/sign-up", <VideoCameraOutlined />),
          getItem("Sign in", "/sign-in", <VideoCameraOutlined />),
        ]),
  ];
};
