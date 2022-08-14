import AddTodo from "@containers/AddTodo";
import TodoList from "@containers/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
