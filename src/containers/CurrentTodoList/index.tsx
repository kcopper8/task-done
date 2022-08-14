import { Button, List } from "antd";
import { useDoneCurrentTodo } from "../../store/done";
import { useCurrentTodoList } from "../../store/todo";

const CurrentTodoList = () => {
  const { currentTodoList } = useCurrentTodoList();
  const { doneCurrentTodo } = useDoneCurrentTodo();

  return (
    <>
      <List
        size="large"
        bordered
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
