import { List } from "antd";
import { useTodayDoneTodoList } from "../../store/todo";

interface TodayDoneListProps {}

const TodayDoneList = ({}: TodayDoneListProps) => {
  const { todayDoneList } = useTodayDoneTodoList();
  return (
    <List
      size="large"
      bordered
      dataSource={todayDoneList}
      renderItem={(item) => (
        <List.Item data-test-id="TodayDoneList_item">{item.title}</List.Item>
      )}
    />
  );
};

export default TodayDoneList;
