import React, { useEffect, useState } from "react";
import { Table } from "antd";

const TrackerTable = ({ data }) => {
  const columns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "IP Address",
      dataIndex: "ipaddress",
      key: "ipaddress",
    },
    {
      title: "Current page",
      key: "currentPage",
      dataIndex: "currentPage",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};

export default TrackerTable;
