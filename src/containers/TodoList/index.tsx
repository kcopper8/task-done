import { Button, List } from "antd";
import { Link } from "react-router-dom";
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
        renderItem={(item) => (
          <List.Item>
            <Link to={`/todo/${item.id}`}>{item.title}</Link>
          </List.Item>
        )}
      />
    </>
  );
};

export default TodoList;
