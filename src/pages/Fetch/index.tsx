/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 20:45:23
 * @lastModified  2023-05-12 23:46:17
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 20:45:23
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-12 23:46:17
 * @FilePath: \nakoruru\src\pages\Fetch\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useFetchData } from "@/hooks";
import { Table, message } from "antd";
import { useEffect } from "react";

interface TableData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns = [
  {
    title: "User ID",
    dataIndex: "userId",
    key: "userId",
    width: 100,
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Body",
    dataIndex: "body",
    key: "body",
  },
];

const Fetch: React.FC = () => {
  const { data, loading, error } = useFetchData<TableData[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );

  useEffect(() => {
    if (loading) {
      message.loading("Loading...");
    } else {
      message.destroy(); // Close any existing message
    }
  }, [loading]);

  if (error) {
    message.error("Error fetching data, please try again!");
  }

  return (
    <div>
      {data && <Table dataSource={data ?? []} columns={columns} rowKey="id" />}
    </div>
  );
};

export default Fetch;
