/* To-do ************************* */
export type TodoId = string;

export interface Todo {
  id: TodoId;
  title: string;
}
export type TodoBody = Omit<Todo, "id">;

/* Done ************************* */

export type DoneId = string;

export interface Done {
  id: DoneId;
  todo: Todo["id"];
  completedAt: number;
}

/* DoneTodo ********************* */

export interface DoneTodo {
  id: DoneId;
  todo: Todo;
  done: Done;
}
