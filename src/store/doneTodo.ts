import { selector, useRecoilValue } from "recoil";
import { $todayDoneList } from "./done";
import { $todoList } from "./todo";
import { DoneTodo, Todo, TodoId } from "./type";

const $todayDoneTodoList = selector<DoneTodo[]>({
  key: "TD-TODO-LIST.TODAY-DONE",
  get: ({ get }) => {
    const todoList = get($todoList);

    const todoListMap = new Map<TodoId, Todo>();
    todoList.forEach((todo) => {
      todoListMap.set(todo.id, todo);
    });

    const todayDoneList = get($todayDoneList);
    return todayDoneList.map((done) => ({
      id: done.id,
      done,
      todo: todoListMap.get(done.todo),
    }));
  },
});

export const useTodayDoneTodoList = () => {
  const todayDoneList = useRecoilValue($todayDoneTodoList);
  return { todayDoneList };
};
