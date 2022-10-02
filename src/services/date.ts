import { format } from "date-fns";

export const dateKey = (date: Date | number) => format(date, "yyMMdd");

export const todayKey = () => dateKey(Date.now());
