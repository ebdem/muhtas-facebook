import React from "react";
import Link from "next/link";
import { Layout, Menu, Breadcrumb, Image } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  FieldTimeOutlined,
  ShrinkOutlined,
  InteractionOutlined,
  FundViewOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function MenuBar({ children, title, ...rest }) {
  const [collapsed, setCollapsed] = React.useState(false);

  const onCollapse = () => {
    console.log(collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <Layout {...rest} style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Link href="/">
          <Image
            preview={false}
            style={{
              padding: "10px",
              cursor: "pointer",
              transitionDelay: "1s",
              maxWidth: "100%",
              height: "auto",
            }}
            src="/1.svg"
          />
        </Link>

        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link href="/">Landing Page</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
            <Menu.Item key="2" icon={<TeamOutlined />}>
              <Link href="/number-of-users">Number of users</Link>
            </Menu.Item>
            <Menu.Item key="11" icon={<FieldTimeOutlined />}>
              <Link href="/number-of-users-by-years">Users by years</Link>
            </Menu.Item>
            <Menu.Item key="13" icon={<ShrinkOutlined />}>
              <Link href="/age-of-users">Age of users</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="14" icon={<FundViewOutlined />}>
            <Link href="/profile-activity">Profile activity</Link>
          </Menu.Item>
          <SubMenu
            key="sub2"
            icon={<InteractionOutlined />}
            title="Interaction"
          >
            <Menu.Item key="6">
              <Link href="/like">Like</Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link href="/share-post">Post Share</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<SmileOutlined />}>
            <Link href="/satisfaction">Satisfaction</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Facebook Analysis</Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          {" "}
          ©2021 Created by Ebubekir DEMİRAY
        </Footer>
      </Layout>
    </Layout>
  );
}
