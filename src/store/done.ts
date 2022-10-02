import { todayKey } from "@services/date";
import { atomFamily, selector, useSetRecoilState } from "recoil";
import { getDoneList, saveDoneList } from "./storage";
import { Todo } from "./type";

const $doneList = atomFamily({
  key: "TD-DONE-LIST.PER_DAY",
  default: async (dateKey: string) => {
    const doneList = await getDoneList(dateKey);
    if (!doneList) {
      return [];
    }
    return doneList;
  },
  effects: (dateKey) => [
    ({ onSet }) => {
      onSet((newValue) => {
        saveDoneList(newValue, dateKey);
      });
    },
  ],
});

export const $todayDoneList = selector({
  key: "TD-DONE-LIST.TODAY",
  get: ({ get }) => get($doneList(todayKey())),
});

export const useDoneCurrentTodo = () => {
  const setTodayDoneList = useSetRecoilState($doneList(todayKey()));

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
