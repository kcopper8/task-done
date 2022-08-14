import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { Todo } from "./type";

const $todoList = atom<Todo[]>({
  key: "TD-TODO-LIST",
  default: [
    { title: "Racing car sprays burning fuel into crowd." },
    { title: "Japanese princess to wed commoner." },
    { title: "Australian walks 100km after outback crash." },
    { title: "Man charged over missing wedding girl." },
    { title: "Los Angeles battles huge wildfires." },
  ],
});

export const useTodoList = () => {
  const todoList = useRecoilValue($todoList);
  return { todoList };
};

export const useAddTodo = () => {
  const setTodoList = useSetRecoilState($todoList);
  return {
    addTodo: (todo: Todo) => {
      setTodoList((prevTodoList) => {
        return [...prevTodoList, todo];
      });
    },
  };
};
