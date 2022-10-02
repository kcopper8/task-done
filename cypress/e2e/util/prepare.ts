import { prepareStorage } from "./index";

const PrepareStorage = {
  todoList: () => prepareStorage("todoList", "todoList"),
  clearTodayDoneList: () => prepareStorage("todayDoneList", []),
};

export default PrepareStorage;
