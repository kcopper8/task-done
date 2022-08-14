import TodoList from "@containers/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
