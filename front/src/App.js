
import {Routes, Route} from "react-router-dom";
import Note from "./pages/note/Note";
import Create from "./pages/create/Create";
import Edit from "./pages/edit/Edit";
import Detail from "./pages/detail/Detail";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Note />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
