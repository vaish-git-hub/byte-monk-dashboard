import React from 'react';
import { Table } from 'antd';

const TableView = ({ data }) => {
  // Debugging: Log the data being passed to the component
  console.log("Data received by TableView:", data);

  const columns = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
      render: (text) => text || 'N/A',  // Show 'N/A' if 'user' field is missing
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (text) => text || 'N/A',
    },
    {
      title: 'Activity',
      dataIndex: 'activityCount',
      key: 'activityCount',
      render: (text) => text || 0,
    },
  ];

  return <Table dataSource={data} columns={columns} rowKey={(record) => record.id || record.category} />;
};

export default TableView;
