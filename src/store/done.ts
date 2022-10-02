import { atom, useSetRecoilState } from "recoil";
import { getTodayDoneList, saveTodayDoneList } from "./storage";
import { Todo } from "./type";

export interface Done {
  todo: Todo["id"];
  completedAt: number;
}

export const $todayDoneList = atom<Done[]>({
  key: "TD-DONE-LIST.TODAY",
  default: (async () => {
    const doneList = await getTodayDoneList();
    if (!doneList) {
      return [];
    }
    return doneList;
  })(),
  effects: [
    ({ onSet }) => {
      onSet((newValue) => {
        saveTodayDoneList(newValue);
      });
    },
  ],
});

export const useDoneCurrentTodo = () => {
  const setTodayDoneList = useSetRecoilState($todayDoneList);

  return {
    doneCurrentTodo: ({ id }: Todo) => {
      setTodayDoneList((prevTodayDoneList) => {
        return [
          ...prevTodayDoneList,
          {
            todo: id,
            completedAt: Date.now(),
          },
        ];
      });
    },
  };
};
