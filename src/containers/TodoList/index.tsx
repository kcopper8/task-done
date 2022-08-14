import { Button, List } from "antd";
import { useTodoList } from "../../store/todo";

interface TodoListProps {}

const TodoList = ({}: TodoListProps) => {
  const { todoList } = useTodoList();
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
        dataSource={todoList}
        renderItem={(item) => <List.Item>{item.title}</List.Item>}
      />
    </>
  );
};

export default TodoList;
