import { MenuProps } from "antd";
import React from "react";
import {
  HomeOutlined,
  UserAddOutlined,
  TrademarkOutlined,
  LoginOutlined,
  LogoutOutlined,
  SnippetsOutlined,
  MediumOutlined,
} from "@ant-design/icons";
import { User } from "./types";
import * as routePaths from "../constants/routePaths";

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
    getItem("Home", routePaths.HOME, <HomeOutlined />),
    ...(Boolean(user)
      ? [
          getItem("Restaurants", routePaths.RESTAURANTS, <TrademarkOutlined />),
          getItem("Orders", routePaths.ORDERS, <SnippetsOutlined />),
          getItem("Meals", routePaths.MEALS, <MediumOutlined />),
          getItem("Sign out", routePaths.SIGN_OUT, <LogoutOutlined />),
        ]
      : [
          getItem("Sign up", routePaths.SIGN_UP, <UserAddOutlined />),
          getItem("Sign in", routePaths.SIGN_IN, <LoginOutlined />),
        ]),
  ];
};
