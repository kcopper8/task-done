import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";
import { v4 } from "uuid";
import { $todayDoneList } from "./done";
import { getTodoList, saveTodoList } from "./storage";
import { Todo, TodoBody, TodoId } from "./type";

const $todoList = atom<Todo[]>({
  key: "TD-TODO-LIST",
  default: (async () => {
    const todoList = await getTodoList();
    if (!todoList) {
      return [];
    }
    return todoList;
  })(),
  effects: [
    ({ onSet }) => {
      onSet((newValue) => {
        saveTodoList(newValue);
      });
    },
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

const $todayDoneTodoList = selector<Todo[]>({
  key: "TD-TODO-LIST.TODAY-DONE",
  get: ({ get }) => {
    const todoList = get($todoList);

    const todoListMap = new Map();
    todoList.forEach((todo) => {
      todoListMap.set(todo.id, todo);
    });

    const todayDoneList = get($todayDoneList);
    return todayDoneList.map(({ todo }) => todoListMap.get(todo));
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

export const useTodayDoneTodoList = () => {
  const todayDoneList = useRecoilValue($todayDoneTodoList);
  return { todayDoneList };
};

export const useAddTodo = () => {
  const setTodoList = useSetRecoilState($todoList);
  return {
    addTodo: (todo: TodoBody) => {
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

export const useTodo = (id: TodoId) => {
  const { todoList } = useTodoList();
  return todoList.find((todo) => todo.id === id);
};

export const useSaveTodo = () => {
  const setTodoList = useSetRecoilState($todoList);

  return (todo: Todo) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((prevTodo) =>
        prevTodo.id === todo.id ? todo : prevTodo
      );
    });
  };
};
