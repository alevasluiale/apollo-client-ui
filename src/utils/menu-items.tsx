import { MenuProps } from "antd";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

// const get;

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

export const items: MenuItem[] = [getItem("Option 1", "1")];
