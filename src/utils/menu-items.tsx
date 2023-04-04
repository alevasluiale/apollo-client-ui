import { MenuProps } from "antd";
import React from "react";
import {
  HomeOutlined,
  UserAddOutlined,
  TrademarkOutlined,
  LoginOutlined,
  LogoutOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { User } from "./types";

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

export const items = function (user: User | null): MenuItem[] {
  return [
    getItem("Home", "/", <HomeOutlined />),
    ...(Boolean(user)
      ? [
          getItem("Restaurants", "/restaurants", <TrademarkOutlined />),
          getItem("Orders", "/orders", <SnippetsOutlined />),
          getItem("Sign out", "/sign-out", <LogoutOutlined />),
        ]
      : [
          getItem("Sign up", "/sign-up", <UserAddOutlined />),
          getItem("Sign in", "/sign-in", <LoginOutlined />),
        ]),
  ];
};
