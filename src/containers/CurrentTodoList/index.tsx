import { Button, List } from "antd";
import { useCurrentTodoList } from "../../store/todo";

const CurrentTodoList = () => {
  const { currentTodoList } = useCurrentTodoList();
  return (
    <>
      <List
        size="large"
        bordered
        header={
          <Button type={"primary"} href="/add">
            newItem
          </Button>
        }
        dataSource={currentTodoList}
        renderItem={(item) => <List.Item>{item.title}</List.Item>}
      />
    </>
  );
};

export default CurrentTodoList;
