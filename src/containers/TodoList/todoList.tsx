import { List } from "antd";

interface TodoListProps {}

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const TodoList = ({}: TodoListProps) => {
  return (
    <List
      size="large"
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
};

export default TodoList;
