import { Table } from "antd";
import dynamic from "next/dynamic";
const WorldNumbers = dynamic(() => import("./chart"), {
  ssr: false,
});

export default function NumberOfUsersComponent() {
  const columns = [
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      render: (text) => (
        <a
          style={{
            fontSize: "0.8rem",
            fontWeight: "bold",
            color: "lightsalmon",
          }}
        >
          {text}
        </a>
      ),
    },
    {
      title: "Number of Users",
      dataIndex: "users",
      key: "users",
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "region",
    },
  ];
  const data = [
    {
      key: "1",
      country: "Turkey",
      users: 798148,
      region: "Europe",
    },
    {
      key: "2",
      country: "France",
      users: 864836,
      region: "Europe",
    },
    {
      key: "3",
      country: "Korea",
      users: 748374,
      region: "Asia",
    },
    {
      key: "4",
      country: "Italy",
      users: 840384,
      region: "Europe",
    },
  ];
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Table pagination={false} columns={columns} dataSource={data} />
      </div>
      <WorldNumbers />
    </>
  );
}
