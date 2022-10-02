import { Button, Input } from "antd";

interface EditTodoViewProps {
  title: string;
  onChangeTitle: (title: string) => void;
  onSubmit: () => void;
  submitLabel: string;
}

const EditTodoView = ({
  title,
  onChangeTitle,
  onSubmit,
  submitLabel,
}: EditTodoViewProps) => {
  return (
    <>
      <Input
        placeholder="title"
        value={title}
        onChange={(e) => onChangeTitle(e.target.value)}
        data-test-id="editTodo_title_input"
      />
      <Button data-test-id="editTodo_submit" onClick={onSubmit}>
        {submitLabel}
      </Button>
    </>
  );
};

export default EditTodoView;
