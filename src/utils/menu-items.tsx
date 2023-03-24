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

export const items: MenuItem[] = [
  getItem("Home", "/", <HomeOutlined />),
  getItem("Sign up", "/sign-up", <VideoCameraOutlined />),
  getItem("Log in", "/sign-in", <VideoCameraOutlined />),
];
