import * as localforage from "localforage";
import { noop } from "lodash";
import { Done } from "./done";
import { Todo } from "./type";

const storage = localforage.createInstance({
  name: "storage",
});

export const saveTodoList = (todoList: Todo[]) => {
  storage.setItem("todoList", todoList).then(noop);
};

export const getTodoList = () => {
  return storage.getItem<Todo[]>("todoList");
};

export const saveTodayDoneList = (todayDoneList: Done[]) => {
  storage.setItem("todayDoneList", todayDoneList).then(noop);
};

export const getTodayDoneList = () => {
  return storage.getItem<Done[]>("todayDoneList");
};

const resetStorage = (key: string, item: any) => {
  return storage.setItem(key, item);
};

// @ts-ignore
window.resetStorage = resetStorage;
