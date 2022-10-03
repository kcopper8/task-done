import AddTodo from "@containers/AddTodo";
import CurrentTodoList from "@containers/CurrentTodoList";
import DayDoneTodoList from "@containers/Done/DayDoneTodoList";
import EditTodo from "@containers/Todo/EditTodo";
import TodoList from "@containers/TodoList";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import GlobalLayout from "./layouts/GlobalLayout";

const App = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<></>}>
        <BrowserRouter>
          <Routes>
            <Route element={<GlobalLayout />}>
              <Route path="/" element={<CurrentTodoList />} />
              <Route path="/done" element={<DayDoneTodoList />} />
              <Route path="/todo" element={<TodoList />} />
              <Route path="/todo/:id" element={<EditTodo />} />
              <Route path="/add" element={<AddTodo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
};

export default App;
