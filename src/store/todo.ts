import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";
import { v4 } from "uuid";
import { $todayDoneList } from "./done";
import { Todo } from "./type";

const $todoList = atom<Todo[]>({
  key: "TD-TODO-LIST",
  default: [
    { id: "1", title: "Racing car sprays burning fuel into crowd." },
    { id: "2", title: "Japanese princess to wed commoner." },
    { id: "3", title: "Australian walks 100km after outback crash." },
    { id: "4", title: "Man charged over missing wedding girl." },
    { id: "5", title: "Los Angeles battles huge wildfires." },
  ],
});

const $currentTodoList = selector<Todo[]>({
  key: "TD-TODO-LIST.CURRENT",
  get: ({ get }) => {
    const todoList = get($todoList);
    const todayDoneList = get($todayDoneList);

    const doneIdSet = new Set();
    todayDoneList.forEach(({ todo }) => {
      doneIdSet.add(todo);
    });

    return todoList.filter((todo) => {
      return !doneIdSet.has(todo.id);
    });
  },
});

/**
 * 전체 todoList
 */
export const useTodoList = () => {
  const todoList = useRecoilValue($todoList);
  return { todoList };
};

/**
 * 현재 todoList
 */
export const useCurrentTodoList = () => {
  const currentTodoList = useRecoilValue($currentTodoList);
  return { currentTodoList };
};

export const useAddTodo = () => {
  const setTodoList = useSetRecoilState($todoList);
  return {
    addTodo: (todo: Omit<Todo, "id">) => {
      setTodoList((prevTodoList) => {
        return [
          ...prevTodoList,
          {
            ...todo,
            id: v4(),
          },
        ];
      });
    },
  };
};
