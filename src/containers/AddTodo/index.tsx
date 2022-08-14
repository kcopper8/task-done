import { Button, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddTodo } from "../../store/todo";

interface AddTodoProps {}

const useAddTodoContainer = () => {
  const navigate = useNavigate();
  const { addTodo } = useAddTodo();
  const [title, setTitle] = useState("");
  const handleAddTodo = () => {
    addTodo({
      title,
    });
    navigate("/");
  };

  return {
    onAddTodo: handleAddTodo,
    onChangeTodoTitle: setTitle,
    title,
  };
};

const AddTodo = ({}: AddTodoProps) => {
  const { title, onAddTodo, onChangeTodoTitle } = useAddTodoContainer();

  return (
    <>
      <Input
        placeholder="title"
        value={title}
        onChange={(e) => onChangeTodoTitle(e.target.value)}
        data-test-id="addTodo_title_input"
      />
      <Button data-test-id="addTodo_submit" onClick={onAddTodo}>
        add
      </Button>
    </>
  );
};

export default AddTodo;
