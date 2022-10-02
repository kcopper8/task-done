export type TodoId = string;

export interface Todo {
  id: TodoId;
  title: string;
}
export type TodoBody = Omit<Todo, "id">;
