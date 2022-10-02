import * as localforage from "localforage";
import { noop } from "lodash";
import { Done, Todo } from "./type";

const storage = localforage.createInstance({
  name: "storage",
});

export const saveTodoList = (todoList: Todo[]) => {
  storage.setItem("todoList", todoList).then(noop);
};

export const getTodoList = () => {
  return storage.getItem<Todo[]>("todoList");
};

export const saveDoneList = (doneList: Done[], dateKey: string) => {
  storage.setItem(`doneList_${dateKey}`, doneList).then(noop);
};

export const getDoneList = (dateKey: string) => {
  return storage.getItem<Done[]>(`doneList, ${dateKey}`);
};

const resetStorage = (key: string, item: any) => {
  return storage.setItem(key, item);
};

// @ts-ignore
window.resetStorage = resetStorage;
