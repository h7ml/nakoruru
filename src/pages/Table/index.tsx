import { useRequest } from 'ahooks';
import { Table } from 'antd';
interface ResponseProps {
  response: {
    code: number;
    data: Array<Record<string, unknown>>;
    message: string;
  };
}
function getUsername(): Promise<ResponseProps> {
  return fetch('/api/system/user?page=1&limit=50').then((res) => res.json());
}

export const TableInfo = () => {
  const { data, error, loading } = useRequest(getUsername);
  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  const columns = [
    {
      title: 'name',
      dataIndex: ['id'],
    },
    {
      title: 'lastName',
      dataIndex: 'lastName',
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'department',
      dataIndex: 'department',
    },
  ];
  if (!data) return null;
  const dataInfo = { list: data.response.data, total: data.response.data.length }
  return (
    <Table columns={columns} rowKey="email" dataSource={dataInfo.list} />
  );
};

export default TableInfo;
