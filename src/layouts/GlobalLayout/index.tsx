import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

interface GlobalLayoutProps {}

const GlobalLayout = ({}: GlobalLayoutProps) => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Layout.Header>
        <Menu mode="horizontal">
          <Menu.Item key="home" onClick={() => navigate("/")}>
            Home
          </Menu.Item>
          <Menu.Item
            key="today"
            onClick={() => navigate("/today")}
            data-test-id="today_menu_item"
          >
            Today
          </Menu.Item>
          <Menu.Item
            key="newTodo"
            onClick={() => navigate("/add")}
            children={"New Todo"}
          />
        </Menu>
      </Layout.Header>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default GlobalLayout;
