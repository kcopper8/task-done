import { todayKey } from "@services/date";
import { List } from "antd";
import { useDoneTodoList } from "../../../store/doneTodo";

interface DayDoneTodoListProps {}

const DayDoneTodoList = ({}: DayDoneTodoListProps) => {
  const { doneList } = useDoneTodoList(todayKey());
  return (
    <List
      size="large"
      bordered
      dataSource={doneList}
      renderItem={(item) => (
        <List.Item data-test-id="TodayDoneList_item">
          {item.todo.title}
        </List.Item>
      )}
    />
  );
};

export default DayDoneTodoList;
