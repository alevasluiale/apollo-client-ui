import { Space, Spin } from "antd";
import React from "react";

function Spinner() {
  const style = {
    position: "fixed" as "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
  };
  return (
    <Space direction="vertical" style={style}>
      <Spin tip="Authenticating user" size="large">
        <div className="content" />
      </Spin>
    </Space>
  );
}

export default Spinner;
