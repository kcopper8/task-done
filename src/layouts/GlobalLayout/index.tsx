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
            key="done"
            onClick={() => navigate("/done")}
            data-test-id="done_menu_item"
          >
            Done
          </Menu.Item>
          <Menu.Item
            key="todo"
            onClick={() => navigate("/todo")}
            children={"Todo"}
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
