import EditTodoView from "@components/todo/EditTodoView";
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
    <EditTodoView
      title={title}
      onChangeTitle={onChangeTodoTitle}
      onSubmit={onAddTodo}
      submitLabel="Add"
    />
  );
};

export default AddTodo;
