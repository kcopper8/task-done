import { selectorFamily, useRecoilValue } from "recoil";
import { $doneList } from "./done";
import { $todoMap } from "./todo";
import { DoneTodo } from "./type";

const $doneTodoList = selectorFamily<DoneTodo[], string>({
  key: "TD-DONE-TODO-LIST.PER_DAY",
  get:
    (dayKey) =>
    ({ get }) => {
      const todoMap = get($todoMap);

      const doneList = get($doneList(dayKey));
      return doneList.map((done) => ({
        id: done.id,
        done,
        todo: todoMap.get(done.todo),
      }));
    },
});

export const useDoneTodoList = (dayKey: string) => {
  const doneList = useRecoilValue($doneTodoList(dayKey));
  return {
    doneList,
  };
};
