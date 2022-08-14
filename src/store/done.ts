import { atom } from "recoil";
import { Todo } from "./type";

export interface Done {
  todo: Todo["id"];
  completedAt: number;
}

export const $todayDoneList = atom<Done[]>({
  key: "TD-DONE-LIST.TODAY",
  default: [],
});
