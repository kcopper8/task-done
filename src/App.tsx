import AddTodo from "@containers/AddTodo";
import CurrentTodoList from "@containers/CurrentTodoList";
import TodayDoneList from "@containers/TodayDoneList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CurrentTodoList />} />
          <Route path="/today" element={<TodayDoneList />} />
          <Route path="/add" element={<AddTodo />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
