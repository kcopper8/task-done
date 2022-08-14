import AddTodo from "@containers/AddTodo";
import CurrentTodoList from "@containers/CurrentTodoList";
import TodayDoneList from "@containers/TodayDoneList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import GlobalLayout from "./layouts/GlobalLayout";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<GlobalLayout />}>
            <Route path="/" element={<CurrentTodoList />} />
            <Route path="/today" element={<TodayDoneList />} />
            <Route path="/add" element={<AddTodo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
