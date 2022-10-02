import EditTodoView from "@components/todo/EditTodoView";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSaveTodo, useTodo } from "../../../store/todo";
import { TodoBody } from "../../../store/type";

const EditTodoForm = ({
  todo,
  onSubmit,
}: {
  todo: TodoBody;
  onSubmit: (todo: TodoBody) => void;
}) => {
  const [title, setTitle] = useState(todo.title);

  return (
    <EditTodoView
      title={title}
      onChangeTitle={(title) => setTitle(title)}
      onSubmit={() =>
        onSubmit({
          title,
        })
      }
      submitLabel="OK"
    />
  );
};

interface EditTodoProps {}
const EditTodo = ({}: EditTodoProps) => {
  const { id } = useParams();
  if (!id) {
    throw new Error("id required");
  }

  const todo = useTodo(id);
  if (!todo) {
    throw new Error("no todo");
  }
  const saveTodo = useSaveTodo();
  const navigate = useNavigate();

  const handleSubmitForm = (newTodo: TodoBody) => {
    saveTodo({
      id: todo.id,
      ...newTodo,
    });
    navigate("/todo");
  };

  return <EditTodoForm todo={todo} onSubmit={handleSubmitForm} />;
};

export default EditTodo;
