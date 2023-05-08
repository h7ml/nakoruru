/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 20:45:23
 * @lastModified  2023-05-08 21:04:50
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 20:45:23
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-08 21:04:47
 * @FilePath: \reactflow-mind-map\src\pages\Fetch\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
import { useFetchData } from "@/hooks";
import { Table, message } from "antd";
import { useEffect } from "react";

const Fetch = () => {
  const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts');


  useEffect(() => {
    if (loading) {
      message.loading("Loading...");
    } else {
      message.destroy(); // Close any existing message
    }
  }, [loading])


  if (error) {
    message.error("Error fetching data, please try again!");
  }

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body"
    }
  ];

  return (
    <div>
      <h1>Fetch</h1>
      {data && (
        <Table dataSource={data as Array<Object>} columns={columns} rowKey="id" />
      )}
    </div>
  );
};

export default Fetch;