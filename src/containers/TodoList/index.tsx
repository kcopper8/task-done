import AddTodoModal from "@containers/AddTodoModal";
import { Button, List } from "antd";
import { useState } from "react";

interface TodoListProps {}

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const TodoList = ({}: TodoListProps) => {
  const [openAdd, setOpenAdd] = useState(false);
  const handleClick = () => {
    setOpenAdd(true);
  };

  return (
    <>
      <List
        size="large"
        bordered
        header={
          <Button type={"primary"} onClick={handleClick}>
            newItem
          </Button>
        }
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      {openAdd && <AddTodoModal />}
    </>
  );
};

export default TodoList;
