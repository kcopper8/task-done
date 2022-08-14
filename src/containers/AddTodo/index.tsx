import { Button, Input } from "antd";

interface AddTodoProps {}

const AddTodo = ({}: AddTodoProps) => {
  return (
    <>
      <Input placeholder="title" />
      <Button>add</Button>
    </>
  );
};

export default AddTodo;
