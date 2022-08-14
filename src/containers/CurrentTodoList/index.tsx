import { Button, List } from "antd";
import { useNavigate } from "react-router-dom";
import { useDoneCurrentTodo } from "../../store/done";
import { useCurrentTodoList } from "../../store/todo";

const CurrentTodoList = () => {
  const { currentTodoList } = useCurrentTodoList();
  const { doneCurrentTodo } = useDoneCurrentTodo();

  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate("/today")} data-test-id="today_menu_item">
        Today
      </Button>
      <List
        size="large"
        bordered
        header={
          <Button type={"primary"} href="/add">
            newItem
          </Button>
        }
        dataSource={currentTodoList}
        renderItem={(item) => (
          <List.Item data-test-id="CurrentTodoList_item">
            {item.title}
            <Button
              data-test-id="CurrentTodoList_item_done"
              onClick={() => doneCurrentTodo(item)}
            >
              Done
            </Button>
          </List.Item>
        )}
      />
    </>
  );
};

export default CurrentTodoList;
